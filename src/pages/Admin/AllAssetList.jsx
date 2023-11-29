import useAssets from "../../hooks/useAssets";
import useSecureAxios from '../../hooks/useSecureAxios';
import Swal from "sweetalert2";
import { NavLink } from 'react-router-dom';

const AllAssetList = () => {
  const [allAssets, isAssetsLoading, refetch] = useAssets();
  const axiosSecure = useSecureAxios();
  console.log(allAssets);

  const handleAssetDelete = (asset) => {
    // console.log(asset);
    axiosSecure.delete(`/admin/deleteAsset/${asset._id}`)
      .then(() => {
        refetch();
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Successfully Deleted!",
        });
        // console.log(res);
      })
  }

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
              <NavLink to={`/dashboard/assetList/${empl._id}`}>

              <button
                type="button"
                className="block w-32 hover:bg-black bg-blue-500 text-white p-2 rounded-xl"
                >
                Update
              </button>
                </NavLink>
              <button
                onClick={() => handleAssetDelete(empl)}
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
