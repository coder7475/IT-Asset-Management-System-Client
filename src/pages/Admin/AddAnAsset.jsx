import useAdmin from '../../hooks/useAdmin';
import useSecureAxios from '../../hooks/useSecureAxios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const AddAnAsset = () => {
  const [ adminData ] = useAdmin();
  // console.log(adminData);
  const axiosSecure = useSecureAxios();

  const handleAddAsset = (e) => {
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
      added: date,
      admin: adminEmail,
      requested: 0,
      availability: quantity > 0
    }

    // console.log(asset);

    axiosSecure.post("/admin/addAnAsset", asset)
      .then(() => {
        // console.log(res.data);
         Swal.fire({
          icon: "success",
          title: "Success",
          text: "Successful added a new asset!",
        });
      })
  }

  return (
    <div className=" flex flex-col items-center">
      <Helmet>
        <title>AssetIT | Add An Asset</title>
      </Helmet>
      <form className="mt-10" onSubmit={handleAddAsset} >
      <h2 className="font-bold text-xl justify-center">Add a new Asset to the Company</h2>
        <label htmlFor="name" className="block mb-2 text-lg font-medium">
          Product Name
        </label>
        <input
          required
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
          className="border-2 bg-gray-100 rounded-lg px-1 w-64 py-1"
          required
        >
          <option value="" disabled>
            Select Product Type
          </option>
          <option value="returnable">returnable</option>
          <option value="non-returnable">non-returnable</option>
          {/* <option value="Servers">Servers</option>
          <option value="Networking">Networking</option>
          <option value="Storage">Storage</option>
          <option value="OS">OS</option>
          <option value="Application">Application</option>
          <option value="Firewalls">Firewalls</option>
          <option value="Routers">Routers</option> */}
        </select>
        <label htmlFor="quantity" className="block mb-2 text-lg font-medium">
          Product Quantity
        </label>
        <input
          required
          type="number"
          id="quantity"
          name="quantity"
          className="border-2 bg-gray-100 rounded-lg px-1"
        />
        <button type="submit" className="block mt-2 bg-blue-500 p-2 rounded-lg text-white hover:bg-black">Add Asset</button>
      </form>
    </div>
  );
};

export default AddAnAsset;
