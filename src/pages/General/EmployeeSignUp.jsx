
import GeneralNavbar from '../../components/General/GeneralNavbar';
import { useFormik } from "formik";

const EmployeeSignUp = () => {
  const formik = useFormik({
    initialValues: {
      employeeName: "",
      email: "",
      password: "",
      date: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <main>
      <GeneralNavbar />
      <div className="mt-10 px-2 flex flex-col md:w-1/2 mx-auto gap-2 min-h-screen">
        <h1 className="text-xl md:text-3xl font-medium md:font-bold">
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
      </div>
    </main>
  );
};

export default EmployeeSignUp;