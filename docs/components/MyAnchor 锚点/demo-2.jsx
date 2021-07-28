import React from 'react';
import { MyAnchor } from 'blued';

export default () => {
  return (
    <MyAnchor bounds={10} anchorType="line">
      <MyAnchor.Link href="#components-anchor-demo-basic" title="Basic demo" />
      <MyAnchor.Link
        href="#components-anchor-demo-static"
        title="Static demo"
      />
    </MyAnchor>
  );
};
