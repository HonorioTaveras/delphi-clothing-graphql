/* eslint-disable no-unused-vars */
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HhNqLCi2n9KIkI8OfJxGI6zQrgOeKHocSPn2d1XUEpTp1sCYtkHrKcqqq9CnAJ9ryqSwQQg4AbxoewD9EHsL8CC00OLLmJjur';

  const onToken = (token) => {
    axios('/payment', {
      amount: priceForStripe,
      token,
    })
      .then((response) => {
        alert('Payment successful');
      })
      .catch((error) => {
        alert(
          'There was an issue with your payment. Please be sure to use the provided credit card.',
        );
        console.log('Payment error: ', JSON.parse(error));
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Delphi Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
