## MyButton

主要按钮

```tsx
import React from 'react';
import { MyButton } from 'blued';
import { SearchOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <MyButton type="primary" size="large">
          主按钮
        </MyButton>
      </div>
      <div style={{ marginBottom: 20 }}>
        <MyButton type="primary" icon={<SearchOutlined />}>
          主按钮
        </MyButton>
      </div>
      <div style={{ marginBottom: 20 }}>
        <MyButton type="primary">主按钮</MyButton>
      </div>
      <div>
        <MyButton type="primary" size="small">
          按钮
        </MyButton>
      </div>
    </>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
