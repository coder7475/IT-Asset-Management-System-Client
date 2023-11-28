import useEmployee from "../../hooks/useUsers";
import useAuth from "../../hooks/useAuth";

const AddAnEmployee = () => {
  const [allUsers] = useEmployee();
  const { user } = useAuth();
  console.log(user);
  const employees = allUsers.filter((user) => user.role != "admin");
  console.log(employees);

  return (
    <div className="ml-4">
      <h1 className="text-center text-2xl font-bold mt-4">Add an Employee</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
        {employees.map((empl) => (
          <div key={empl._id} className="border-2 p-2 rounded-lg text-center space-y-2 bg-gray-200">
            <h1> <span className="font-semibold">Name:</span>  {empl.name}</h1>
            <button type="button" className="block bg-blue-500 text-white p-2 rounded-xl" >
              Add to Team
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddAnEmployee;
