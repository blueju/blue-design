import React from 'react';
import { Collapse, CollapseProps } from 'antd';

// @ts-ignore
import expandIcon from './expand-icon.png';
import styles from './index.less';

interface MyCollapseProps extends CollapseProps {
  /** 应用场景 */
  scene?: string;
}

interface MyCollapseInterface extends React.FC<CollapseProps> {
  Panel: typeof Collapse.Panel;
}

interface CollapsePanelProps {
  isActive?: boolean;
}

const MyCollapse: MyCollapseInterface = (props: MyCollapseProps) => {
  const { scene } = props;

  function getExpandIcon(panelProps: CollapsePanelProps) {
    const { isActive } = panelProps;
    return (
      <img
        alt="自定义切换图标"
        src={expandIcon}
        className={
          isActive ? styles.expandIconActive : styles.expandIconInactive
        }
        style={{ transition: 'transform .24s' }}
      />
    );
  }

  switch (scene) {
    case 'credit':
      return <Collapse {...props} expandIcon={getExpandIcon} />;
    default:
      return <Collapse {...props} />;
  }
};

MyCollapse.displayName = 'MyCollapse';
MyCollapse.Panel = Collapse.Panel;

export default MyCollapse;
