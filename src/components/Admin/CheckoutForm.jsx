import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAuth from '../../hooks/useAuth';
import useAdmin from '../../hooks/useAdmin';

const CheckoutForm = () => {
  const [error, setError] = useState(``);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  console.log(user);
  const [ adminData , isAdminLoading] = useAdmin();
  console.log(isAdminLoading);
  if(isAdminLoading) {
    return <span>Loading....</span>
  }
  // console.log(adminData.user.package);
  const unpaidPackages = adminData.user.package.filter((pack) => pack.value.status === 'unpaid');
  const totalPrice = unpaidPackages.reduce((total, item) => total + item.value.price, 0)
  // console.log(unpaidPackages);
  console.log(totalPrice);
  // console.log(elements);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="text-center">
      <CardElement
        options={{
          iconStyle: 'solid',
          style: {
            base: {
              fontSize: "20px",
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
      <p className="text-red-400 text-sm font-light">{error}</p>
      <button
        className="border-2 my-2 px-2 py-1 text-sm rounded-xl text-center bg-blue-500 text-white"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default CheckoutForm;
