import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from 'react';


const CheckoutForm = () => {
  const [error, setError] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return
  }

  const card = elements.getElement(CardElement)

  if (card === null) {
      return
  }

  const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
  })

  if (error) {
      console.log('payment error', error);
      setError(error.message);
  }
  else {
      console.log('payment method', paymentMethod)
      setError('');
  }
  };
  return (
    <form onSubmit={handleSubmit} className="text-center">
      <CardElement
        options={{
          style: {
           
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="border-2 my-2 p-2 rounded-xl text-center bg-blue-500 text-white" type="submit">Submit</button>
    </form>
  );
};

export default CheckoutForm;
