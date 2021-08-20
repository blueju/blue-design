import React from 'react';
import { Progress } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styles from './index.less';

class MyProgress extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    console.dir(this.props);
    // @ts-ignore
    if (!this.props.type || this.props.type === 'line') {
      return (
        <div
          style={{
            display: 'flex',
          }}
        >
          <div style={{ marginRight: 6 }}>
            <LoadingOutlined />
          </div>
          <Progress {...this.props} />
        </div>
      );
    } else {
      return <Progress {...this.props} />;
    }
  }
}

export default MyProgress;
