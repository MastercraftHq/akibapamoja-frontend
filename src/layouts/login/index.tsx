/** @format */
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div className="text-bold">
      <Outlet />
    </div>
  );
};

export default LoginLayout;
