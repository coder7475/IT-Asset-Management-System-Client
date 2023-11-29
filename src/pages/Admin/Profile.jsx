import useAdmin from '../../hooks/useAdmin';

const Profile = () => {
  const [adminData] = useAdmin();
  console.log(adminData.user);

  const handleProfileUpdate = () => {
    console.log("clicked update");
  }

  return (
    <div className="flex flex-col justify-start text-xl items-center  min-h-screen">
      <h1 className="text-3xl font-bold mt-4">Profile Page</h1>  
      <form className="mt-5 flex flex-col gap-3 justify-center items-start p-4  w-96 rounded-lg border-2">
        <span className="font-semibold">Full Name:</span>
        <input type="text" defaultValue={adminData.user.name}/>
        <span className="font-semibold">Email:</span>
        <input type="text" defaultValue={adminData.user.email} readOnly/>
        <span className="font-semibold">Date Of Birth:</span>
        <input type="date" defaultValue={adminData.user.birthday} />
        <button onClick={handleProfileUpdate} type="button" className="bg-blue-500 mx-auto p-2 rounded-lg text-white" >Update</button>
      </form> 
    </div>
  );
};

export default Profile;