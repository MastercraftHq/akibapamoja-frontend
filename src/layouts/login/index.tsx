/** @format */
import { Outlet } from "react-router-dom";
import Footer from "./footer";

const LoginLayout = () => {
  return (
    <>
      <Outlet />;
      <Footer />;
    </>
  );
};

export default LoginLayout;
