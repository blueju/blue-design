---
nav:
  title: 组件
---

# Pagination 分页

> 与 antd 相比，修改了什么：
>
> 1、统一分页的格式，页码+页数设置+跳转

分页

```tsx
import React from 'react';
import { Pagination, ConfigProvider } from 'blued';
import zhCN from 'antd/lib/locale/zh_CN';

export default () => {
  function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
  }

  return (
    <ConfigProvider locale={zhCN}>
      <Pagination
        showQuickJumper
        defaultCurrent={2}
        total={500}
        onChange={onChange}
      />
    </ConfigProvider>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
