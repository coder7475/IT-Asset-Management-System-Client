import { Outlet } from "react-router-dom";

const GeneralLayout = () => {
  return (
    <main>
        <Outlet />
    </main>
  );
};

export default GeneralLayout;