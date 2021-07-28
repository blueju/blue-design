---
order: 2
---

## MyPagination

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
