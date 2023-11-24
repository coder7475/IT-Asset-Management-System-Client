import GeneralNavbar from "../../components/General/GeneralNavbar";
import { useFormik } from "formik";
import Select from "react-select";
import { useState } from 'react';

const options = [
  { value: { price: 5, members: 5 }, label: "Maximum 5 employees: $5" },
  { value: { price: 8, members: 10 }, label: "Maximum 10 employees: $8" },
  { value: { price: 15, members: 20 }, label: "Maximum 20 employees: $15" },
];

const AdminSignUp = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  console.log(selectedOption);  
  const formik = useFormik({
    initialValues: {
      adminName: "",
      companyName: "",
      email: "",
      companyLogo: "",
      password: "",
      date: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <main>
      <GeneralNavbar />
      <div className="mt-10 px-2 flex flex-col md:w-1/2 mx-auto gap-2 min-h-screen">
        <h1 className="text-xl md:text-3xl font-medium md:font-bold">
          Sign Up As a admin
        </h1>
        <p className="font-light text-lg ">Enter Your Deatils </p>
        <form className="flex flex-col" onSubmit={formik.handleSubmit}>
          <label htmlFor="adminName" className="font-sans font-medium mt-1">
            Full Name
          </label>
          <input
            onChange={formik.handleChange}
            value={formik.values.adminName}
            type="text"
            name="adminName"
            id="adminName"
            className="border-2 rounded-lg border-blue-500"
            placeholder=" Enter Your Full Name"
          />

          <label htmlFor="companyName" className="font-sans font-medium mt-2">
            Company Name
          </label>
          <input
            onChange={formik.handleChange}
            value={formik.values.companyName}
            type="text"
            name="companyName"
            id="companyName"
            className="border-2 rounded-lg border-blue-500"
            placeholder=" Enter Your Company Name"
          />

          <label htmlFor="companyLogo" className="font-sans font-medium mt-2">
            Company Logo
          </label>
          <input
            type="file"
            onChange={formik.handleChange}
            value={formik.values.companyLogo}
            name="companyLogo"
            id="companyLogo"
            className="border-2 rounded-lg border-blue-500"
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
          <label htmlFor="package" className="font-sans font-medium mt-2">
            Select a Package
          </label>
          <Select
            name="package"
            id="package"
            value={selectedOption}
            onChange={handleSelectChange}
            options={options}
            placeholder="Select an option"
            className="border-2 rounded-lg border-blue-500 mb-5"
          />
          <button
            type="submit"
            className=" bg-blue-500 text-white font-semibold py-2 rounded-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default AdminSignUp;
