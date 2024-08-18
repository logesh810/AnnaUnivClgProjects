import {
    createBrowserRouter,
  } from "react-router-dom";
import { LoginScreen } from "../feature/Login/login";
import { Dashboard } from "../feature/dashboard/dashboard";

export const router = createBrowserRouter([

    {
        path:"/",
        element:<LoginScreen />
    },

    {
        path:"/dashboard",
        element:<Dashboard />
    }
])