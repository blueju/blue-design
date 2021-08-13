---
nav:
  title: 组件
---

# MyRadio 单选框

> 与 antd 相比，修改了什么：
>
> 1、进行了反色调整，详情请与 antd 官网的 radio 单选框比较

```tsx
import React from 'react';
import { MyRadio } from 'blued';

export default () => {
  return (
    <>
      <MyRadio value={1} checked>
        选择项1
      </MyRadio>
      <MyRadio value={2}>选择项2</MyRadio>
      <MyRadio value={3}>选择项3</MyRadio>
      <MyRadio value={4} disabled>
        选择项4
      </MyRadio>
      <MyRadio value={5} disabled checked>
        选择项5
      </MyRadio>
    </>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
