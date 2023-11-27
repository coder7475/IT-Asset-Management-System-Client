import PropTypes from "prop-types"
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserNavbar = ({ currentUser }) => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  console.log(currentUser);
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
          <NavLink to="/dashboard">My Team</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">My Assets</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Request For an Asset</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/customRequest">My Custom Request</NavLink>
        </li>

        <li>
          <NavLink to="/dashboard">Profile</NavLink>
        </li>

        <li className="italic underline">
          {currentUser?.name}
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
