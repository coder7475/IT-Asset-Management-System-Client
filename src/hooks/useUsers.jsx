
import useSecureAxios from './useSecureAxios';
import { useQuery } from '@tanstack/react-query';

const useEmployee = () => {
  const axiosSecure = useSecureAxios();

  const { data: allUsers = [], isPending: isUsersLoading, refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  return [allUsers, isUsersLoading, refetch];
};

export default useEmployee;