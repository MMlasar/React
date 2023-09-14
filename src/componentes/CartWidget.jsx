import React from "react";
import { FaShoppingCart } from "react-icons/fa";
const CartWidget = () => {
  const itemCount = 5; 
  return (
    <div className="CartWidget">
      <FaShoppingCart /> 
      <span className="item-count">{itemCount}</span> 
    </div>
  );
};

export default CartWidget;