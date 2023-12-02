import { Helmet } from "react-helmet-async";
import useAdmin from "../../hooks/useAdmin";
import useEmpHome from "../../hooks/useEmpHome";
import { useState } from "react";
import CustomModal from "../../components/General/CustomModal";

const EmpHome = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [isEditable, setIsEditable] = useState(false);
  const [adminData, isadminHomeLoading] = useAdmin();
  const [employeeHomeData, isEmployeeHomeLoading] = useEmpHome();

  function hadleUpdateButton() {
    setIsEditable(true);
  }

  function handleCancelButton() {
    setIsEditable(false);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // console.log(adminData);
  // console.log(employeeHomeData?.customRequests[0]);

  if (isadminHomeLoading || isEmployeeHomeLoading) {
    return <span>Loading....</span>;
  }

  return (
    <div>
      <Helmet>
        <title>AssetIT | Home For Employees</title>
      </Helmet>
      <h1 className="font-bold text-center mt-4 text-3xl">Employee Home</h1>
      <p className="text-xl italic text-center font-light mt-2">
        {adminData?.user?.company
          ? `Hello ${adminData?.user?.name}`
          : "Contact Your admin to add to the team"}
      </p>
      <h1 className="text-xl font-semibold text-center mt-5">
        Custom Requests List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-2 mx-2">
        {employeeHomeData?.customRequests.length > 0 &&
          employeeHomeData?.customRequests.map((cusRequest) => (
            <div
              key={cusRequest._id}
              className="border-2 p-2 rounded-lg w text-center space-y-2 bg-gray-200"
            >
              <h1>
                {" "}
                <span className="font-semibold">Asset Name:</span>{" "}
                {cusRequest.name}
              </h1>
              <h1>
                {" "}
                <span className="font-semibold">Price:</span>
                {"$ "}
                {cusRequest.price}
              </h1>
              <h1>
                {" "}
                <span className="font-semibold">Type:</span> {cusRequest.type}
              </h1>
              <h1>
                {" "}
                <span className="font-semibold">Status:</span>{" "}
                {cusRequest.status}
              </h1>
              <button
                onClick={openModal}
                type="button"
                className="bg-blue-500 rounded-xl p-2 text-white"
              >
                {" "}
                View Details
              </button>
              {isOpen ? (
                <CustomModal isEditable={isEditable} handleCancelButton={handleCancelButton} hadleUpdateButton={hadleUpdateButton} closeModal={closeModal} isOpen={isOpen} cusReq={employeeHomeData?.customRequests[0]}/>
              ) : (
                ""
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default EmpHome;
