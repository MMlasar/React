import React, { useState, useContext } from "react";

const cartcontext = React.createContext([]);

export const useCartContext = () => useContext(cartcontext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item, quantity) => {
    let newCart;
    let product = cart.find(product => product.id === item.id);
    if (product) {
      product.Quantity += quantity;
      newCart = [...cart];
    } else {
      product = { ...item, Quantity: quantity };
      newCart = [...cart, product];
    }
    setCart(newCart);
  };

  const clearCart = () => setCart([]);

  const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

  return (
    <cartcontext.Provider value={{
      clearCart,
      isInCart,
      removeProduct,
      addProduct,
      cart
    }}>
      {children}
    </cartcontext.Provider>
  );
}

export default CartProvider;
