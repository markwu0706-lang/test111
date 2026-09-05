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
  [["routeTitle",r.title],["routeLead",r.lead],["routeDays",r.days],["routeGroup",r.group],["routeTag",r.tag],["stay",r.stay],["notice",r.notice]].forEach(([key,value]) => {
    document.getElementById(key).textContent = value;
  });
  const meta = r.meta.map((value,index) => {
    const box = element("div");
    box.append(element("small", ["基本信息","住宿 / 范围","线路亮点"][index]), element("b", value));
    return box;
  });
  const price = element("div");
  price.append(element("small","价格信息"),element("b","按团期确认"));
  document.querySelector("#routeMeta").replaceChildren(...meta,price);
  const photoNames = {
    "forbidden-city.jpg":"故宫宫殿与红墙",
    "great-wall.jpg":"长城山峦",
    "temple-heaven-pexels.jpg":"天坛祈年殿",
    "summer-palace.jpg":"颐和园湖景",
    "hutong.jpg":"北京胡同",
    "birds-nest.jpg":"国家体育场鸟巢",
    "universal.jpg":"北京环球度假区入口"
  };
  const itineraryText = r.itinerary.flat().join(" ");
  const candidates = [r.image,"forbidden-city.jpg","great-wall.jpg"];
  if (itineraryText.includes("天坛")) candidates.push("temple-heaven-pexels.jpg");
  if (itineraryText.includes("颐和园")) candidates.push("summer-palace.jpg");
  if (itineraryText.includes("环球")) candidates.push("universal.jpg");
  document.querySelector("#photoGrid").replaceChildren(...[...new Set(candidates)].map(name => {
    const img = element("img");
    img.src = "assets/" + name;
    img.alt = photoNames[name] || "北京旅行风景";
    img.loading = "lazy";
    img.width = 1200;
    img.height = 800;
    return img;
  }));
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
