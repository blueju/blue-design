import React from 'react';
import { Anchor } from 'blued';

export default () => {
  return (
    <Anchor bounds={10} anchorType="line">
      <Anchor.Link
        href="#/components/my-anchor 锚点#components-anchor-demo-basic"
        title="Basic demo"
      />
      <Anchor.Link
        href="#/components/my-anchor 锚点#components-anchor-demo-static"
        title="Static demo"
      />
    </Anchor>
  );
};
