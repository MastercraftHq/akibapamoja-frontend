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
    <div className="w-full">
      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-center p-3 gap-5 w-full max-w-md">
          {/* Navigation */}
          <div className="flex justify-between w-full">
            <Button variant="ghost" size="sm" className="mr-4 p-2">
              <Link to="/">
                <ArrowLeft size={24} className="text-gray-600" />
              </Link>
            </Button>
          </div>

          {/* Header */}
          <div className="flex flex-col gap-5 mb-2">
            <h2 className="font-semibold text-2xl font-geist">
              Create an account
            </h2>
            <p className="text-gray-600 text-sm">
              Sign up with email and phone number
            </p>
          </div>

          {/* Tabs */}

          <div className="space-y-4">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email *"
                value={formData.email}
                onChange={handleChange}
                className="border p-3 rounded w-full text-sm"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number *"
                value={formData.phone}
                onChange={handleChange}
                className="border p-3 rounded w-full text-sm"
                required
              />
            </div>
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
