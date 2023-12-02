// import useAuth from "./useAuth";
import useSecureAxios from "./useSecureAxios";
import { useQuery } from '@tanstack/react-query';
import useAdmin from "./useAdmin";

const useEmpHome = () => {
  const axiosSecure = useSecureAxios();
  const [adminData ] = useAdmin();
  const email = adminData?.user?.email;
  const company = adminData?.user?.company;

  const { data: employeeHomeData = [], isPending: isEmployeeHomeLoading } = useQuery({
    queryKey: ["employeeHomeStatus"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/homeStats/${email}?company=${company}`);
      return res.data;
    },
  });

  return [employeeHomeData, isEmployeeHomeLoading];
};

export default useEmpHome;