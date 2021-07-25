import React from 'react';
import { Breadcrumb } from 'antd';

export default (props: any) => (
  <Breadcrumb {...props} separator=">">
    {props.children}
  </Breadcrumb>
);
