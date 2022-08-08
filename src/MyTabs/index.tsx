import React from 'react';
import { Tabs } from 'antd';
import './index.less';

class MyTabs extends React.Component {
  static TabPane: any;

  constructor(props: any) {
    super(props);
  }

  render() {
    // @ts-ignore
    switch (this.props?.scene) {
      case 'oa':
        return (
          <div className="blue-oa">
            <Tabs {...this.props} type="card" />
          </div>
        );
      case 'credit':
        return (
          <div className="blue-credit">
            <Tabs {...this.props} type="card" />
          </div>
        );
      case 'grayBackground':
        return (
          <div id="gray-background">
            <Tabs {...this.props} type="card" />
          </div>
        );
      case 'whiteBackground':
        return (
          <div id="white-background">
            <Tabs {...this.props} type="card" />
          </div>
        );
      default:
        return <Tabs {...this.props} />;
    }
  }
}

MyTabs.TabPane = Tabs.TabPane;
export default MyTabs;
