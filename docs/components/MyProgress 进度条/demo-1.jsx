import React from 'react';
import { MyProgress } from 'blued';

export default () => {
  return (
    <>
      {/* <MyProgress percent={30} /> */}
      {/* <MyProgress percent={50} status="active" /> */}
      <MyProgress percent={70} status="exception" />
      {/* <MyProgress percent={100} /> */}
      {/* <MyProgress percent={50} showInfo={false} /> */}
    </>
  );
};
