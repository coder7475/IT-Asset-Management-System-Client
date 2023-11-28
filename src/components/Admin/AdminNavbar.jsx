import PropTypes from "prop-types"
import { NavLink } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const AdminNavbar = ({ currentUser }) => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    // console.log("clicked Logout");
    logOut()
      .then(() => {
        // console.log(res);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Succeful Logout!",
        });
        navigate("/");
      })
  }
  return (
    <div className="flex items-center justify-center mt-4">
      {/* Hey Admin Navbar */}
      <ul className="flex flex-col gap-4 font-bold">
        <li>
          <NavLink to="/dashboard">
            <img src={currentUser?.companyLogo} alt="company Logo" width="80px" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Asset List</NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/addAnAsset">Add an Asset</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/allRequestList">All Request List</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Custom Request List</NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/myEmployeeList">My Employee List</NavLink>
        </li>


        <li>
          <NavLink to="/dashboard/addAnEmployee">Add an Employee</NavLink>
        </li>


        <li>
          <NavLink to="/dashboard">Profile</NavLink>
        </li>


        <li className="italic underline">
          {currentUser?.name}
        </li>
        <li>
          <button  onClick={handleLogOut}>
            
            Log Out
          
          </button>
        </li>
      </ul>
    </div>
  );
};

AdminNavbar.propTypes = {
  currentUser: PropTypes.shape({
    companyLogo: PropTypes.any,
    name: PropTypes.any
  })
}

export default AdminNavbar;
