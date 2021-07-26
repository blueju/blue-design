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
        <MyAnchor.Link href="#MyAnchor-Props" title="MyAnchor Props" />
        <MyAnchor.Link
          href="#MyAnchor.Link-Props"
          title="MyAnchor.Link Props"
        />
      </MyAnchor.Link>
    </MyAnchor>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
