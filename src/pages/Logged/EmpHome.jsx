import { Helmet } from "react-helmet-async";
import useAdmin from '../../hooks/useAdmin';

const EmpHome = () => {
  const [ adminData ] = useAdmin();
  console.log(adminData);

  return (
    <div>
      <Helmet>
        <title>AssetIT | Home For Employees</title>
      </Helmet>
      <h1 className="font-bold text-center mt-4 text-3xl">Employee Home</h1>
      <p className="text-xl italic text-center font-light mt-2">{ adminData?.user?.company ? `Hello ${adminData?.user?.name}`: "Contact Your admin to add to the team" }</p>
    </div>
  );
};

export default EmpHome;
