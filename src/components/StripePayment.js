import React, { useState } from 'react';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import { useHistory } from 'react-router-dom';

const stripePromise = loadStripe('pk_live_51IZPS1G1eA0Mjg1e3nQb6GGRhCgHEzxi3RiGhYxaLFxSZSQcOnZNIdKp0BqKCA2qJd2t7rvFYV6wUL5fVzM9gzvj00hRr0Eys1');

const StripePayment = ({ onPaymentSuccess }) => {
  const history = useHistory()
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);

  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    // Create a payment method using the card element
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    setIsProcessing(false);

    if (error) {
      console.error(error);
      setPaymentError(error.message)
      return;
    }

    // Handle the payment method and call onPaymentSuccess if successful
    // Send the payment method to your server for confirmation and final processing
    onPaymentSuccess(paymentMethod);
  };

  const handlePaymentSuccess = (paymentMethod) => {
    history.push('/payment-success')
  }

  return (
    <Elements stripe={stripePromise}>
    <PaymentForm>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <CardElementContainer>
          <CardElement options={cardElementStyle} />
        </CardElementContainer>
        <PaymentButton type="submit" disabled={isProcessing} onClick={handlePaymentSuccess}>
            {isProcessing ? 'Processing...' : 'Pay'}
          </PaymentButton>
      </form>
      {paymentError && <div>{paymentError}</div>}
    </PaymentForm>
  </Elements>
  );
};

const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardElementContainer = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const PaymentButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const cardElementStyle = {
  base: {
    fontSize: '16px',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    '::placeholder': {
      color: '#ccc',
    },
  },
  invalid: {
    color: '#ff0000',
  },
  complete: {
    color: '#4caf50', // Color when the input is valid
  },
};

export default StripePayment;
