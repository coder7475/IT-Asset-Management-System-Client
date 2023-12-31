import useAuth from "./useAuth";
import useSecureAxios from "./useSecureAxios";
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useSecureAxios();

  const { data: adminData = [], isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      return res.data;
    },
  });

  return [adminData, isAdminLoading];
};

export default useAdmin;
