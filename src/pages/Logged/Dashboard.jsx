import useAdmin from '../../hooks/useAdmin';
import UserNavbar from '../../components/User/UserNavbar';
import AdminNavbar from '../../components/Admin/AdminNavbar';

const Dashboard = () => {
  const [adminData] = useAdmin();
  console.log(adminData);

  return <div className="flex">
    <div className="w-64 min-h-screen bg-slate-600 text-white">
      {
        adminData?.admin? <AdminNavbar currentUser={adminData.user}/>
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
