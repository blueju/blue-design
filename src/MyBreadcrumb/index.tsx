import React from 'react';
import { Breadcrumb } from 'antd';

function MyBreadcrumb(props: any) {
  return (
    <Breadcrumb {...props} separator=">">
      {props.children}
    </Breadcrumb>
  );
}

const { Item, Separator } = Breadcrumb;
MyBreadcrumb.Item = Item;
MyBreadcrumb.Separator = Separator;

export default MyBreadcrumb;
