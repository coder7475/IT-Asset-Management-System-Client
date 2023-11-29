import useAssets from "../../hooks/useAssets";

const AllAssetList = () => {
  const [allAssets, isAssetsLoading] = useAssets();
  console.log(allAssets);
  return (
    <div className="mt-4 flex flex-col gap-5 items-center max-w-xl mx-auto">
      <h1 className="font-bold text-center text-2xl">All Asset List</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-5">
        {allAssets.map((empl) => (
          <div
            key={empl._id}
            className="border-2 p-2 rounded-lg text-center space-y-2 bg-gray-200"
          >
            <h1>
              {" "}
              <span className="font-semibold">Product Name:</span> {empl.name}
            </h1>
            <h1>
              {" "}
              <span className="font-semibold">Product Type:</span> {empl.type}
            </h1>
            <h1>
              {" "}
              <span className="font-semibold">Product Type:</span> {empl.quantity}
            </h1>
            <h1>
              {" "}
              <span className="font-semibold">Date Added:</span> {empl.added.split("T")[0]}
            </h1>
            <div className="flex  gap-4 justify-center">
              <button
                type="button"
                className="block w-32 hover:bg-black bg-blue-500 text-white p-2 rounded-xl"
              >
                Update
              </button>
              <button
                type="button"
                className="block w-32 bg-blue-300 hover:bg-black text-white p-2 rounded-xl"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAssetList;
