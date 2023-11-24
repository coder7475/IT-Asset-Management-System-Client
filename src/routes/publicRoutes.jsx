import { createBrowserRouter as Router } from 'react-router-dom'
import GeneralLayout from '../layouts/GeneralLayout';

const router = Router([
  {
    path: "/",
    element: <GeneralLayout/>
  }
])

export default router;