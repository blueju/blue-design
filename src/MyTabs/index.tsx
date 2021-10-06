import React from 'react';
import { Tabs } from 'antd';
import styles from './index.less';

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
          <div className={styles.oa}>
            <Tabs {...this.props} type="card">
              {this.props.children}
            </Tabs>
          </div>
        );
      case 'credit':
        return (
          <div className={styles.credit}>
            <Tabs {...this.props} type="card">
              {this.props.children}
            </Tabs>
          </div>
        );
      case 'grayBackground':
        return (
          <div id={styles.grayBackground}>
            <Tabs {...this.props} type="card">
              {this.props.children}
            </Tabs>
          </div>
        );
      case 'whiteBackground':
        return (
          <div id={styles.whiteBackground}>
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
