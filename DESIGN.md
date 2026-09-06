---
version: alpha
name: "享轻松旅行"
description: "以品牌蓝串联旅行合集和独立行程的中文旅游官网"
colors:
  primary: "#0084cc"
  action: "#006aa3"
  ink: "#163447"
  muted: "#526875"
  line: "#d9e5ec"
  surface: "#ffffff"
  canvas: "#f0f5f8"
  note: "#bd8b36"
typography:
  sans:
    fontFamily: '"PingFang SC", "Microsoft YaHei", system-ui, sans-serif'
  display:
    fontFamily: '"Songti SC", "STSong", serif'
rounded:
  DEFAULT: "16px"
  control: "8px"
  panel: "12px"
spacing:
  page-max: "1280px"
  content-max: "1160px"
  section-gap: "72px"
  mobile-section-gap: "44px"
components:
  button: {}
  card: {}
  itinerary: {}
  price-table: {}
---
# 享轻松旅行 Design System

## Overview

### Creative North Star
像一本在蓝色湖边翻开的旅行手册：手机先看风景、再读信息；电脑左侧讲述、右侧保留宽阔风景。品牌表达留给大标题与摄影，行程安排保持朴素、准确、可查找。

### Product context and register
- Audience and primary job: 国内旅行客人，在手机分享链接或电脑上比较主题与线路，再核对行程和费用。
- Target market: 用户明确要求中国国内可访问的网站，现有产品均为中国境内目的地。
- Locale: 简体中文为主要信息；英文仅作12px栏目辅文，不承担独立功能或事实。无日本市场路由。
- Usage scene: 微信分享入口、移动端长页浏览、桌面对比。没有账户、付款或下单系统。
- Register: 营销品牌网站，不是后台应用。
- Memorable signature: 新疆的左右分栏湖景封面，以及按真实地理顺序排列的八日线路节点。
- Restraint: 产品卡片、价格、房型、行程使用统一阅读节奏与明确标签。
- Anti-references: 后台仪表盘、密集促销海报、霓虹渐变、全屏文字压图。
- Token ownership: 本文镜像 site-ui.css 的 --xqs-*，不生成运行时代码。新疆组件位于 xinjiang-2026/styles.css。所有合集、详情最终加载 standalone-pages.css；它只服务独立落地页，不由官网首页加载。修改令牌须同步本文并检查相关页面。
- Approved direction (2026-09-06): 用户明确要求 H5 优先，四组合集与全部产品详情移除统一官网头尾、Logo导航、面包屑、浮动官网入口、跨主题推荐与品牌页脚。首页保留原结构。详情仅保留内容中的同组合集返回链接及本页章节导航，支持微信直接分享进入。

## Colors
品牌主色 #0084cc 保留。小号白字按钮改用 #006aa3，提升对比。#163447 为主要文字；#526875 为正文辅助色。背景 #f0f5f8、白色阅读面和 #d9e5ec 细边框形成层级。仅注意事项使用琥珀色 #bd8b36。没有暗色主题切换；页脚可用深蓝。所有链接有3px可见焦点，不能只靠颜色区分主要动作。

## Typography
正文系统中文无衬线，16px/1.75–1.9；卡片次级信息14–15px。大标题宋体回退，手机32–44px、电脑42–80px，长线路名自然换行。行程标题18–19px。英文栏目12px，仅辅助。数字采用表格数字，人民币保留原始报价，不修改加价逻辑。没有远程字体依赖。

## Layout
外层1280px，内容1160px；手机两侧18px，768px以上 clamp(28px,4vw,60px)。合集卡片手机单列、768px以上两列、1080px以上三列；同排3:2风景图，卡片CTA底部对齐。最后一张卡片不得单独缩窄或横跨整排。住宿图统一4:3容器、contain完整展示，手机全宽单列、电脑两列；不能裁掉床或房型。
电脑60–64px、手机40–44px区块间距。独立页无官网头部，详情章节导航52px、贴顶0；standalone-document的scroll-padding为64px，首页保持旧规则。东北报价保留语义table、原金额与团期；手机每行变成日期＋成人/儿童/单房差三列的可读卡片，无需横滑，电脑仍是标准表格。严禁用过小字体容纳报价。
为图片设置宽高/比例，禁止用布局隐藏溢出来掩盖内容超宽。全局scrollbar-gutter stable。

## Elevation & Depth
白色阅读面、淡蓝信息条和细边框承担主要分组。卡片仅悬停有轻微阴影和3px位移。禁止给每个段落加阴影、玻璃模糊或渐变。章节导航使用不透明背景。

## Shapes
卡片16px，常规内容框12px，按钮8px。行程D1–D8标记圆形，不用于不相关装饰。

## Components

### Foundational visual states
默认可读；hover轻微加深/浮起；focus-visible清晰描边。静态链接不设虚假加载状态。北京动态详情默认有可恢复信息；缺脚本提示刷新/返回，非法key明确“未找到这条线路”，不回落到其他产品。无忙碌提交、成功toast或表单。

### Buttons and actions
主按钮48px高，深蓝白字，箭头为辅助。每个首屏一个主要动作。卡片整张可点击，不能再嵌套按钮。无实际客服地址前不可把返回线路按钮标成“咨询成功”或“咨询顾问”。

### Navigation and data display
首页→主题合集→独立详情；合集与详情均可作为独立分享链接。详情在产品封面内提供同组合集链接，不依赖浏览历史；移除官网统一导航、面包屑、页脚。长详情保留贴顶章节导航，可横向滚动。东北报价用语义table及行列th，手机按日期卡片展示。酒店参考名录可展开，默认房间图片始终可见。必要摄影署名移入画册内的小型展开项，不做品牌页脚。

### Forms and overlays
本站目前没有表单、搜索、筛选、登录、下单、弹窗。不要添加无法完成的交互。房间图片不启用灯箱。

### Iconography
保留用户提供的裁切品牌图；保持原始比例。方向箭头仅辅助可见中文标签，不用emoji充当导航图标。

### Motion
200ms内悬停过渡。没有自动轮播。prefers-reduced-motion关闭位移相关过渡及平滑滚动；内容不依赖动画才能看到。

### Content and data visualization
旅行文案简洁温和，不使用“已按PDF整理”等制作过程语句。行程及合同相关事实来自该线路自身PDF，缺失不交叉套用。引用住宿/车辆只能用产品实景，低分辨率来源不冒称高清原图。新增风景照片必须有可验证来源及许可。集合页不复制长篇行程。

## Do's and Don'ts
- Do: 同排图片尺寸一致，完整展示房间照片。
- Do: 区分真实费用、赠送体验、另外消费与尚未确认的信息。
- Don't: 缺失PDF时将另一线路的内容套到该产品。
- Don't: 添加没有真实联系终点的咨询按钮或虚构团期报价。
