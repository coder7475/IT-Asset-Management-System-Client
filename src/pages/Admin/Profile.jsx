import useAdmin from "../../hooks/useAdmin";
import useSecureAxios from "../../hooks/useSecureAxios";
import Swal from 'sweetalert2';

const Profile = () => {
  const [adminData] = useAdmin();
  const axiosSecure = useSecureAxios();
  console.log(adminData.user);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const date = form.get("date");
    const updatedDoc = {
      name,
      email,
      birthday: date,
    };
    console.log(updatedDoc);

    axiosSecure
      .patch(`/updateProfile/${email}`, updatedDoc)
      .then(() => {
        // console.log(res);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Successfully Updated!",
        });
      });
  };

  return (
    <div className="flex flex-col justify-start text-xl items-center  min-h-screen">
      <h1 className="text-3xl font-bold mt-4">Profile Page</h1>
      <form
        className="mt-5 flex flex-col gap-3 justify-center items-start p-4  w-96 rounded-lg border-2"
        onSubmit={handleProfileUpdate}
      >
        <span className="font-semibold">Full Name:</span>
        <input type="text" name="name" defaultValue={adminData.user.name} />
        <span className="font-semibold">Email:</span>
        <input
          type="text"
          name="email"
          defaultValue={adminData.user.email}
          readOnly
        />
        <span className="font-semibold">Date Of Birth:</span>
        <input type="date" name="date" defaultValue={adminData.user.birthday} />
        <button
          type="submit"
          className="bg-blue-500 mx-auto p-2 rounded-lg text-white"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Profile;
