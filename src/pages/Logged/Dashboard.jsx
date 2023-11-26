import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);

  return <div className="flex">
    <div className="w-64 min-h-screen bg-slate-600 text-white">
      Navbar
    </div>
    <div>
      Content
    </div>
  </div>
};

export default Dashboard;
