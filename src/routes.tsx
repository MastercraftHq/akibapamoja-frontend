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
import SetProfile from "./pages/setprofile";
import SetPasswordLayout from "./layouts/password-layout";
import SetPasswordPage from "./pages/auth/password-page";
import ConfirmCodePage from "./pages/auth/confirm-code-page";
import DisplayNamePage from "./pages/auth/display-name-page";
import ModalContact from "./pages/setprofile/modal";

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
      path: "auth/register",
      element: <RegistrationLayout />,
      children: [
        {
          index: true,
          //   path: "register",
          element: <RegistrationPage />,
        },

        {
          path: "display-name",
          element: <DisplayNamePage />,
        },
      ],
    },

    //Confirmation Page
    {
      path: "confirm",
      element: <ConfirmCodePage />,
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
    //Set Password Page
    {
      path: "auth/set-password",
      element: <SetPasswordLayout />,
      children: [
        {
          index: true,
          element: <SetPasswordPage />,
        },
      ],
    },

    // not found page
    {
      path: "*",
      element: <NotFoundPage />,
    },
    //dashboard landing
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
    {
      path: "setprofile",
      element: <SetProfile />,
    },
    {
      path: "ModalContact",
      element: <ModalContact />,
    },
  ]);

  return routes;
};

export default Router;
