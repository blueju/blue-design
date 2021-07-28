---
nav:
  title: 组件
---

## MyBreadcrumb 面包屑

分页

```tsx
import React from 'react';
import { MyBreadcrumb } from 'blued';

export default () => {
  return (
    <MyBreadcrumb>
      <MyBreadcrumb.Item href="#">一级内容</MyBreadcrumb.Item>
      <MyBreadcrumb.Item href="#">二级内容</MyBreadcrumb.Item>
      <MyBreadcrumb.Item>当前内容</MyBreadcrumb.Item>
    </MyBreadcrumb>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
