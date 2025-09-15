/** @format */

import { Navigate, useRoutes } from "react-router-dom";
import NotFoundPage from "./pages/not-found";

import LoginPage from "./pages/auth/login-page";
import LoginLayout from "./layouts/login";
import RegistrationPage from "./pages/auth/registration-page";
import LandingLayout from "./layouts/landing-layout";
import HomePage from "./pages/landing-page";
import DashboardLayout from "./layouts/dashboard-layout";
import Dashboard from "./pages/dashboard";
import SetProfile from "./pages/setprofile";
// import SetPasswordLayout from "./layouts/password-layout";
import SetPasswordPage from "./pages/auth/password-page";
import ConfirmCodePage from "./pages/auth/confirm-code-page";
import DisplayNamePage from "./pages/auth/display-name-page";
import ModalContact from "./pages/setprofile/modal";

import CreateAccountPage from "./pages/auth/create-account";
import AuthLayout from "./layouts/AuthLayout";

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

    //Registration Flow - CHANGED TO USE AuthLayout
    {
      path: "auth/register",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <RegistrationPage />,
        },
        {
          path: "display-name",
          element: <DisplayNamePage />,
        },
        {
          path: "confirm",
          element: <ConfirmCodePage />,
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

    //Set Password Page
    {
      path: "auth/set-password",
      element: <AuthLayout />,
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
          element: <Navigate to="/" />,
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

    //create account page with layout
    {
      path: "create-account",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <CreateAccountPage />,
        },
      ],
    },
  ]);

  return routes;
};

export default Router;
