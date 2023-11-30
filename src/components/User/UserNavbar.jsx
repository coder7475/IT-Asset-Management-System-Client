import PropTypes from "prop-types"
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from './../../hooks/useAdmin';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserNavbar = ({ currentUser }) => {
  const { logOut, user } = useAuth();
  const navigate = useNavigate();
  const [ adminData ] = useAdmin();
  console.log(adminData);
  // console.log(currentUser);
  const handleLogOut = () => {
    // console.log("clicked Logout");
    logOut().then(() => {
      // console.log(res);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Succeful Logout!",
      });
      navigate("/");
    });
  };
  return (
    <div className="flex flex-col gap-4 font-bold justify-center items-center mt-4">
      <ul className="flex flex-col gap-4 font-bold">
        <li>
          <NavLink to="/dashboard">
            <img
              src={currentUser?.companyLogo}
              alt="company Logo"
              width="80px"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/userHome">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/myTeam">My Team</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/myAssets">My Assets</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/requestForAnAsset">Request For an Asset</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/customRequest">My Custom Request</NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/profile">Profile</NavLink>
        </li>
        <li>
        <div className="flex items-center gap-2">
          <img src={adminData?.user?.photoURL || user?.photoURL} alt="Avatar"  className="w-12 h-12 rounded-full"/>
          {currentUser?.name}
        </div>
        </li>       
        <li>
          <button onClick={handleLogOut}>Log Out</button>
        </li>
      </ul>
    </div>
  );
};

UserNavbar.propTypes = {
  currentUser: PropTypes.shape({
    companyLogo: PropTypes.any,
    name: PropTypes.any
  })
}

export default UserNavbar;
