import { createBrowserRouter as Router } from 'react-router-dom'
import GeneralLayout from '../layouts/GeneralLayout';
import ErrorPage from '../pages/ErrorPage';
import Homepage from '../pages/General/Homepage';
import AdminSignUp from '../pages/General/AdminSignUp';

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
      }
    ]
  }
])

export default router;