import React from 'react';
import { Progress, Upload, Row, Col } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import {
  BorderOutlined,
  CloseCircleFilled,
  CheckCircleFilled,
  LoadingOutlined,
} from '@ant-design/icons';
import styles from './index.less';
import IconFont from '../iconfont';

class MyUpload extends React.Component {
  static LIST_IGNORE: string;
  static Dragger: any;

  constructor(props: any) {
    super(props);
    this.itemRender = this.itemRender.bind(this);
  }

  oaUploadRef = React.createRef();

  getStatusIcon(file: UploadFile) {
    switch (file.status) {
      case 'uploading':
        return <LoadingOutlined className={styles.loadingOutlined} />;
      case 'error':
        return file.percent === 100 ? (
          <CheckCircleFilled className={styles.checkCircleFilled} />
        ) : (
          <CloseCircleFilled className={styles.closeCircleFilled} />
        );
      case 'done':
        return <CheckCircleFilled className={styles.checkCircleFilled} />;
    }
  }

  reUpload(file: UploadFile) {
    // @ts-ignore
    this.oaUploadRef.current.upload.uploader.uploadFiles([file]);
  }

  getPercentOrReUploadIcon(file: UploadFile) {
    if (file.status === 'error') {
      return (
        <IconFont
          type="icon-re-upload"
          className={styles.reUploadIcon}
          onClick={() => this.reUpload(file)}
        />
      );
    } else {
      return (
        <div className={styles.percent}>
          {Math.floor(file.percent || 0) + '%'}
        </div>
      );
    }
  }

  getFileIcon(file: UploadFile) {
    const ext = file.name.split('.').pop();
    switch (ext) {
      case 'doc':
        return <IconFont type="icon-word" style={{ fontSize: 18 }} />;
      case 'docx':
        return <IconFont type="icon-word" style={{ fontSize: 18 }} />;
      case 'ppt':
        return <IconFont type="icon-ppt" style={{ fontSize: 18 }} />;
      case 'pptx':
        return <IconFont type="icon-ppt" style={{ fontSize: 18 }} />;
      case 'zip':
        return <IconFont type="icon-zip" style={{ fontSize: 18 }} />;
      case 'rar':
        return <IconFont type="icon-zip" style={{ fontSize: 18 }} />;
      default:
        return <IconFont type="icon-file" style={{ fontSize: 18 }} />;
    }
  }

  // @ts-ignore
  itemRender(originNode, file, fileList, actions) {
    console.log(originNode, file, fileList, actions);
    return (
      <div
        className={styles.itemRender}
        style={{ padding: 6, backgroundColor: '#f0f6ff' }}
      >
        <Row gutter={6}>
          <Col flex="none">{this.getFileIcon(file)}</Col>
          <Col flex="auto">{file.name}</Col>
          <Col flex="none">
            <CloseCircleFilled
              style={{ fontSize: 16, color: '#d8d8d8' }}
              onClick={actions.remove}
            />
          </Col>
        </Row>
        <Row gutter={6} align="middle">
          <Col flex="none">
            <div style={{ width: 18, fontSize: 10, textAlign: 'right' }}>
              {this.getStatusIcon(file)}
            </div>
          </Col>
          <Col flex="auto">
            <Progress
              strokeWidth={4}
              showInfo={false}
              status="active"
              percent={file.percent}
            />
          </Col>
          <Col flex="none">{this.getPercentOrReUploadIcon(file)}</Col>
        </Row>
      </div>
    );
  }

  render() {
    // @ts-ignore
    switch (this.props?.type) {
      case 'oa':
        return (
          <Upload
            ref={this.oaUploadRef}
            {...this.props}
            itemRender={this.itemRender}
          >
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
