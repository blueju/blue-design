import React from 'react';
import { MyUpload, MyButton } from 'blued';

export default () => {
  return (
    <MyUpload
      type="oa"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      showProgress={true}
    >
      <MyButton>Click to Upload</MyButton>
    </MyUpload>
  );
};
