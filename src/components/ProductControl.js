import React from "react";
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

class ProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterProductList: [],
      shoppingCart: [],
      formVisibleOnPage: false
    };
  }

  viewCart = () => {
    this.setState({formVisibleOnPage: true});
  }
  addToCart = (product) => {
    this.setState({shoppingCart: [...this.state.shoppingCart, product]})
  }

  render(){
    let currentlyVisibleState = null;
    let ViewCartButton = null; // new code
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <ShoppingCart shoppingList={this.state.shoppingCart}/>
    } else {
      currentlyVisibleState = <ProductList productList={this.state.masterProductList} addToCart={this.addToCart} shoppingCart={this.shoppingCart}/>
      ViewCartButton = <button onClick={this.viewCart}>View Cart</button> // new code
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {/* <ProductList productList={this.state.masterProductList} /> */}
        {ViewCartButton}
      </React.Fragment>
    );
  };
}

handleDeletingProduct = (key) => {
  const newMasterProductList = this.state.masterProductList.filter(product => product.key !==key);
  this.setState({
    masterProductList: newMasterProductList,
    selectedProduct: null
  });
}

export default ProductControl;