import { Helmet } from "react-helmet-async";
import useAdminHome from "../../hooks/useAdminHome";
import { PieChart } from "react-minimal-pie-chart";

const defaultLabelStyle = {
  fontSize: '8px',
  fontFamily: 'sans-serif',
};

const AdminHome = () => {
  const [adminHomeData, isadminHomeLoading] = useAdminHome();
  console.log(adminHomeData);
  const {
    pendingRequests,
    topRequestedItems,
    limitedStockItems,
    returnableItems,
    nonReturnableItems,
  } = adminHomeData;
  const totalItems = returnableItems + nonReturnableItems;

  if (isadminHomeLoading) {
    return <span>Loading.....</span>;
  }

  return (
    <div className="flex justify-center items-center gap-2 flex-col">
      <Helmet>
        <title>AssetIT | Admin Home</title>
      </Helmet>
      <h1 className="text-center mt-2 font-bold text-xl">Admin Home</h1>
      <div className="flex flex-col gap-2 my-2">
        <h1 className="text-center font-semibold text-lg">
          All Pending Requests
        </h1>
        {pendingRequests?.map((request) => (
          <div
            key={request._id}
            className="border-2 p-2 rounded-lg text-center space-y-2 bg-gray-200"
          >
            <h1>
              {" "}
              <span className="font-semibold">Product Name:</span>{" "}
              {request.name}
            </h1>
            <h1>
              {" "}
              <span className="font-semibold">Product Type:</span>{" "}
              {request.type}
            </h1>
            <h1>
              {" "}
              <span className="font-semibold">Status:</span> {request.status}
            </h1>
            <h1>
              {" "}
              <span className="font-semibold">Requester Name:</span>{" "}
              {request.requesterName}
            </h1>
            <h1>
              {" "}
              <span className="font-semibold">Requester Email:</span>{" "}
              {request.requesterEmail}
            </h1>
            <h1>
              {" "}
              <span className="font-semibold">Requester Date:</span>{" "}
              {request.requestDate.split("T")[0]}
            </h1>
          </div>
        ))}
      </div>
      <h1 className="text-center font-semibold text-lg">Top Requested Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-2 mx-1">
        {topRequestedItems.map((product) => (
          <div
            key={product._id}
            className="border-2 p-2 rounded-lg text-center space-y-2 bg-gray-200"
          >
            <h1>
              {" "}
              <span className="font-semibold">Product Name:</span>{" "}
              {product.name}
            </h1>
            <h1>
              {" "}
              <span className="font-semibold">Product Type:</span>{" "}
              {product.type}
            </h1>
            <h1>
              {" "}
              <span className="font-semibold"> Requested:</span>{" "}
              {product.requested} times
            </h1>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 my-2">
        <h1 className="text-center font-semibold text-lg">
          Limited Stock Items
        </h1>
        {limitedStockItems.map((stock) => (
          <div
            key={stock._id}
            className="border-2 p-2 rounded-lg text-center space-y-2 bg-gray-200"
          >
            <h1>
              {" "}
              <span className="font-semibold">Product Name:</span> {stock.name}
            </h1>
            <h1>
              {" "}
              <span className="font-semibold">Product Type:</span> {stock.type}
            </h1>
            <h1>
              {" "}
              <span className="font-semibold">Quantity:</span> {stock.quantity}
            </h1>
            <h1>
              {" "}
              <span className="font-semibold">Availibility:</span>{" "}
              {stock.availability ? "In Stock" : "Out of Stock"}
            </h1>
          </div>
        ))}
      </div>
      <h1 className="my-2 font-bold text-xl ">Pie Chart of Asset Types</h1>
      <div className="mx-2 my-2">
        <PieChart
           labelStyle={{
            ...defaultLabelStyle,
          }}
          label={({ dataEntry }) => `${dataEntry.title}:${Math.round(dataEntry.percentage)} %`}
          totalValue={totalItems}
          data={[
            { title: "Returnable", value: returnableItems, color: "#E38627" },
            {
              title: "Non-Returnable",
              value: nonReturnableItems,
              color: "#C13C37",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default AdminHome;
