import React from 'react';
import { Anchor } from 'antd';
import './index.less';

// console.dir(Anchor);

// 继承方式的高阶组件
// function HOC(WrappedComponent: any) {
//   return class HOC extends WrappedComponent {
//     constructor(props: any) {
//       super(props);
//     }
//     render() {
//       return super.render();
//     }
//   };
// }
// export default HOC(Anchor);

// 代理方式的高阶组件（推荐）
// function HOC(WrappedComponent: any) {
//   class MyAnchor extends React.Component {
//     static Link: any;
//     constructor(props: any) {
//       super(props);
//     }
//     render() {
//       return (
//         <WrappedComponent {...this.props}>
//           {this.props.children}
//         </WrappedComponent>
//       );
//     }
//   }
//   MyAnchor.Link = WrappedComponent.Link;
//   return MyAnchor;
// }
// export default HOC(Anchor);

// 一开始的方式
class MyAnchor extends React.Component {
  static Link: any;
  constructor(props: any) {
    super(props);
  }
  render() {
    // @ts-ignore
    if (this.props?.anchorType === 'line') {
      return (
        <div className="blue-anchor">
          <Anchor {...this.props} />
        </div>
      );
    } else {
      return <Anchor {...this.props} />;
    }
  }
}

MyAnchor.Link = Anchor.Link;
export default MyAnchor;
