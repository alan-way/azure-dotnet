import React from "react";
import { ProductList } from "./ProductList";

/** 
 *  
 * @date 2022-01-10 
 */
export class Demo extends React.Component<DemoProps, DemoState> {
  constructor(props: DemoProps) {
    super(props);
    this.state = {
      // 初始化状态
    };
  }
  render() {
    return (<div>
      <ProductList />
    </div>)
  }
}
export type DemoProps = {}
export type DemoState = {}