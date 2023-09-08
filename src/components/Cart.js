import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Function to calculate the total price
    const calculateTotal = () => {
      return cart.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0);
    };

    // Load cart data from localStorage when the component is mounted
    const loadCartFromLocalStorage = () => {
      const cartData = JSON.parse(localStorage.getItem('cart'));
      if (cartData) {
        setTotal(calculateTotal());
      }
    };

    loadCartFromLocalStorage();
  }, [cart]);

  // Function to save cart data to localStorage
  const saveCartToLocalStorage = (cartData) => {
    localStorage.setItem('cart', JSON.stringify(cartData));
  };

  // Function to handle item removal and update cart data in localStorage
  const handleRemove = (productId) => {
    const updatedCart = cart.filter((item) => item.product._id !== productId);
    saveCartToLocalStorage(updatedCart);
    removeFromCart(productId);
  };

  return (
    <CartContainer>
      <h2>Your Shopping Cart</h2>
      <CartItems>
        {cart.length === 0 ? (
          <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>
        ) : (
          cart.map((item) => (
            <CartItem key={item.product._id}>
              <CartItemInfo>
                <CartItemName>{item.product.title}</CartItemName>
                <CartItemPrice>${item.product.price.toFixed(2)}</CartItemPrice>
                <CartItemQuantity>
                  <button onClick={() => handleRemove(item.product._id)}>
                    Remove
                  </button>
                  <span>Quantity: {item.quantity}</span>
                </CartItemQuantity>
              </CartItemInfo>
            </CartItem>
          ))
        )}
      </CartItems>
      {cart.length > 0 && (
        <CartTotal>
          <h3>Total: ${total.toFixed(2)}</h3>
          {/* Checkout button */}
        </CartTotal>
      )}
    </CartContainer>
  );
};


const CartContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;

`;

const CartItems = styled.div`
  margin-top: 10px;
`;

const EmptyCartMessage = styled.p`
  font-style: italic;
`;

const CartItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;

const CartItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartItemName = styled.h4`
  margin: 0;
`;

const CartItemPrice = styled.p`
  margin: 0;
`;

const CartItemQuantity = styled.div`
  display: flex;
  align-items: center;
  button {
    background-color: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 10px;
    margin-right: 10px;
    cursor: pointer;
  }
`;

const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const CheckoutButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

export default Cart;
