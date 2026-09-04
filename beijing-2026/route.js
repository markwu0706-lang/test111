(function(){
  var id=new URLSearchParams(location.search).get("route")||document.body.dataset.route||"budget", r=window.BEIJING_ROUTES[id]||window.BEIJING_ROUTES.budget;
  document.title=r.title+"｜2026 北京线路｜享轻松旅行";
  document.querySelector("#heroImage").src="assets/"+r.image;
  document.querySelector("#routeTitle").textContent=r.title;
  document.querySelector("#routeLead").textContent=r.lead;
  document.querySelector("#routeDays").textContent=r.days;
  document.querySelector("#routeGroup").textContent=r.group;
  document.querySelector("#routeTag").textContent=r.tag;
  document.querySelector("#routeMeta").innerHTML=r.meta.map(function(v,i){return "<div><small>"+["基本信息","住宿 / 范围","线路亮点"][i]+"</small><b>"+v+"</b></div>"}).join("")+"<div><small>价格信息</small><b>请咨询确认</b></div>";
  var photos=[r.image,"forbidden-city.jpg","great-wall.jpg","temple-heaven-pexels.jpg","summer-palace.jpg","hutong.jpg","birds-nest.jpg","universal.jpg"].filter(function(v,i,a){return a.indexOf(v)===i}).slice(0,5);
  document.querySelector("#photoGrid").innerHTML=photos.map(function(v){return '<img src="assets/'+v+'" alt="北京旅行高清风景">'}).join("");
  document.querySelector("#highlights").innerHTML=r.highlights.map(function(v,i){return '<article class="highlight"><span>0'+(i+1)+'</span><h3>'+v[0]+'</h3><p>'+v[1]+'</p></article>'}).join("");
  document.querySelector("#itinerary").innerHTML=r.itinerary.map(function(v,i){return '<article class="day"><div class="day-no">D'+(i+1)+'</div><div class="day-card"><h3>'+v[0]+'</h3><p>'+v[1]+'</p></div></article>'}).join("");
  document.querySelector("#stay").textContent=r.stay;
  document.querySelector("#service").innerHTML=r.service.map(function(v){return '<li>'+v+'</li>'}).join("");
  document.querySelector("#notice").textContent=r.notice;
})();
