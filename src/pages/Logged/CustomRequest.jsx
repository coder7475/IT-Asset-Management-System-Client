
import useAdmin from '../../hooks/useAdmin';
import useSecureAxios from '../../hooks/useSecureAxios';
import { Swal } from 'sweetalert2';

const CustomRequest = () => {
  const [ adminData ] = useAdmin();
  const axiosSecure = useSecureAxios();
  // console.log(adminData);
  const handleCustomRequest = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const price = form.get("price");
    const type = form.get("type");
    const image = form.get("image");
    const needed = form.get("needed");
    const addInfo = form.get("addInfo");
    const d = new Date();
    const date = d.toISOString();
    const user = adminData.user;
    const customReq = {
      name,
      price,
      type,
      image,
      needed,
      addInfo,
      date,
      user,
      status: "pending"
    }

    console.log(customReq);


    axiosSecure.post("/user/makeCustomRequest", customReq)
      .then(() => {
        // console.log(res.data);
         Swal.fire({
          icon: "success",
          title: "Success",
          text: "Successfully made Request",
        });
      })
  }

  return (
    <div className="my-4 ml-4 min-h-screen max-w-2xl mx-auto">
      <h1 className="font-bold text-xl">Custom Request Form</h1>
      <form className="mt-4" onSubmit={handleCustomRequest}>
        <label htmlFor="name" className="block mb-2 text-lg font-medium">
          Asset Name
        </label>
        <input
          required
          type="text"
          id="name"
          name="name"
          className="border-2 bg-gray-100 rounded-lg px-1"
        />
        <label htmlFor="image" className="block mb-2 text-lg font-medium">
          Asset Image
        </label>
        <input
          required
          type="text"
          id="image"
          name="image"
          className="border-2 bg-gray-100 rounded-lg px-1"
        />
        <label htmlFor="type" className="block mb-2 text-lg font-medium">
          Asset Type
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
        </select>
        <label htmlFor="price" className="block mb-2 text-lg font-medium">
          Price
        </label>
        <input
          required
          type="number"
          id="price"
          name="price"
          className="border-2 bg-gray-100 rounded-lg px-1"
        />
        <label htmlFor="needed" className="block mb-2 text-lg font-medium">
          Why you need this
        </label>

        <textarea
          name="needed"
          id="needed"
          className="border-2 bg-gray-100 rounded-lg px-1"
          cols="25"
          rows="3"
          required
        ></textarea>
        <label htmlFor="addInfo" className="block mb-2 text-lg font-medium">
          Additional Information
        </label>

        <textarea
          name="addInfo"
          id="addInfo"
          className="border-2 bg-gray-100 rounded-lg px-1"
          cols="25"
          rows="2"
          
        ></textarea>
        <button
          type="submit"
          className="block mt-2 bg-blue-500 p-2 rounded-lg text-white hover:bg-black"
        >
          Make Request
        </button>
      </form>
    </div>
  );
};

export default CustomRequest;
