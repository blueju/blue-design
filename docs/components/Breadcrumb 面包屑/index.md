---
nav:
  title: 组件
---

# Breadcrumb 面包屑

> 与 antd 相比，修改了什么：
>
> 1、应统一风格的需要，固定分隔符为 /，不可修改或自定义
>
> 2、修改了面包屑最后一项的文本颜色

```tsx
import React from 'react';
import { Breadcrumb } from 'blued';

export default () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">一级内容</Breadcrumb.Item>
      <Breadcrumb.Item href="#/components/my-breadcrumb%20面包屑">
        二级内容
      </Breadcrumb.Item>
      <Breadcrumb.Item>当前内容</Breadcrumb.Item>
    </Breadcrumb>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
