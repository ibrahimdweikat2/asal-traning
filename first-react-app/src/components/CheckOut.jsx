import React from 'react'
import {PaymentElement} from '@stripe/react-stripe-js';
const CheckOut = () => {
  return (
    <form>
      <PaymentElement />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default CheckOut