import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://localhost:5000/api/v1',
  baseURL: 'https://server-itams.vercel.app/api/v1',
});

const usePublicAxios = () => {
  return instance;
};

export default usePublicAxios;