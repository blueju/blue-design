---
nav:
  title: 组件
---

## MyButton 按钮

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

次要按钮

```tsx
import React from 'react';
import { MyButton } from 'blued';
import { SearchOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <MyButton size="large">次按钮</MyButton>
      </div>
      <div style={{ marginBottom: 20 }}>
        <MyButton icon={<SearchOutlined />}>次按钮</MyButton>
      </div>
      <div style={{ marginBottom: 20 }}>
        <MyButton>次按钮</MyButton>
      </div>
      <div>
        <MyButton size="small">按钮</MyButton>
      </div>
    </>
  );
};
```

失效按钮

```tsx
import React from 'react';
import { MyButton } from 'blued';
import { SearchOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <MyButton type="primary" size="large" disabled>
          失效按钮
        </MyButton>
      </div>
      <div style={{ marginBottom: 20 }}>
        <MyButton type="primary" disabled>
          失效按钮
        </MyButton>
      </div>
      <div>
        <MyButton type="primary" size="small" disabled>
          失效
        </MyButton>
      </div>
    </>
  );
};
```

危险按钮

```tsx
import React from 'react';
import { MyButton } from 'blued';
import { SearchOutlined } from '@ant-design/icons';

export default () => {
  return (
    <MyButton type="primary" danger>
      危险按钮
    </MyButton>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
