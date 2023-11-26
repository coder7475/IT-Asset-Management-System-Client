import Package from "../../components/General/Package";

const Payment = () => {
  return (
    <div>
      <Package
        values={{
          type: "pro",
          price: 5,
          limit: 5,
        }}
      />
    </div>
  );
};

export default Payment;
