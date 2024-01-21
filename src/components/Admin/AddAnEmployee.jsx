// import useAuth from "../../hooks/useAuth";
import useAdmin from '../../hooks/useAdmin';
import useSecureAxios from '../../hooks/useSecureAxios';
import Swal from 'sweetalert2';
import useUsers from '../../hooks/useUsers';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AddAnEmployee = () => {
  const [allUsers ] = useUsers();
  // const { user } = useAuth();
  // console.log(user);
  const employees = allUsers.filter((user) => user.company === undefined);
  // console.log(employees);
  const [ adminData ] = useAdmin();
  // console.log(adminData);
  const axiosSecure = useSecureAxios();
  const navigate = useNavigate();

  const handleAddMember = (employee) => {
    // console.log(employee);
    const id = employee._id;
    const updated = {
      role: "employee",
      company: adminData?.user?.company,
      companyLogo: adminData?.user?.companyLogo
    }
    // console.log(updated);
    axiosSecure.put(`/admin/addToTeam/${id}`, updated)
      .then(() => {
        // console.log(res.data);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Successful added to the team!",
        });   
        navigate("/dashboard/myEmployeeList")
      })

  }

  return (
    <div className="ml-4">
      <Helmet>
        <title>AssetIT | Add An Employee</title>
      </Helmet>
      <h2 className="text-center text-2xl font-bold mt-4">Add an Employee</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
        {employees.map((empl) => (
          <div 
          onClick={() => handleAddMember(empl)}
          key={empl._id} 
          className="border-2 p-2 rounded-lg text-center space-y-2 bg-gray-200"  >
            <img src={empl?.photoURL} alt="Employee Image"  className="w-full h-24"/>
            <h2> <span className="font-semibold">Name:</span>  {empl.name}</h2>
            <button type="button" className="block bg-blue-500 text-white p-2 rounded-xl mx-auto" >
              Add to Team
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddAnEmployee;
