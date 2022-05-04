import React from 'react';

import './index.less';
import light from './example-light.png';

class TestImagePack extends React.Component {
  render() {
    return (
      <div className="test-image-pack">
        <fieldset>
          <legend>正常模式</legend>
          <img alt="正常模式" src={light} width={400} />
        </fieldset>
        <fieldset>
          <legend>暗黑模式</legend>
          <div className="dark" />
        </fieldset>
      </div>
    );
  }
}

export default TestImagePack;
