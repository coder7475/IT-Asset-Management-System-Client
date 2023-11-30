import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import useSecureAxios from './../../hooks/useSecureAxios';
import useAdmin from '../../hooks/useAdmin';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const UpdateAnAsset = () => {
  const assetId = useParams();
  const [ adminData ] = useAdmin();
  const axiosSecure = useSecureAxios();
  // console.log(assetId.id);
  
  const id = assetId.id;
  console.log(id);
  const { data: oneAsset = [], isPending: isAssetLoading } = useQuery({
    queryKey: ["oneAssets", assetId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin/allAssets/${id}`);
      return res.data;
    },
  });

  if (isAssetLoading) {
    return <span>Loading....</span>
  }

  console.log(oneAsset);
  const handleUpdateAsset = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const type = form.get("type");
    const quantity = form.get("quantity");
    const d = new Date();
    const date = d.toISOString();
    const company = adminData.user.company;
    const adminEmail = adminData.user.email;
    const asset = {
      name,
      type,
      quantity: parseInt(quantity),
      company,
      updated: date,
      admin: adminEmail,
      availability: quantity > 0
    }

    console.log(asset);

    axiosSecure.patch(`/admin/updateAnAsset/${id}`, asset)
      .then(() => {
        // console.log(res.data);
         Swal.fire({
          icon: "success",
          title: "Success",
          text: "Successfully Updated!",
        });
      })
  }

  return (
    <div className=" flex flex-col items-center">
      <Helmet>
        <title>AssetIT | Asset Update</title>
      </Helmet>
      <form className="mt-10"  onSubmit={handleUpdateAsset}>
      <h1 className="font-bold text-3xl mb-4 justify-center">Update Asset</h1>
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