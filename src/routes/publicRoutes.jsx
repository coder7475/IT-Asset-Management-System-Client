import { createBrowserRouter as Router } from "react-router-dom";
import GeneralLayout from "../layouts/GeneralLayout";
import ErrorPage from "../pages/ErrorPage";
import Homepage from "../pages/General/Homepage";
import AdminSignUp from "../pages/General/AdminSignUp";
import EmployeeSignUp from "../pages/General/EmployeeSignUp";
import Dashboard from "../pages/Logged/Dashboard";
import Payment from "../pages/Admin/Payment";
import Login from "../pages/General/Login";
import AdminHome from "../pages/Admin/AdminHome";
import AddAnAsset from "../pages/Admin/AddAnAsset";
import EmpHome from "../pages/Logged/EmpHome";
import CustomRequest from "../pages/Logged/CustomRequest";
import AddAnEmployee from "../components/Admin/AddAnEmployee";
import MyEmployeeList from "../pages/Admin/MyEmployeeList";
import RequestForAnAsset from "../pages/Logged/RequestForAnAsset";
import AllRequestList from "../pages/Admin/AllRequestList";
import CustomRequestList from "../pages/Admin/CustomRequestList";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AllAssetList from '../pages/Admin/AllAssetList';
import UpdateAnAsset from '../pages/Admin/UpdateAnAsset';
import Profile from '../pages/Admin/Profile';

const router = Router([
  {
    path: "/",
    element: <GeneralLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/joinAdmin",
        element: <AdminSignUp />,
      },
      {
        path: "/joinEmployee",
        element: <EmployeeSignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />{" "}
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      // Employee routes
      {
        path: "userHome",
        element: <EmpHome />,
      },
      {
        path: "myTeam",
        element: <h2>my team</h2>
      },
      {
        path: "myAssets",
        element: <h2>my asset</h2>
      },
      {
        path: "customRequest",
        element: <CustomRequest />,
      },
      {
        path: "addAnEmployee",
        element: <AddAnEmployee />,
      },
      {
        path: "requestForAnAsset",
        element: <RequestForAnAsset />,
      },
      // Admin routes
      {
        path: "adminHome",
        element: <AdminRoute><AdminHome /></AdminRoute>,
      },
      {
        path: "assetList",
        element: <AdminRoute><AllAssetList/></AdminRoute>
      },
      {
        path: "/dashboard/assetList/:id",
        element: <UpdateAnAsset/>
      }
      ,
      {
        path: "addAnAsset",
        element: <AdminRoute><AddAnAsset /></AdminRoute>,
      },
      {
        path: "allRequestList",
        element: <AdminRoute><AllRequestList /></AdminRoute>,
      },
      {
        path: "customRequestList",
        element: <AdminRoute><CustomRequestList /></AdminRoute>,
      },
      {
        path: "myEmployeeList",
        element: (
          <AdminRoute>
            <MyEmployeeList />,
          </AdminRoute>
        ),
      },
      {
        path: "profile",
        element: <Profile/>
      }
    ],
  },
]);

export default router;
