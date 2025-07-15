/** @format */

// import React from 'react'

// const RegistrationLayout = () => {
//   return (
//     <div>RegistrationLayout</div>
//   )
// }

// export default RegistrationLayout;

// import React from 'react';
import { Outlet } from "react-router-dom";
import Regfooter from "./footer";

const RegistrationLayout = () => {
  return (
    <div>
      <Outlet />
      <Regfooter />
    </div>
  );
};

export default RegistrationLayout;
