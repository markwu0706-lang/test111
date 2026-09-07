(function () {
  "use strict";
  const state = document.querySelector("#route-state");
  const view = document.querySelector("#main-content");
  const routes = window.BEIJING_ROUTES;
  const id = new URLSearchParams(location.search).get("route") || document.body.dataset.route;
  function element(tag, content, className) {
    const node = document.createElement(tag);
    if (content !== undefined) node.textContent = content;
    if (className) node.className = className;
    return node;
  }
  function renderError(title, message) {
    document.title = title + "｜享轻松旅行";
    const link = element("a", "返回北京线路合集");
    link.href = "./";
    state.replaceChildren(element("h1", title), element("p", message), link);
    state.hidden = false;
    view.hidden = true;
  }
  if (!routes) {
    renderError("线路暂时无法加载", "请刷新页面重试，也可以先返回北京线路合集重新选择。");
    return;
  }
  if (!id || !Object.prototype.hasOwnProperty.call(routes, id)) {
    renderError("未找到这条线路", "这个链接可能不完整或已经失效。请返回北京线路合集，重新选择你感兴趣的产品。");
    return;
  }
  const r = routes[id];
  document.title = r.title + "｜2026 北京线路｜享轻松旅行";
  const hero = document.querySelector("#heroImage");
  hero.src = "assets/" + r.image;
  hero.alt = r.title + " · 北京旅行风景";
  hero.fetchPriority = "high";
  [["routeTitle",r.title],["coverDays",r.days],["coverGroup",r.group],["routeGroup",r.group],["stay",r.stay],["notice",r.notice]].forEach(([key,value]) => {
    document.getElementById(key).textContent = value;
  });
  const meta = r.meta.map((value,index) => {
    const box = element("div");
    box.append(element("small", ["基本信息","住宿 / 范围","线路亮点"][index]), element("b", value));
    return box;
  });
  document.querySelector("#routeMeta").replaceChildren(...meta);
  const photoNames = {
    "forbidden-city.jpg":"故宫宫殿与红墙",
    "great-wall.jpg":"长城山峦",
    "temple-heaven-pexels.jpg":"天坛祈年殿",
    "summer-palace.jpg":"颐和园湖景",
    "hutong.jpg":"北京胡同",
    "birds-nest.jpg":"国家体育场鸟巢",
    "universal.jpg":"北京环球度假区入口"
  };
  const photoSizes = {
    "forbidden-city.jpg":[2400,1600], "great-wall.jpg":[2400,1600],
    "temple-heaven-pexels.jpg":[2400,1600], "summer-palace.jpg":[3554,2369],
    "hutong.jpg":[2400,3600], "birds-nest.jpg":[2400,1600], "universal.jpg":[3840,2560]
  };
  [hero.width,hero.height] = photoSizes[r.image];
  const photoCatalog = window.BEIJING_PHOTOS || {};
  function photoCredit(photo, paragraph) {
    const source = element("a", photo.alt + " · " + photo.credit);
    source.href = photo.source;
    paragraph.append(source);
    if (photo.license && photo.licenseUrl) {
      paragraph.append(document.createTextNode(" · "));
      const license = element("a",photo.license);
      license.href = photo.licenseUrl;
      paragraph.append(license);
    }
    if (photo.changes) paragraph.append(document.createTextNode(" · " + photo.changes));
  }
  const heroPhoto = photoCatalog[r.image];
  const heroCredit = document.querySelector("#heroCredit");
  if (heroCredit && heroPhoto?.inlineCredit) {
    photoCredit(heroPhoto, heroCredit);
    heroCredit.hidden = false;
  }
  const gallery = [...new Set(r.photos || [r.image])].map(name => {
    if (photoCatalog[name]) return photoCatalog[name];
    const size = photoSizes[name];
    return size ? {src:name,alt:photoNames[name],width:size[0],height:size[1]} : null;
  }).filter(Boolean);
  document.querySelector("#photoGrid").replaceChildren(...gallery.map(photo => {
    const img = element("img");
    img.src = "assets/" + photo.src;
    img.alt = photo.alt;
    img.loading = "lazy";
    img.decoding = "async";
    img.width = photo.width;
    img.height = photo.height;
    if (!photo.inlineCredit) return img;
    const group = element("div");
    const caption = element("p",undefined,"photo-sources");
    photoCredit(photo,caption);
    group.append(img,caption);
    return group;
  }));
  const credits = document.querySelector("#photoCredits");
  const creditedPhotos = [photoCatalog[r.image],...gallery].filter(photo => photo && photo.credit);
  if (credits) {
    credits.replaceChildren(element("summary","摄影来源"));
    const seen = new Set();
    creditedPhotos.forEach(photo => {
      const key = photo.source + photo.credit;
      if (seen.has(key)) return;
      seen.add(key);
      const paragraph = element("p");
      photoCredit(photo,paragraph);
      credits.append(paragraph);
    });
    credits.hidden = creditedPhotos.length === 0;
  }
  document.querySelector("#highlights").replaceChildren(...r.highlights.map(([title,copy],index) => {
    const article = element("article", undefined, "highlight");
    article.append(element("span",String(index + 1).padStart(2,"0")),element("h3",title),element("p",copy));
    return article;
  }));
  document.querySelector("#itinerary").replaceChildren(...r.itinerary.map(([title,copy],index) => {
    const article = element("article", undefined, "day");
    const card = element("div", undefined, "day-card");
    card.append(element("h3",title),element("p",copy));
    article.append(element("div","D" + (index+1),"day-no"),card);
    return article;
  }));
  document.querySelector("#service").replaceChildren(...r.service.map(value => element("li",value)));
  view.hidden = false;
  state.hidden = true;
  document.body.classList.remove("route-unavailable");
})();
