---
nav:
  title: 组件
---

# MyPagination 分页

> 与 antd 相比，修改了什么：
>
> 1、统一分页的格式，页码+页数设置+跳转

分页

```tsx
import React from 'react';
import { MyPagination, MyConfigProvider } from 'blued';
import zhCN from 'antd/lib/locale/zh_CN';

export default () => {
  function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
  }

  return (
    <MyConfigProvider locale={zhCN}>
      <MyPagination
        showQuickJumper
        defaultCurrent={2}
        total={500}
        onChange={onChange}
      />
    </MyConfigProvider>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
