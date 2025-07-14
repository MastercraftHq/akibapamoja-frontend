/** @format */

// import React from 'react'

// const LoginLayout = () => {
//   return (
//     <div className='text-bold'>LoginLayout</div>
//   )
// }

// export default LoginLayout;

// import React from 'react';
import { Outlet } from "react-router-dom";
import React, { useState } from 'react';


const LoginLayout = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

 

  return (
    <div className="text-bold">
      <Outlet />
    </div>
  );
};
    <div className="flex flex-col items-center pt-24 min-h-screen bg-gray-100 p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Welcome back</h1>
        <p className="text-gray-600 text-base leading-relaxed">
          Enter your phone number and<br />
          password to sign back in.
        </p>
      </div>

      <div className="w-full max-w-sm">
        <div className="space-y-4 mb-6">
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-4">
            <span className="text-black font-medium mr-3">KE +254</span>
            <input
              type="tel"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="flex-1 bg-transparent outline-none text-black placeholder-gray-400 text-base"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-4 text-black placeholder-gray-400 outline-none text-base"
            />
          </div>
        </div>

        <div className="text-right mb-8">
          <a href="/forgot-password" className="text-indigo-700 text-md hover:text-indigo-700 transition-colors">
            Forgot password?
          </a>
        </div>


        <button
          className="w-full bg-indigo-700 text-white py-4 rounded-lg font-semibold text-base hover:bg-indigo-700 active:scale-95 transition-all duration-200"
        >
          Continue
        </button>
        <p className="text-center text-gray-600 text-sm mt-76 sm:mt-30">
          Want to create a new chama?
          <a href="/sign-up" className="text-indigo-700 hover:text-indigo-900 transition-colors ">
            Sign up for free
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginLayout;
