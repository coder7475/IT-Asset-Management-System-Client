import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from '../../components/Admin/CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(`${import.meta.VITE_Publishable_Key}`);

const Payment = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-5xl">Payment</h1>
      <div className="max-w-5xl p-10">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
