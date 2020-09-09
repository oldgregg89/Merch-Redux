import React from "react";
import PropTypes from "prop-types";

function Product(props) {
  const childAddToCart = () => {
    props.addToCart(console.log("this works"))
  }
  return (
    <React.Fragment>
      <h3>Product Name: {props.name}</h3>
      <h3>Price: {props.price}</h3>
      <button onClick={childAddToCart}>Add to cart</button>
      <hr />
    </React.Fragment>
  )
}

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  addToCart: PropTypes.func
}

export default Product;