import React from 'react';
import { Upload } from 'antd';
import styles from './index.less';

class MyUpload extends React.Component {
  static LIST_IGNORE: string;
  static Dragger: any;

  constructor(props: any) {
    super(props);
  }

  render() {
    return <Upload {...this.props}>{this.props.children}</Upload>;
  }
}

MyUpload.LIST_IGNORE = Upload.LIST_IGNORE;
MyUpload.Dragger = Upload.Dragger;
export default MyUpload;
