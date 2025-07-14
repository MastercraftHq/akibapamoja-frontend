/** @format */

import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="text-bold">
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
