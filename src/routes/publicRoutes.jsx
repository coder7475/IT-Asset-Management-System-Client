import { createBrowserRouter as Router } from 'react-router-dom'
import GeneralLayout from '../layouts/GeneralLayout';
import ErrorPage from '../pages/ErrorPage';
import Homepage from '../pages/General/Homepage';
import AdminSignUp from '../pages/General/AdminSignUp';
import EmployeeSignUp from '../pages/General/EmployeeSignUp';
import Dashboard from '../pages/Logged/Dashboard';
import Payment from '../pages/Admin/Payment';
import Login from '../pages/General/Login';

const router = Router([
  {
    path: "/",
    element: <GeneralLayout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage/>
      },
      {
        path: "/joinAdmin",
        element: <AdminSignUp/>
      },
      {
        path: "/joinEmployee",
        element: <EmployeeSignUp/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/payment",
        element: <Payment/>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  }
])

export default router;