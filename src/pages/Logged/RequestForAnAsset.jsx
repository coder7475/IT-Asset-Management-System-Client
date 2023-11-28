import useAssets from "../../hooks/useAssets";

const RequestForAnAsset = () => {
  const [allAssets] = useAssets();
  console.log(allAssets);

  return (
    <div className="mt-4">
      <h1 className="font-bold text-center text-xl">Request For an Asset</h1>
      <h1 className="font-medium text-lg text-center">All Assets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
        {allAssets.map((asset) => (
          <div
            // onClick={() => handleRemoveMember(asset)}
            key={asset._id}
            className="border-2 p-2 rounded-lg flex flex-col space-y-2 bg-gray-200"
          >
            <h1>
              {" "}
              <span className="font-semibold">Name:</span> {asset.name}
            </h1>
            <h1>
              {" "}
              <span className="font-semibold">Asset Type:</span> {asset.type}
            </h1>
            <h1>
              {" "}
              <span className="font-semibold">Availibility:</span>{" "}
              {asset.availability ? "Available" : "Out of stock"}
            </h1>
            <button
              type="button"
              className="block bg-blue-500 text-white p-2 rounded-xl border-2"
            >
              Request Asset
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestForAnAsset;
