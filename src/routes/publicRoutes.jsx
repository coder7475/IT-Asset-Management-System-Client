import { createBrowserRouter as Router } from 'react-router-dom'
import GeneralLayout from '../layouts/GeneralLayout';
import ErrorPage from '../pages/ErrorPage';

const router = Router([
  {
    path: "/",
    element: <GeneralLayout/>,
    errorElement: <ErrorPage />
  }
])

export default router;