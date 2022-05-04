---
nav:
  title: 组件
---

# Button 按钮

> 与 antd 相比，修改了什么：
>
> 1、修改了失效按钮的样子
>
> 2、修改了主题色、警告色、错误色、失效色等颜色的色值
>
> 3、修改了按钮的边框圆角弧度

主要按钮

```tsx
import React from 'react';
import { Button } from 'blued';
import { SearchOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <Button type="primary" size="large">
          主按钮
        </Button>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Button type="primary" icon={<SearchOutlined />}>
          主按钮
        </Button>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Button type="primary">主按钮</Button>
      </div>
      <div>
        <Button type="primary" size="small">
          按钮
        </Button>
      </div>
    </>
  );
};
```

次要按钮

```tsx
import React from 'react';
import { Button } from 'blued';
import { SearchOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <Button size="large">次按钮</Button>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Button icon={<SearchOutlined />}>次按钮</Button>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Button>次按钮</Button>
      </div>
      <div>
        <Button size="small">按钮</Button>
      </div>
    </>
  );
};
```

失效按钮

```tsx
import React from 'react';
import { Button } from 'blued';
import { SearchOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <Button type="primary" size="large" disabled>
          失效按钮
        </Button>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Button type="primary" disabled>
          失效按钮
        </Button>
      </div>
      <div>
        <Button type="primary" size="small" disabled>
          失效
        </Button>
      </div>
    </>
  );
};
```

危险按钮

```tsx
import React from 'react';
import { Button } from 'blued';
import { SearchOutlined } from '@ant-design/icons';

export default () => {
  return (
    <Button type="primary" danger>
      危险按钮
    </Button>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
