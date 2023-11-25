import { useContext } from 'react';
import { AuthContext } from '../features/Authentication/providers/AuthProvider';

const useAuth = () => {
  const authInfos = useContext(AuthContext);
  return authInfos;
};

export default useAuth;