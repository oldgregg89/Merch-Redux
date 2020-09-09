import React from "react";
import ProductList from './ProductList';

class ProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterProductList: []
    };
  }

  render(){
    return (
      <React.Fragment>
        <ProductList productList={this.state.masterProductList} />
      </React.Fragment>
    );
  };
}

export default ProductControl;