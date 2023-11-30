import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../hooks/useSecureAxios";
import useAdmin from "../../hooks/useAdmin";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet-async';

const CustomRequestList = () => {
  const axiosSecure = useSecureAxios();
  const [adminData, isAdminLoading] = useAdmin();
  const company = adminData?.user?.company;
  // console.log(company);
  const { data: allCustomRequests = [], isPending: isRequestLoading, 
    refetch 
  } = useQuery({
    queryKey: ["allCustomRequests", company],
    enabled: !isAdminLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin/allCustomRequest/${company}`);
      return res.data;
    },
  });

  if (isRequestLoading || isAdminLoading) {
    return <span>Loading...</span>;
  }

  // console.log(allCustomRequests);

  const handleApproveRequest = (request) => {
    // console.log(request);
    const d = new Date();
    const date = d.toISOString();
    const newAsset = {
      name: request.name,
      type: request.type,
      quantity: 1,
      company: request.company,
      added: date,
      admin: adminData.user.email,
      availibility: true
    }
    // console.log(newAsset);
    axiosSecure.put(`/admin/approveCustomRequest/${request.name}`, newAsset).then(() => {
      // console.log(res);
      refetch();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Successfully Processed the Request!",
      });
    });
  };

  const handleRejectRequest = (request) => {
    // console.log(request.name);
    axiosSecure.put(`/admin/rejectCustomRequest/${request.name}`)
    .then(() => {
      // console.log(res);
      refetch();
      Swal.fire({
        icon: "error",
        title: "Rejected",
        text: "Successfully Rejected the Request!",
      });
    });
  };

  
  return (
    <div className="mt-4 flex flex-col gap-5 items-center mb-4">
      <Helmet>
        <title>AssetIT | All Custom Requests</title>
      </Helmet>
      <h1 className="font-bold text-center text-xl">Custom Request List</h1>
     
      <div className="grid grid-cols-1 gap-2 mt-5">
        {allCustomRequests.map((empl) => (
          <div
            key={empl._id}
            className="border-2 p-2 rounded-lg text-center space-y-2 bg-gray-200"
          >
            <figure>
              <img src={empl.image} alt="" className="w-64"/> 
            </figure>
            <h1>
              {" "}
              <span className="font-semibold">Asset Name:</span> {empl.name}
            </h1>
            <h1>
              {" "}
              <span className="font-semibold">Asset Type:</span> {empl.type}
            </h1>
            
            <h1>
              {" "}
              <span className="font-semibold">Price:</span> ${empl.price}
            </h1>
            <h1>
              {" "}
              <span className="font-semibold">Why You Need This:</span>{" "}
              {empl.needed}
            </h1>
            <h1>
              {" "}
              <span className="font-semibold">Additional Information:</span>{" "}
              {empl.addInfo}
            </h1>
            <h1>
              {" "}
              <span className="font-semibold">Status:</span> {empl.status}
            </h1>
            <div className="flex  gap-4 justify-center">
              <button
                onClick={() => handleApproveRequest(empl)}
                type="button"
                className="block w-32 hover:bg-black bg-blue-500 text-white p-2 rounded-xl"
                disabled={empl.status !== "pending"}
              >
                Approve
              </button>
              <button
                onClick={() => handleRejectRequest(empl)}
                disabled={empl.status !== "pending"}
                type="button"
                className="block w-32 bg-blue-300 hover:bg-black text-white p-2 rounded-xl"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomRequestList;
