import { Helmet } from 'react-helmet-async';
import useAdminHome from '../../hooks/useAdminHome';

const AdminHome = () => {
  const [ adminDataHome ] = useAdminHome();
  console.log(adminDataHome);
  
  return (
    <div>
      <Helmet>
        <title>AssetIT | Admin Home</title>
      </Helmet>
      Admin Home      
    </div>
  );
};

export default AdminHome;