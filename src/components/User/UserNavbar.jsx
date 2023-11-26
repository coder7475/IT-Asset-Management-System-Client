import { NavLink } from "react-router-dom";

const UserNavbar = () => {
  const handleLogOut = () => {
    console.log("clicked Logout");
  }
  return (
    <div className="text-center mt-4">
      <ul className="flex flex-col gap-4 font-bold">
        <li>
          <NavLink to="/dashboard">Home</NavLink>
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
          <NavLink to="/dashboard">My Custom Reques</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" onClick={handleLogOut}>
            
            Log Out
          
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserNavbar;
