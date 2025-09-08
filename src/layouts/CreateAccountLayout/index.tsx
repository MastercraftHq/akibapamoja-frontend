/** @format */

import { Outlet } from "react-router-dom";
import { Mail } from "lucide-react";
import { assets } from "@/assets/assets";

const CreateAccountLayout = () => {
  return (
    <div>
      <div className="flex h-22 pl-3">
        <img src={assets.akibalogo} alt="akiba logo" />
      </div>
      <div className="flex h-screen">
        {/* Left side: form/content */}

        <div className="w-1/2 flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center">
            <Outlet />
          </div>

          {/* Footer always at bottom of left side */}
          <footer className="mt-auto w-full">
            <div className="flex justify-between p-6">
              <p className="flex items-center gap-1">
                <span>© Akiba Pamoja 2025</span>
              </p>
              <p className="flex items-center gap-1">
                <Mail /> <span>info@spaceyatech.com</span>
              </p>
            </div>
          </footer>
        </div>

        {/* Right side: image carrousel*/}
        <div className="w-1/2 relative flex flex-col items-center justify-center bg-gray-100 p-6 gap-4">
          <img
            src="/assets/right1.png"
            alt="Visual 1"
            className="max-w-full object-contain"
          />
          <img
            src="/assets/right2.png"
            alt="Visual 2"
            className="max-w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateAccountLayout;
