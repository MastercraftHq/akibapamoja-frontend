/** @format */

import { useState } from "react";
import type { ChangeEvent } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function CreateAccountPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (!isFormValid()) return;

    // Navigate to OTP page with both contact methods
    navigate("/auth/register/confirm", {
      state: {
        email: formData.email,
        phone: formData.phone,
      },
    });
  };

  const isFormValid = () => {
    // Validate both email and phone
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const phoneValid = formData.phone.length >= 10;

    return emailValid && phoneValid;
  };

  return (
    <div className=" w-full max-w-md p-3">
      <div className="flex items-center justify-center ">
        <div className="flex flex-col justify-center border p-3 gap-3">
          <h2 className="font-medium text-xl font-geist">Create an account</h2>
          <p>Register your account using either your phone number or email</p>
          <div className="flex gap-6 w-full">
            <Tabs defaultValue="Phone" className="w-[400px]">
              <TabsList className="w-full">
                <TabsTrigger value="Phone">Phone</TabsTrigger>
                <TabsTrigger value="Email">Email</TabsTrigger>
              </TabsList>
              <TabsContent value="Phone">
                {" "}
                <input
                  type="number"
                  name="phonenumber"
                  id=""
                  placeholder="Enter phone number"
                  className="border p-2 rounded w-full text-sm"
                />
              </TabsContent>
              <TabsContent value="Email">
                {" "}
                <input
                  type="Email"
                  name="Email"
                  id=""
                  placeholder="Enter your email"
                  className="border p-2 rounded w-full text-sm"
                />
              </TabsContent>
            </Tabs>
          </div>

          {/* Next button */}
          <Button
            onClick={handleNext}
            disabled={!isFormValid()}
            className="cursor-pointer mt-2"
          >
            Next
          </Button>

          {/* Social signup  */}
          <p className="text-center">OR</p>
          <div className="flex flex-col gap-4 mb-4">
            <Button asChild variant="outline">
              <Link to="/auth/login" className="flex items-center gap-2">
                <img
                  src={assets.goggleicon}
                  alt="google icon"
                  className="w-5 h-5"
                />
                <span>Sign up with Google</span>
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/auth/login" className="flex items-center gap-2">
                <img
                  src={assets.facebookicon}
                  alt="facebook icon"
                  className="w-5 h-5"
                />
                <span>Sign up with Facebook</span>
              </Link>
            </Button>
          </div>

          <p className="text-gray-500 text-xs text-center">
            Already a member?{" "}
            <Link
              className="underline text-purple-900 text-xs"
              to="/auth/login"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
