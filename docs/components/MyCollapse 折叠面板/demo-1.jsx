import React from 'react';
import { MyCollapse } from 'blued';

const { Panel } = MyCollapse;

export default () => {
  return (
    <MyCollapse defaultActiveKey={['1']} ghost scene="credit">
      <Panel header="企业基本信息" key="1">
        <p>这是企业基本信息</p>
      </Panel>
      <Panel header="个人基本信息" key="2">
        <p>这是个人基本信息</p>
      </Panel>
    </MyCollapse>
  );
};
