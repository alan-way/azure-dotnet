import React from "react";
/** 
 *  
 * @date 2022-01-10 
 */
export class ProductList extends React.Component<ProductListProps, ProductListState> {
  constructor(props: ProductListProps) {
    super(props);
    this.state = {
      // 初始化状态
    };
  }
  render() {
    return (<div>
      <div className="main ui text container">
        <h1 className="ui dividing centered header">Popular Products</h1>
        <div className="ui unstackable items"> Hello friend </div>
      </div>
    </div>)
  }
}
export type ProductListProps = {}
export type ProductListState = {}