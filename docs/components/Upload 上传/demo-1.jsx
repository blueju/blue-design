import React from 'react';
import { Upload, Button } from 'blued';

export default () => {
  return (
    <Upload
      type="oa"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      showProgress={true}
    >
      <Button>Click to Upload</Button>
    </Upload>
  );
};
