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
            <Tabs {...this.props} type="card">
              {this.props.children}
            </Tabs>
          </div>
        );
      case 'credit':
        return (
          <div className="blue-credit">
            <Tabs {...this.props} type="card">
              {this.props.children}
            </Tabs>
          </div>
        );
      case 'grayBackground':
        return (
          <div id="gray-background">
            <Tabs {...this.props} type="card">
              {this.props.children}
            </Tabs>
          </div>
        );
      case 'whiteBackground':
        return (
          <div id="white-background">
            <Tabs {...this.props} type="card">
              {this.props.children}
            </Tabs>
          </div>
        );
      default:
        return <Tabs {...this.props}>{this.props.children}</Tabs>;
    }
  }
}

MyTabs.TabPane = Tabs.TabPane;
export default MyTabs;
