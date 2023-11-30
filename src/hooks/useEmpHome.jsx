// import useAuth from "./useAuth";
import useSecureAxios from "./useSecureAxios";
import { useQuery } from '@tanstack/react-query';
import useAdmin from "./useAdmin";

const useEmpHome = () => {
  const axiosSecure = useSecureAxios();
  const [adminData ] = useAdmin();
  const company = adminData?.user?.email;

  const { data: employeeHomeData = [], isPending: isEmployeeHomeLoading } = useQuery({
    queryKey: ["adminHomeStatus"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/homeStats/${company}`);
      return res.data;
    },
  });

  return [employeeHomeData, isEmployeeHomeLoading];
};

export default useEmpHome;