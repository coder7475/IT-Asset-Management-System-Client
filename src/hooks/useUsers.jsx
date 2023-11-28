
import useSecureAxios from './useSecureAxios';
import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
  const axiosSecure = useSecureAxios();

  const { data: allUsers = [], isPending: isUsersLoading } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  return [allUsers, isUsersLoading];
};

export default useUsers;