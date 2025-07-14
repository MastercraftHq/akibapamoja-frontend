/** @format */

import { Navigate, useRoutes } from "react-router-dom";
import NotFoundPage from "./pages/not-found";

import LoginPage from "./pages/auth/login-page";
import LoginLayout from "./layouts/login";
import RegistrationLayout from "./layouts/registration";
import RegistrationPage from "./pages/auth/registration-page";
import LandingLayout from "./layouts/landing-layout";
import HomePage from "./pages/landing-page";
import DashboardLayout from "./layouts/dashboard-layout";
import Dashboard from "./pages/dashboard";

const Router = () => {
  const routes = useRoutes([
    //Auth Pages
    //Login Page
    {
      path: "auth",
      element: <LoginLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="/auth/login" replace />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
      ],
    },

    //Registration Flow
    {
      path: "auth",
      element: <RegistrationLayout />,
      children: [
        {
          index: false,
          element: <Navigate to="/auth/register" replace />,
        },
        {
          path: "register",
          element: <RegistrationPage />,
        },
      ],
    },

    //HomePage
    {
      path: "/",
      element: <LandingLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },

    // not found page
    {
      path: "*",
      element: <NotFoundPage />,
    },
    //Homepage
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="/" replace />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return routes;
};

export default Router;
