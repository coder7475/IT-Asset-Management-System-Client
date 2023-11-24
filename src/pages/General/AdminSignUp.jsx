import GeneralNavbar from "../../components/General/GeneralNavbar";
// import { usehtmlFormik } from "htmlFormik";

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
      <div className="mt-10 flex flex-col w-1/3 mx-auto gap-2">
        <h1 className="text-3xl font-bold">Sign Up As a admin</h1>
        <p className="font-light text-lg ">Enter Your Deatils </p>
        <form className="flex flex-col">
          <label htmlFor="name" className="font-sans font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border-2 rounded-lg border-blue-500"
            placeholder=" Enter Your Full Name"
          />
        </form>
      </div>
    </main>
  );
};

export default AdminSignUp;
