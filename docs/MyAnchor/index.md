---
order: 4
---

## MyAnchor

分页

```tsx
import React from 'react';
import { MyAnchor } from 'blued';

export default () => {
  return (
    <MyAnchor bounds={10}>
      <MyAnchor.Link href="#components-anchor-demo-basic" title="Basic demo" />
      <MyAnchor.Link
        href="#components-anchor-demo-static"
        title="Static demo"
      />
      <MyAnchor.Link href="#API" title="API">
        <MyAnchor.Link href="#Anchor-Props" title="Anchor Props" />
        <MyAnchor.Link href="#Anchor.Link-Props" title="Anchor.Link Props" />
      </MyAnchor.Link>
    </MyAnchor>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
