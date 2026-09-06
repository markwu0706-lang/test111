---
version: alpha
name: "享轻松旅行"
description: "官网保留品牌蓝，独立旅行落地页严格采用指定秀米海报模板"
colors:
  primary: "#0084cc"
  template-teal: "#387f7d"
  template-purple: "#66358d"
  template-gold: "#ffe894"
  ink: "#3e3e3e"
  muted: "#687472"
  line: "#b9cecb"
  surface: "#ffffff"
  canvas: "#fafafa"
typography:
  sans:
    fontFamily: '"Noto Sans CJK SC", "Helvetica Neue", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif'
  display:
    fontFamily: '"Songti SC", "STSong", "SimSun", serif'
rounded:
  DEFAULT: "14px"
  control: "6px"
spacing:
  page-max: "750px"
  text-width: "90%"
  section-gap: "36px"
components:
  poster: {}
  itinerary: {}
  price-table: {}
---
# 享轻松旅行 Design System

## Overview

### Creative North Star
指定秀米模板的一张封面接一列产品海报。所有独立合集和详情都是手机满宽、电脑居中的纵向长页，不再采用官网式分栏、宽屏卡片网格或自拟导读。

### Product context and register
- 国内旅行客户，主要在微信/H5阅读产品、点击海报进入对应详情。中文营销内容网站，无账户、订单、付款或管理操作。
- Authoritative direction (2026-09-06): 用户要求所有落地页样式按秀米模板1:1，包括字体、图片和布局，不得自行补充信息。此明确指令取代此前1280/1160宽度、多列网格、品牌蓝详情及章节导航方向。
- Reference collection: https://r.xiumius.cn/board/v5/40fj7/667026829?share_depth=1 ，读取时为“新疆线路合集”。内容是1080px宽的1张封面+13张带链接海报；桌面阅读纸页750px、手机满宽。
- Reference detail: 从上述合集实际链接进入 https://a.xiumius.cn/board/v5/40fj7/715097800 。顶部是长图，酒店和简易行程也烘焙于图片；后部为真实文字行程和费用。
- 我方仍为原有4组合集、16条产品，参考模板的其他13条线路不是新增产品。行程、价格、房车实景仅使用对应产品原资料。
- Register: 独立海报式旅行长页；没有新的品牌导航、页脚、推荐、筛选、浮动CTA或自拟英文栏目。
- Token ownership: 独立14个HTML模板仅加载 xiumi-template.css；它是唯一运行时视觉owner。官网首页仍使用原 styles.css / site-ui.css 等，品牌蓝#0084cc不变。旧独立样式文件保留作回滚，不再被这些页面加载。

## Colors
合集照片上白色元信息、浅黄宋体产品标题。白色卡片、紫色编号、墨绿信息标签与行程条。详情日序用淡金底，标题下1px墨绿线；费用保留真实币种和金额，数字橙红色强调。没有额外主题切换。

## Typography
封面及产品标题来自参考图的宋体视觉风格；新疆合集直接复用用户指定模板原封面。其余海报使用系统宋体回退与真实产品名，字体原文件不能从烘焙图片提取，因此不声称更换文本后逐像素相同。
合集采用容器单位同比缩放：封面标题15.3cqi，卡片标题10.9cqi，长名8.2cqi，副标题3.15cqi、卖点2.55cqi。标题不得截断或省略产品名称。
详情DOM测得正文14px/1.6、标题16px/1.6、日序18.286px；参考父层另scale(.9)，我方以12.6/14.4/16.4574px实现其最终视觉尺寸。费用正文14px/1.8。保留浏览器缩放，不设maximum-scale。

## Layout
独立长页最大750px；手机无外侧框架边距。参考封面1080:1087，产品照片40cqi高，海报单列；下半部左卖点右点击区域，整卡为唯一链接。
详情以整幅封面、事实、摄影/实景展示、详细行程、真实费用和条件顺序阅读。正文列90%，照片按原比例展示。酒店实景全宽单列保留细节，不恢复曾被用户取消的放大功能。房间完整优先于参考酒店海报中的三列缩略图。
东北报价仍为语义table，日期、成人、儿童、单房差完整；不改币种、加价、日期、脚注。北京无原报价，删除先前自加“按团期确认”占位卡。
全局可见主题滚动条；手机关闭稳定gutter以匹配模板满宽，桌面保留。所有图片提供真实尺寸，正文不靠隐藏溢出来掩盖错误。

## Elevation & Depth
只在合集海报外保留模板柔阴影和圆角，详情普通文字和图片不套卡片，不加悬浮提升。电脑白纸细阴影同参考阅读器；不复制平台广告、举报、阅读量或二维码侧栏。

## Shapes
合集卡片约3.3cqi圆角；标签约1.4cqi。其他图片直角、原始比例。日序不再用圆点时间轴。

## Components
### Posters
整卡语义a，图片+真实产品标题+原资料卖点+时长/集散地+点击提示。已知团型/价格才显示；缺团期不编发班标签，缺少卖点不为凑四条而编造。
点击手势使用已有Lucide Pointer图标路径（ISC），不以emoji替代。

### Itinerary and services
日序视觉40.5px列、右标题余宽、正文跨满90%列。移除贴顶章节导航。保留原日期、住宿、交通、餐食、费用包含/不含和条件，删除自拟推荐与制作过程说明。酒店名录直接展示，无新折叠交互。

### Navigation
官网→合集→详情现有URL不变。合集/详情无官网统一头尾。详情没有模板之外的返回条或跨产品推荐，可使用浏览器返回。北京未知key显示实际错误状态及返回合集链接，不套用默认产品。

### States and accessibility
整张海报可键盘聚焦，3px focus-visible；无嵌套按钮和假链接。图片有alt、宽高、按需懒加载。原始报价table保留caption、scope。北京无脚本/数据缺失/非法key提供明确恢复路径；正常内容加载后无占位说明。

## Iconography
官网继续使用用户提供的裁切Logo。独立落地页不展示品牌Logo导航。海报仅有既有点击手势及可见中文点击提示。

## Motion
无自动轮播和入场动画。prefers-reduced-motion关闭平滑滚动，内容不依赖动画。没有灯箱。

## Content and data visualization
不新增宣传语、推荐、承诺、团期、金额或制作过程说明。不把模板其他产品事实覆盖到当前产品。东北成人+500、儿童+200既有报价不变；大兴安岭不恢复用车图片或报价说明；房间/车辆不换成网上找图。
SH13保留8天7晚及原实景。SH08/SH10未获得原PDF时只保留核验过的产品基本信息和未开放状态，不编造详情。版权要求的已有摄影署名留在图片区域，Pexels非必需展示性署名移除以避免多余信息。

## Do's and Don'ts
- Do: 以参考实测几何、字号和图片比例为准，检查390/320手机及1280电脑，核对20个实际URL。
- Do: 变更前后比较原房车图片、所有报价表和每日行程；官网、CRM及域名验证文件不能改动。
- Don't: 再自行做宽屏分栏或补“适合谁/怎么选/收藏秋天”等营销导读。
- Don't: 因参考图片合成文字而伪称可提取原字体，或为视觉1:1复制不属于本产品的酒店、车型、价格。
