import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
});

const useSecureAxios = () => {
  return instance;
};

export default useSecureAxios;