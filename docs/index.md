---
hero:
  title: blue-design
  desc: blue-design，blue-design，基于曾参与公司组件库搭建及开发的经验，自己搞的一套基础组件库壳子，基本可直接套壳使用。<br/>（⚠⚠⚠ 本仓库不会经常更新）
  actions:
    - text: 开始
      link: /components/anchor%20锚点
    - text: Github
      link: https://github.com/blueju/blue-design
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: 可靠
    desc: 基于 Ant Design
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png
    title: 丰富
    desc: 多了一点内部需要但 Ant Design 没有的功能
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: 自研
    desc: 自己基于 dumi 搭建的
footer: Open-source MIT Licensed | Copyright © 2020<br />Powered by [dumi](https://d.umijs.org)
---

# README

> blue-design
>
> reference from：antd = ant + design

只提供设计稿内所涉及到场景的 demo，并未删减 ant design 的 api，可根据业务场景，参考 ant design 的 demo 自行组装 api。

打包时出现以下两个类似错误（可能）是正常现象，暂未发现影响功能。

```
The 'this' keyword is equivalent to 'undefined' at the top level of an ES module, and has been rewritten
```

```
Circular dependency: node_modules\antd\es\tree\Tree.js -> node_modules\antd\es\tree\DirectoryTree.js -> node_modules\antd\es\tree\Tree.js
```

社区给的方案是在 rollup 的 onwarn 函数中发现如果是这两个错误，就不输出。
但是在 dumi 和 father-build 的文档中貌似并未对外提供 rollup 的 onwarn 的配置方式，因此后续我可能会打算直接引入 rollup 进行 umd 打包，cjs 和 esm 的打包仍然交给 rollup 处理。

参考地址：

1. https://github.com/rollup/rollup/issues/1518
2. https://stackoverflow.com/questions/43556940/rollup-js-and-this-keyword-is-equivalent-to-undefined
3. https://github.com/rollup/rollup/issues/1089
