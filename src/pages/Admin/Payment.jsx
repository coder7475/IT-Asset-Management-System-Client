import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from '../../components/Admin/CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_Publishable_Key);
import { Helmet } from 'react-helmet-async';

const Payment = () => {
 
  return (
    <div>
      <Helmet>
        <title>AssetIT | Stripe Payment</title>
      </Helmet>
      <h2 className="text-center font-bold text-5xl">Payment</h2>
      <div className="my-10">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
