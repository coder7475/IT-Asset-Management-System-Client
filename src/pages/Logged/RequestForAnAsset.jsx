// import useAssets from "../../hooks/useAssets";
import { useState } from "react";
import useSecureAxios from "../../hooks/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import useAdmin from "../../hooks/useAdmin";
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const RequestForAnAsset = () => {
  // const [allAssets] = useAssets();
  // console.log(allAssets);
  const [name, setName] = useState("");
  const { user } = useAuth();
  const axiosSecure = useSecureAxios();
  const [adminData, isAdminLoading] = useAdmin();
  const company = adminData?.user?.company;
  const handleSearch = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    // console.log(name);
    setName(name);
  };

  const { data: allAssets = [], isPending: isAssetsLoading } = useQuery({
    queryKey: ["allAssets", company, name],
    enabled: !isAdminLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/allAssets/${company}?name=${name}`);
      return res.data;
    },
  });

  if ( isAssetsLoading ) {
    return <span>Loading...</span>
  }

  const handleRequesAsset = async(asset) => {
    // console.log(asset);
    const { value: additionalNotes } = await Swal.fire({
      title: "Anything to Add?",
      input: "text",
      inputLabel: "Additional Notes",
    });

    // console.log(additionalNotes);
    const d = new Date();
    const date = d.toISOString();
    const request = {
      name: asset.name,
      type: asset.type,
      requesterEmail: user.email,
      requesterName: user.displayName,
       company,
      requestDate: date,
      additionalNotes,
      status: "pending"
    }
    // console.log(request);
    axiosSecure.post("/user/makeAssetRequest", request)
      .then(() => {
        // console.log(res);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Successful Request!",
        });   
      })
  }

  return (
    <div className="mt-4 ml-2">
      <Helmet>
        <title>AssetIT | Request Asset</title>
      </Helmet>

      <h2 className="font-bold text-center text-xl">Request For an Asset</h2>
      <h2 className="font-medium text-lg text-center">All Assets</h2>

      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          name="name"
          className="rounded-l-xl px-2 border-2"
          placeholder="Enter Asset Name"
        />
        <button className="block bg-blue-500 text-white px-2 rounded-r-xl">
          Search
        </button>
      </form>
      


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
        {allAssets.map((asset) => (
          <div
            // onClick={() => handleRemoveMember(asset)}
            key={asset._id}
            className="border-2 p-2 rounded-lg flex flex-col space-y-2 bg-gray-200"
          >
            <h2>
              {" "}
              <span className="font-semibold">Name:</span> {asset.name}
            </h2>
            <h2>
              {" "}
              <span className="font-semibold">Asset Type:</span> {asset.type}
            </h2>
            <h2>
              {" "}
              <span className="font-semibold">Availibility:</span>{" "}
              {asset.availability ? "Available" : "Out of stock"}
            </h2>
            <button
              type="button"
              onClick={() => handleRequesAsset(asset)}
              disabled={!asset?.availability}
              className="block bg-blue-500 text-white p-2 rounded-xl border-2 disabled:bg-gray-500"
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
