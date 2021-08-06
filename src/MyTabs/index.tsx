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
    if (this.props?.type === 'oa') {
      return (
        <div className={styles.oa}>
          <Tabs {...this.props} type="card">
            {this.props.children}
          </Tabs>
        </div>
      );
    } else {
      return <Tabs {...this.props}>{this.props.children}</Tabs>;
    }
  }
}

MyTabs.TabPane = Tabs.TabPane;
export default MyTabs;
