import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import useSecureAxios from "../../hooks/useSecureAxios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const [error, setError] = useState(``);
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const navigate = useNavigate();
  console.log(user);
  const [adminData, isAdminLoading] = useAdmin();
  const axiosSecure = useSecureAxios();
  // console.log(adminData?.user?.package);
  const unpaidPackages = adminData?.user?.package.filter(
    (pack) => pack.value.status === "unpaid"
  );

  const totalPrice = unpaidPackages?.reduce(
    (total, item) => total + item.value.price,
    0
  );
  // console.log(unpaidPackages);
  console.log(totalPrice);
  // console.log(elements);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  console.log(clientSecret);

  if (isAdminLoading) {
    return <span>Loading...</span>;
  }

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

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      // successful payment
      console.log("payment intent", paymentIntent);

      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // update the package status
        // make all packages status paid
        const updatedPackages = adminData?.user?.package?.map((pack) => pack);
        updatedPackages?.forEach((pack) => (pack.value.status = "paid"));
        console.log(updatedPackages);
        axiosSecure
          .patch(`/users/admin/${user.email}`, updatedPackages)
          .then((res) => {
            console.log(res);
          });

        // save payment history in databse
        const d = new Date();
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: d.toISOString(), // utc date convert. use moment js to
        };

        axiosSecure.post("/payments", payment).then((res) => {
          // TODO: SHow sweet alert and navigate to dashboard
          console.log(res);
          navigate("/dashboard/adminHome");
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Successful Payment!",
          });
        });
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="text-center">
      <CardElement
        options={{
          iconStyle: "solid",
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
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-green-400 text-sm font-light">{transactionId}</p>
    </form>
  );
};

export default CheckoutForm;
