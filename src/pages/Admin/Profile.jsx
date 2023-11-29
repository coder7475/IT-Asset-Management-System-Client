import useAdmin from '../../hooks/useAdmin';

const Profile = () => {
  const [adminData] = useAdmin();

  console.log(adminData.user);
  return (
    <div className="flex flex-col justify-start text-xl items-center bg-slate-400 min-h-screen">
      <h1 className="text-3xl font-bold mt-4">Profile Page</h1>  
      <div className="mt-5 flex flex-col gap-3 justify-between items-start p-4  w-96 rounded-lg text-white">
        <h1> <span className="font-semibold">Full Name:</span> {adminData.user.name}</h1>
        <h1> <span className="font-semibold">Email:</span> {adminData.user.email}</h1>
        <h1> <span className="font-semibold">Date Of Birth:</span> {adminData.user.birthday}</h1>
        <button type="button" className="bg-blue-500 p-2 rounded-lg">Update</button>
      </div> 
    </div>
  );
};

export default Profile;