# 面包机项目

> A Vue.js project

## Build Setup

``` bash
# install dependencies  安装依赖
npm install

# serve with hot reload at localhost:8080 开发环境运行
npm run dev

# build for production with minification build为生成环境
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## BEM命名约定

* 所有可以独立模块的地方根元素命名可以加"-"，比如"menu-list"

* block的子元素如何写？`block__title`，`block__content`

* 如果block有状态改变呢？ `block--modifier`，`block__title--change`

* .block 表示抽象或组件的较高级别

* .block__element代表一个后代，.block它有助于形成.block 一个整体。

* .block--modifier表示不同的状态或版本.block

* 双重下划线的原因是，块本身可以用连字符


## vue-resource
项目中如果遇到需要请求接口，我们采用了vue的一个插件：
[vue-resource](https://github.com/pagekit/vue-resource)

## 项目文件结构
开发目录从src开始

```js
-src
   |- assets //静态文件 图片，音频等
   |- components //组件，可以是公共组件
   |- css //所有css样式都在这里
     |- main.less //入口css 所有css命名要符合规定，import-*-xx *是类别（公共库 | model）
   |- library //其他公共库，比如echartjs
   |- page //页面 
   |- router //路由
   |- App.vue //入口文件
   |- main.js //入口js
```
# prefix
1. `input["type=range"]`自定义的时候使用了`-webkit-appearance: none;`点击的时候总是有背景色在闪烁，后来查明是`-webkit-tap-highlight-color: transparent;`搞得鬼
2. `height`和`line-height`的值一样，但是转换出来的rem不一样，很奇怪，最后只能把`line-height`设置成1了


## icon-ClassName
| 中文名 | className|
|--------|----------|
| 待机 | standBy |
| 启动 | start |
| 停止 | stop |
| 完成 | carryout |
| 预约 | reservation |
| 暂停 | timeout |
| 倒计时 | countdown |
| 设备正常 | device-normal |
| 无菜单  | nomenu   |
| 拌面 | noodles |
| 醒面 | wekeUp |
| 搅拌 | stir |
| 烤色 | roasted |
| 食谱 | recipe |
| 柏翠面包机 烘烤 | bake |
| 快速 | fast |
| 快速 点击 | fast-click |
| 解冻 | thaw |
| 解冻  点击 | thaw-click |
| 柏翠面包机 肉松 | flossing |
| 柏翠面包机 肉松 点击 | flossing-click |
| 发酵 | ferment |
| 发酵 点击 | ferment-click |
| 和面 | andface |
| 和面 点击 | andface-click |
| 翻炒 | stirFlick |
| 翻炒 点击 | stirFlick-click |
| 低温发酵米酒 | lowRiceWine |
| 低温发酵米酒 点击 | lowRiceWine-click |
| 八宝米粥 | babaoRice |
| 八宝米粥 点击 | babaoRice-click |
| 法式面包 | french |
| 法式面包 点击 | french-click |
| 和风面包 | windBread |
| 和风面包 点击 | windBread-click |
| 花式果酱 | fancyjam |
| 花式果酱  点击 | fancyjam-click |
| 米饭面包 | ricebread |
| 米饭面包 点击 | ricebread-click |
| 年糕 | rickcake |
| 年糕  点击 | rickcake-click |
| 欧式 | european |
| 欧式 点击 | european-click |
| 欧式甜点 | european-dessert |
| 欧式甜点  点击 | european-dessert-click |
| 烧烤 | barbecue |
| 烧烤 点击 | barbecue-click |
| 酸奶 | yogurt |
| 酸奶 点击 | yogurt-click |
| 生面团 | dough |
| 生面团 点击 | dough-click |
| 无筋面包| noGlutenBread|
| 无筋面包 点击| noGlutenBread-click|
| 西式蛋糕 | westernCake |
| 西式蛋糕 点击 | westernCake-click |
| 玄米面包 | mysteriousRiceBread |
| 玄米面包 点击 | mysteriousRiceBread-click |
| 有机杂粮面包 | organicGrainsBread |
| 有机杂粮面包 点击 | organicGrainsBread-click |
| 玉米面包 | cornBread |
| 玉米面包 点击 | cornBread-click |
| 紫米面包 | purpleRiceBread |
| 紫米面包 点击 | purpleRiceBread-click |
| 自编程序 | selfProgramming |
| 自定义和面 | customAndFace |

