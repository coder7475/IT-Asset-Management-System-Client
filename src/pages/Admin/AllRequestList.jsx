import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../hooks/useSecureAxios";
import useAdmin from "../../hooks/useAdmin";

const AllRequestList = () => {
  const axiosSecure = useSecureAxios();
  const [adminData, isAdminLoading] = useAdmin();
  const company = adminData?.user?.company;
  // console.log(company);
  const { data: allRequests = [], isPending: isRequestLoading } = useQuery({
    queryKey: ["allRequests", company],
    enabled: !isAdminLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin/allRequest/${company}`);
      return res.data;
    },
  });

  if (isRequestLoading || isAdminLoading) {
    return <span>Loading...</span>;
  }

  console.log(allRequests);

  const handleApproveRequest = (request) => {
    // console.log(request);
    axiosSecure.put(`/admin/approveRequest/${request.name}`)
      .then(res => {
        console.log(res);
      })
  }

  return (
    <div className="mt-4 flex flex-col gap-5 items-center">
      <h1 className="font-bold text-center text-xl">All Request List</h1>
      <div className="grid grid-cols-1 gap-2 mt-5">
        {allRequests.map((empl) => (
          <div          
            key={empl._id}
            className="border-2 p-2 rounded-lg text-center space-y-2 bg-gray-200"
          >
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
              <span className="font-semibold">Email Of Requester:</span>{" "}
              {empl.requesterEmail}
            </h1>
            <h1>
              {" "}
              <span className="font-semibold">Name Of Requester:</span>{" "}
              {empl.requesterName}
            </h1>
            <h1>
              {" "}
              <span className="font-semibold">Request Date:</span>{" "}
              {empl.requestDate.split("T")[0]}
            </h1>
            <h1>
              {" "}
              <span className="font-semibold">Additional Note:</span>{" "}
              {empl.additionalNotes}
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
                disabled={ empl.status !== "pending"}
              >
                Approve
              </button>
              <button
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

export default AllRequestList;
