import useAdmin from '../../hooks/useAdmin';
import UserNavbar from '../../components/User/UserNavbar';
import AdminNavbar from '../../components/Admin/AdminNavbar';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
  const [adminData] = useAdmin();
 
  return <div className="flex">
    <Helmet>
        <title>AssetIT | Dashboard</title>
    </Helmet>
    <div className="w-64 min-h-screen bg-slate-600 text-white">
      {
        adminData?.admin? <AdminNavbar currentUser={adminData.user}/>
        : 
        <UserNavbar currentUser={adminData.user}/>
      }
    </div>
    <div className="w-full">
      <Outlet/>
    </div>
  </div>
};

export default Dashboard;
