import Swal from 'sweetalert2';
import useAdmin from '../../hooks/useAdmin';
import useUsers from '../../hooks/useUsers';
import useSecureAxios from '../../hooks/useSecureAxios';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const MyEmployeeList = () => {
  const [ adminData ] = useAdmin();
  // console.log(adminData);
  const [ allUsers ] = useUsers();
  // console.log(allUsers);
  const members = allUsers.filter(user => user?.company === adminData?.user?.company && user?.role === "employee")
  // console.log(members);
  const axiosSecure = useSecureAxios()
  const navigate = useNavigate();

  const handleRemoveMember = (employee) => {
    const id = employee._id;
    const updated = {
      role: "",
      company: "",
      companyLogo: ""
    }
    // console.log(updated);
    axiosSecure.put(`/admin/removeFromTeam/${id}`, updated)
      .then(() => {
        // console.log(res);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Successful added to the team!",
        });   
        navigate("/dashboard/addAnEmployee")
      })
  }

  return (
    <div className="mt-4 flex flex-col gap-5 items-center">
      <Helmet>
        <title>AssetIT | MY Employees</title>
      </Helmet>
      <h1 className="font-bold text-center text-xl">My Employee List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
        {members.map((empl) => (
          <div 
          onClick={() => handleRemoveMember(empl)}
          key={empl._id} 
          className="border-2 p-2 rounded-lg text-center space-y-2 bg-gray-200"  >
            <img src={empl?.photoURL} alt="Employee Image" className="w-full h-24"/>
            <h1> <span className="font-semibold">Name:</span>  {empl.name}</h1>
            <button type="button" className="block bg-blue-500 text-white p-2 rounded-xl" >
              Remove from Team
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEmployeeList;
