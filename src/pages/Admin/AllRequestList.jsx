import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../hooks/useSecureAxios";
import useAdmin from "../../hooks/useAdmin";
import Swal from "sweetalert2";
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const AllRequestList = () => {
  const axiosSecure = useSecureAxios();
  const [adminData, isAdminLoading] = useAdmin();
  const [search, setSearch] = useState('');
  const company = adminData?.user?.company;
  // console.log(company);
  const { data: allRequests = [], isPending: isRequestLoading, refetch } = useQuery({
    queryKey: ["allRequests", company, search],
    enabled: !isAdminLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin/allRequest/${company}?search=${search}`);
      return res.data;
    },
  });

  if (isRequestLoading || isAdminLoading) {
    return <span>Loading...</span>;
  }

  console.log(allRequests);

  const handleApproveRequest = (request) => {
    // console.log(request);
    axiosSecure.put(`/admin/approveRequest/${request.name}`).then(() => {
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
    axiosSecure.put(`/admin/rejectRequest/${request.name}`).then((res) => {
      console.log(res);
      refetch();
      Swal.fire({
        icon: "error",
        title: "Rejected",
        text: "Successfully Rejected the Request!",
      });
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // setTitle(e.target)
    const form = new FormData(e.currentTarget);
    const value = form.get("title");
    // console.log(value);
    console.log("clicked");
    setSearch(value);
  }

  return (
    <div className="mt-4 flex flex-col gap-5 items-center">
      <Helmet>
        <title>AssetIT | All Requests</title>
      </Helmet>
      <h1 className="font-bold text-center text-xl">All Request List</h1>
      <form onSubmit={handleSearch}>
          <input type="text" name="title" className="rounded-l-xl h-12 px-2 border-2" placeholder="Search"/>
          <button type="submit" className="rounded-r-xl h-12 px-2 bg-blue-500 text-white">Search</button>
        </form>
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

export default AllRequestList;
