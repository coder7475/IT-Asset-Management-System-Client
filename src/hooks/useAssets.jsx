import useSecureAxios from './useSecureAxios';
import { useQuery } from '@tanstack/react-query';
import useAdmin from './useAdmin';

const useAssets = () => {
  const axiosSecure = useSecureAxios();
  const [ adminData, isAdminLoading ] = useAdmin();
  const company = adminData?.user?.company;

  const { data: allAssets = [], isPending: isAssetsLoading } = useQuery({
    queryKey: ["allAssets", company],
    enabled: !isAdminLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/allAssets/${company}`);
      return res.data;
    },
  });

  return [allAssets, isAssetsLoading];
};

export default useAssets;