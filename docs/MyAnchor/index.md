---
order: 4
---

## MyAnchor

分页

```tsx
import React from 'react';
import { MyAnchor } from 'blued';
import { Anchor } from 'antd';

export default () => {
  console.dir(MyAnchor);
  return (
    <Anchor bounds={10}>
      <Anchor.Link href="#components-anchor-demo-basic" title="Basic demo" />
      <Anchor.Link href="#components-anchor-demo-static" title="Static demo" />
      <Anchor.Link href="#API" title="API">
        <Anchor.Link href="#Anchor-Props" title="Anchor Props" />
        <Anchor.Link href="#Anchor.Link-Props" title="Anchor.Link Props" />
      </Anchor.Link>
    </Anchor>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
