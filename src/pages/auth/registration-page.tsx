/** @format */

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const RegistrationPage = () => {
  return (
    <div className="w-full min-h-screen font-geist text-[#303030] bg-white flex flex-col justify-center px-2 sm:px-4 py-3">
      <div className="flex justify-between w-full">
        <Button variant="ghost" size="sm" className="mr-4 p-2">
          <Link to="/">
            <ArrowLeft size={24} className="text-gray-600" />
          </Link>
        </Button>
        <Button variant="ghost" size="sm" className="mr-4 p-2">
          <Link to="/confirm">
            <ArrowRight size={24} className="text-gray-600" />
          </Link>
        </Button>
      </div>
      <div className="flex flex-col items-center py-5 w-full max-w-sm mx-auto">
        <p className="text-base sm:text-lg w-full block mx-auto pt-8 text-center">
          You are signing up to join the
          <br /> <span className="font-semibold">Akili Dada Chama.</span>
        </p>
        <div className="flex flex-col items-center justify-center pt-2 ">
          <div className="w-full flex flex-col items-center gap-8 sm:gap-10">
            <div className="flex flex-col items-start gap-2 w-full">
              <p className="text-sm">First Name</p>
              <input
                type="text"
                className="flex items-center gap-1.5 w-full h-10 py-1.5 px-3 rounded-lg bg-input-gray"
              />
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <p className="text-sm">Last name</p>
              <input
                type="text"
                className="flex items-center gap-1.5 w-full h-10 py-1.5 px-3 rounded-lg bg-input-gray"
              />
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <p className="text-sm">Password</p>
              <input
                type="password"
                className="flex items-center gap-1.5 w-full h-10 py-1.5 px-3 rounded-lg bg-input-gray"
              />
              <p className="w-full max-w-xs text-[#5A5A5A] text-tiny">
                Your password should be at least 8 characters long with one
                special character ($, #, !, *, &, @)
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <p className="text-sm">Confirm Password</p>
              <input
                type="password"
                className="flex items-center gap-1.5 w-full h-10 py-1.5 px-3 rounded-lg bg-input-gray"
              />
            </div>
          </div>
          {/* join button and terms */}
          <div className="w-full flex flex-col items-start gap-6 my-8">
            <Button className="w-full h-12 bg-primary rounded-lg text-white font-medium text-sm">
              Join
            </Button>
            <span className="inline-block w-full max-w-xs text-[#64646A] text-tiny">
              By clicking Sign up, you agree to Akili Dada’s
              <br />
              <span className="text-primary">Constitution</span> and{" "}
              <span className="text-primary">Privacy Policy</span> and you
              acknowledge that 10% <br /> of your begging proceeds goes to Akiba
              Pamoja.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
