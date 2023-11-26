import { useFormik } from "formik";
import GeneralNavbar from '../../components/General/GeneralNavbar';
import SocialLogin from '../../components/General/SocialLogin';
import Divider from '@mui/material/Divider';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { logIn } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log(values);
      logIn(values.email, values.password) 
      .then(res => {
        console.log(res);
      })
    },
  });
  
  return (
    <main>
      <GeneralNavbar/>
    <div className=" mt-10 px-2 flex flex-col md:w-1/2 mx-auto gap-2 min-h-screen">
      <h1 className="text-center text-xl md:text-3xl font-medium md:font-bold">
        Login
      </h1>
      <SocialLogin />
      <Divider>Or</Divider>
      <form className="flex flex-col" onSubmit={formik.handleSubmit}>
        <label htmlFor="email" className="font-sans font-medium mt-2">
          Email
        </label>
        <input
          onChange={formik.handleChange}
          value={formik.values.email}
          type="email"
          name="email"
          id="email"
          className="border-2 rounded-lg border-blue-500"
          placeholder=" Enter Your Email"
        />

        <label htmlFor="password" className="font-sans font-medium mt-2">
          Password
        </label>
        <input
          onChange={formik.handleChange}
          value={formik.values.password}
          type="password"
          name="password"
          id="password"
          className="border-2 rounded-lg border-blue-500"
          placeholder=" Password"
        />

        <button
          type="submit"
          className=" bg-blue-500 text-white font-semibold mt-4 py-2 rounded-xl"
        >
          Submit
        </button>
      </form>
    </div>

    </main>

  );
};

export default Login;
