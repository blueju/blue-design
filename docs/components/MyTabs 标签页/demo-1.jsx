import React from 'react';
import { MyTabs } from 'blued';

export default () => {
  function callback(key) {
    console.log(key);
  }

  console.dir(MyTabs);
  return (
    <MyTabs defaultActiveKey="1" onChange={callback} type="oa">
      <MyTabs.TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </MyTabs.TabPane>
      <MyTabs.TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </MyTabs.TabPane>
      <MyTabs.TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </MyTabs.TabPane>
    </MyTabs>
  );
};
