/** @format */
import { Outlet } from "react-router-dom";
// import Footer from "./footer";   ...error, canot identify

const LoginLayout = () => {
  return (
    <>
      <Outlet />;
      {/* <Footer />; */}
    </>
  );
};

export default LoginLayout;
