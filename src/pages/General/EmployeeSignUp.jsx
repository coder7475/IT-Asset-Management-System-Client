import Divider from "@mui/material/Divider";
import GeneralNavbar from "../../components/General/GeneralNavbar";
import { useFormik } from "formik";
import SocialLogin from "../../components/General/SocialLogin";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import usePublicAxios from "../../hooks/usePublicAxios";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const EmployeeSignUp = () => {
  const { createUser } = useAuth();
  const publicAxios = usePublicAxios();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      employeeName: "",
      email: "",
      photoURL: "",
      password: "",
      date: "",
    },

    onSubmit: (values) => {
      // console.log(values);
      const re = /(?=.*[A-Z])(?=.*[\W_]).{6,}/g;
      const valid = re.test(values.password);
      // console.log(valid);
      if (!valid) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid Password!",
          footer: "Minimum six characters, at least one lowercase, one uppercase letter, one special character and one number"
        });
      } else {
        createUser(values.email, values.password).then(() => {
          // console.log(result);
          // ?DONE: Create the user obj and send it to databse to store in users collection if the user does not exits
          const userInfo = {
            name: values.employeeName,
            email: values.email,
            photoURL: values.photoURL,
            birthday: values.date,
          };
          // console.log(userInfo);
          publicAxios.post("/users", userInfo).then(() => {
            // console.log(res.data);
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Successful Sign In!",
            });
            // logOut();
            navigate("/dashboard/userHome");
          });

          
        });
      }
    },
  });
  return (
    <main>
      <Helmet>
        <title>AssetIT | Employee SignUP</title>
      </Helmet>
      <GeneralNavbar />
      <div className=" mt-10 px-2 flex flex-col md:w-1/2 mx-auto gap-2 min-h-screen">
        <h1 className=" text-xl md:text-3xl font-medium md:font-bold">
          Sign Up As a employee
        </h1>
        <p className="font-light text-lg ">Enter Your Deatils </p>

        <form className="flex flex-col" onSubmit={formik.handleSubmit}>
          <label htmlFor="employeeName" className="font-sans font-medium mt-1">
            Full Name
          </label>
          <input
            onChange={formik.handleChange}
            value={formik.values.employeeName}
            type="text"
            name="employeeName"
            id="employeeName"
            className="border-2 rounded-lg border-blue-500"
            placeholder=" Enter Your Full Name"
          />

          <label htmlFor="photoURL"  className="font-sans font-medium mt-1">Profile Image</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.photoURL}
            type="text"
            name="photoURL"
            id="photoURL"
            className="border-2 rounded-lg border-blue-500"
            placeholder=" Enter Your Photo URL"
          />

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
          <label htmlFor="date" className="font-sans font-medium mt-2">
            Date Of Birth
          </label>
          <input
            onChange={formik.handleChange}
            value={formik.values.date}
            type="date"
            name="date"
            id="date"
            className="border-2 rounded-lg border-blue-500"
          />

          <button
            type="submit"
            className=" bg-blue-500 text-white font-semibold mt-4 py-2 rounded-xl"
          >
            Submit
          </button>
        </form>
        <Divider>Or</Divider>
        <SocialLogin />
      </div>
    </main>
  );
};

export default EmployeeSignUp;
