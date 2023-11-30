// import useAuth from "./useAuth";
import useSecureAxios from "./useSecureAxios";
import { useQuery } from '@tanstack/react-query';
import useAdmin from "./useAdmin";

const useAdminHome = () => {
  const axiosSecure = useSecureAxios();
  const [adminData] = useAdmin();
  const company = adminData?.user?.company;
  
  const { data: adminHomeData = [], isPending: isadminHomeLoading } = useQuery({
    queryKey: ["adminHomeStatus"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin/homeStatus/${company}`);
      return res.data;
    },
  });

  return [adminHomeData, isadminHomeLoading];
};

export default useAdminHome;