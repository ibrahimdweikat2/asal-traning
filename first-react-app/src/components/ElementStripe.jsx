import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckOut from './CheckOut';
const stripePromise = loadStripe('pk_test_51MOLREFLtO945TkbLgLZbEfoqlYMBXePGcXt1N8rx6GpG8kSLapNR5Gmw6c3igZqC2E9ydPZSt7iX83DfuL9OTgH00Y9ytBRHs');
const ElementStripe = () => {
    const options = {
        clientSecret: '{{sk_test_51MOLREFLtO945Tkbz5QZV8zfRVwTJKF2takzeBQ3QKhnUaHx23kONA8a0GubdJABHQdB4MuhePGQgABZerxbRvzp00IS5V2Mt7}}',
      };
  return (
    <Elements stripe={stripePromise} options={options}>
        <CheckOut />
    </Elements>
  )
}

export default ElementStripe