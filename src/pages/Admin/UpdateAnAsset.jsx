import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import useSecureAxios from './../../hooks/useSecureAxios';

const UpdateAnAsset = () => {
  const assetId = useParams();
  const axiosSecure = useSecureAxios();
  // console.log(assetId.id);
  const id = assetId.id;
  console.log(id);
  const { data: oneAsset = [], isPending: isAssetLoading, refetch } = useQuery({
    queryKey: ["allAssets", assetId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin/allAssets/${id}`);
      return res.data;
    },
  });

  if (isAssetLoading) {
    return <span>Loading....</span>
  }

  console.log(oneAsset);

  return (
    <div className=" flex flex-col items-center">
      <form className="mt-10"  >
      <h1 className="font-bold text-xl justify-center">Update Asset</h1>
        <label htmlFor="name" className="block mb-2 text-lg font-medium">
          Product Name
        </label>
        <input
          required
          defaultValue={oneAsset.name}
          type="text"
          id="name"
          name="name"
          className="border-2 bg-gray-100 rounded-lg px-1"
        />
        <label htmlFor="type" className="block mb-2 text-lg font-medium">
          Product Type
        </label>
        <select
          id="type"
          name="type"
          defaultValue={oneAsset.type}
          className="border-2 bg-gray-100 rounded-lg px-1 w-64 py-1"
          required
        >
          <option value="" disabled>
            Select Product Type
          </option>
          <option value="returnable">returnable</option>
          <option value="non-returnable">non-returnable</option>
        </select>
        <label htmlFor="quantity" className="block mb-2 text-lg font-medium">
          Product Quantity
        </label>
        <input
          defaultValue={oneAsset.quantity}
          required
          type="number"
          id="quantity"
          name="quantity"
          className="border-2 bg-gray-100 rounded-lg px-1"
        />
        <button type="submit" className="block mt-2 bg-blue-500 p-2 rounded-lg text-white hover:bg-black">Update Asset</button>
      </form>
    </div>
  );
};

export default UpdateAnAsset;