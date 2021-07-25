---
order: 2
---

## MyPagination

分页

```tsx
import React from 'react';
import { MyPagination } from 'blued';

export default () => {
  function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
  }

  return (
    <MyPagination
      showQuickJumper
      defaultCurrent={2}
      total={500}
      onChange={onChange}
    />
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
