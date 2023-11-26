import useAdmin from '../../hooks/useAdmin';
import UserNavbar from '../../components/User/UserNavbar';

const Dashboard = () => {
  const [adminData] = useAdmin();
  console.log(adminData);

  return <div className="flex">
    <div className="w-64 min-h-screen bg-slate-600 text-white">
      {
        adminData? <ul><li>Admin</li></ul>
        : 
        <UserNavbar/>
      }
    </div>
    <div>
      Content
    </div>
  </div>
};

export default Dashboard;
