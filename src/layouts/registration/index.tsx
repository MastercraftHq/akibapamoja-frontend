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

const RegistrationLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RegistrationLayout;
