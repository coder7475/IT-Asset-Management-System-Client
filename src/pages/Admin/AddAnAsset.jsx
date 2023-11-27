const AddAnAsset = () => {
  return (
    <div className="my-4 ml-4 min-h-screen max-w-2xl mx-auto">
      <h1 className="font-bold text-xl">Add a new Asset to the Company</h1>
      <form className="mt-4">
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
          <option value="Desktops">Desktops</option>
          <option value="Laptops">Laptops</option>
          <option value="Servers">Servers</option>
          <option value="Networking">Networking</option>
          <option value="Storage">Storage</option>
          <option value="OS">OS</option>
          <option value="Application">Application</option>
          <option value="Firewalls">Firewalls</option>
          <option value="Routers">Routers</option>
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
