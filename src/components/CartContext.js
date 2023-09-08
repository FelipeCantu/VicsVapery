import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const addToCart = (product, quantity) => {
    // Your logic to add products to the cart
    const updatedCart = [...cart, { product, quantity }];
    setCart(updatedCart);

    // Update local storage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId) => {
    // Your logic to remove products from the cart
    const updatedCart = cart.filter((item) => item.product._id !== productId);
    setCart(updatedCart);

    // Update local storage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
