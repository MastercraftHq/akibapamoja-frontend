/** @format */

import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import Buttons from "../../components/Buttons";

export default function CreateAccountPage() {
  return (
    <div className="min-h-screen w-full max-w-md p-3">
      <div className="flex h-32">
        <img src={assets.akibalogo} alt="akiba logo" />
      </div>
      <div className="flex items-center justify-center ">
        <div className="flex flex-col items-center justify-center border p-3 gap-3">
          <h2 className="font-bold text-xl font-geist">Create an account</h2>
          <p>Register your account using either your phonenumber or email</p>
          <div className="flex gap-6 w-full">
            <Button>Phone</Button>
            <Button>Email</Button>
          </div>
          <input
            type="number"
            name="phonenumber"
            id=""
            placeholder="Enter phone number"
            className="border p-2 rounded w-full text-sm"
          />
          <Buttons to="/auth/login" label="Next" variant="primary" />
          <p>or</p>
          <div className="flex flex-col gap-4">
            <Buttons
              to="/auth/login"
              label="Sign up with Google"
              variant="primary"
            />
            <Buttons
              to="/auth/login"
              label="Sign up with Facebook"
              variant="primary"
            />
          </div>
          <p>
            Already a member?{" "}
            <a
              className="underline text-purple-900 hover:cursor-pointer "
              href=""
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
