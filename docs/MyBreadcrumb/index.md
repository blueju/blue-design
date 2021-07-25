## MyBreadcrumb

分页

```tsx
import React from 'react';
import { MyBreadcrumb } from 'blued';

export default () => {
  return (
    <MyBreadcrumb>
      <MyBreadcrumb.Item>一级菜单</MyBreadcrumb.Item>
      <MyBreadcrumb.Item href="">二级菜单</MyBreadcrumb.Item>
      <MyBreadcrumb.Item href="">三级菜单</MyBreadcrumb.Item>
      <MyBreadcrumb.Item>当前菜单</MyBreadcrumb.Item>
    </MyBreadcrumb>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
