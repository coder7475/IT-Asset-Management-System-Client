import axios from 'axios'
import Swal from "sweetalert2";
import auth from './../features/Authentication/firebase/firebase.config.js';
import {
  signOut
} from "firebase/auth";
import { redirect } from "react-router-dom";

const instance = axios.create({
  // baseURL: 'http://localhost:5000/api/v1',
  baseURL: 'https://server-itams.vercel.app/api/v1',
  withCredentials: true,
});

const useSecureAxios = () => {
  const logOut = () => {
    return signOut(auth)
      .then(() => {
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You token is invalid!",
      })});
  };

  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      // console.log('error tracked in the interceptor', error.response)
      if (error?.response?.status === 401 || error?.response?.status === 403)
      {      
        logOut();
        return redirect("/login");
      }
    }
  );

  return instance;
};

export default useSecureAxios;