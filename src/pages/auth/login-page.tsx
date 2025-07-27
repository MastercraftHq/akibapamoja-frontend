/** @format */

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col min-h-screen font-geist px-2 sm:px-4 py-8">
      <div className="flex justify-between">
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
      <div className="flex flex-col items-center">
        <div className="text-center mb-8 w-full">
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
            Welcome back
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Enter your phone number and
            <br />
            password to sign back in.
          </p>
        </div>

        <div className="w-full max-w-sm">
          <div className="space-y-4 mb-6">
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 sm:py-4">
              <span className="text-gray-600 font-medium mr-3 flex items-center gap-1 text-sm sm:text-base">
                KE +254
                <span className="text-gray-500">|</span>
              </span>

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
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 sm:py-4 text-black placeholder-gray-400 outline-none text-base"
              />
            </div>
          </div>

          <div className="text-right mb-8">
            <a
              href="/forgot-password"
              className="text-primary text-md hover:text-primary transition-colors"
            >
              Forgot password?
            </a>
          </div>

          <button className="w-full bg-primary text-white py-3 sm:py-4 rounded-lg font-semibold text-base ">
            Continue
          </button>
          {/* <p className="text-center text-gray-600 text-sm mt-76 sm:mt-30">
          Want to create a new chama?
          <a
            href="/sign-up"
            className="text-primary transition-colors ml-1 "
          >
            Sign up for free
          </a>
        </p> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
