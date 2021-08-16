import React from 'react';
import { Progress, Upload } from 'antd';
import styles from './index.less';
import IconFont from '../iconfont';

class MyUpload extends React.Component {
  static LIST_IGNORE: string;
  static Dragger: any;

  constructor(props: any) {
    super(props);
    this.itemRender = this.itemRender.bind(this);
  }

  // @ts-ignore
  itemRender(originNode, file, fileList, actions) {
    console.log(originNode, file, fileList, actions);
    return (
      <>
        {originNode}
        <Progress></Progress>
      </>
    );
  }

  render() {
    // @ts-ignore
    switch (this.props?.type) {
      case 'oa':
        return (
          <Upload {...this.props} itemRender={this.itemRender}>
            {this.props.children}
          </Upload>
        );
      default:
        return <Upload {...this.props}>{this.props.children}</Upload>;
    }
  }
}

MyUpload.LIST_IGNORE = Upload.LIST_IGNORE;
MyUpload.Dragger = Upload.Dragger;
export default MyUpload;
