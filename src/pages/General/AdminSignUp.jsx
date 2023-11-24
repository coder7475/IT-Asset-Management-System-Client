import GeneralNavbar from "../../components/General/GeneralNavbar";
// import { usehtmlFormik } from "htmlFormik";
import Select from 'react-select';
const options = [
  { value: {price: 5, members: 5}, label: 'Maximum 5 employees: $5' },
  { value: {price: 8, members: 10}, label: 'Maximum 10 employees: $8' },
  { value: {price: 15, members: 20}, label: 'Maximum 20 employees: $15' },
];

const AdminSignUp = () => {
  // const Formik = usehtmlFormik({
  //   initialValues: {
  //     fullName: "",
  //     lastName: "",
  //     email: "",
  //   },

  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });
  return (
    <main>
      <GeneralNavbar />
      <div className="mt-10 flex flex-col w-1/3 mx-auto gap-2 min-h-screen">
        <h1 className="text-3xl font-bold">Sign Up As a admin</h1>
        <p className="font-light text-lg ">Enter Your Deatils </p>
        <form className="flex flex-col">
          <label htmlFor="adminName" className="font-sans font-medium mt-1">
            Full Name
          </label>
          <input
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
            name="companyLogo"
            id="companyLogo"
            className="border-2 rounded-lg border-blue-500"
          />

          <label htmlFor="email" className="font-sans font-medium mt-2">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="border-2 rounded-lg border-blue-500"
            placeholder=" Enter Your Email"
          />

          <label htmlFor="password" className="font-sans font-medium mt-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border-2 rounded-lg border-blue-500"
            placeholder=" Password"
          />
          <label htmlFor="datetime" className="font-sans font-medium mt-2">
            Date Of Birth
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="border-2 rounded-lg border-blue-500"
            
          />
          <label htmlFor="datetime" className="font-sans font-medium mt-2">
            Select a Package
          </label>
          <Select options={options} className="border-2 rounded-lg border-blue-500 mb-16"/>
        </form>
      </div>
    </main>
  );
};

export default AdminSignUp;
