import React, { useState } from 'react';
import styled from 'styled-components';
import { useCart } from './CartContext';
import StripePayment from './StripePayment';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from '../stripe';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);

  const handlePaymentSuccess = (paymentMethod) => {
    // Handle successful payment here, e.g., send paymentMethod to the server for confirmation
    // Reset the cart or perform other actions
    console.log('Payment successful:', paymentMethod);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
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
                  <button onClick={() => removeFromCart(item.product._id)}>
                    Remove
                  </button>
                  <span>Quantity: {item.quantity}</span>
                </CartItemQuantity>
              </CartItemInfo>
            </CartItem>
          ))
        )}
      </CartItems>
      {cart.length > 0 && !isCheckout && (
        <CartTotal>
          <h3>Total: ${calculateTotal().toFixed(2)}</h3>
          <CheckoutButton onClick={() => setIsCheckout(true)}>
            Checkout
          </CheckoutButton>
        </CartTotal>
      )}
      {isCheckout && (
        <Elements stripe={stripePromise}>
          <StripePayment onPaymentSuccess={handlePaymentSuccess} />
        </Elements>
      )}
    </CartContainer>
  );
};

// ... rest of the code

const CartContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
  font-size: 16px;
`;

export default Cart;
