---
nav:
  title: 组件
---

# Radio 单选框

> 与 antd 相比，修改了什么：
>
> 1、进行了反色调整，详情请与 antd 官网的 radio 单选框比较

```tsx
import React from 'react';
import { Radio } from 'blued';

export default () => {
  return (
    <>
      <Radio value={1} checked>
        选择项1
      </Radio>
      <Radio value={2}>选择项2</Radio>
      <Radio value={3}>选择项3</Radio>
      <Radio value={4} disabled>
        选择项4
      </Radio>
      <Radio value={5} disabled checked>
        选择项5
      </Radio>
    </>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
