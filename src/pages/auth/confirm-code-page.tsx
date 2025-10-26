/** @format */

// import { useState } from "react";
import { Button } from "@/components/ui/button";
import OneTimePasswordFieldDemo from "@/components/ui/otp-field";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ConfirmCodePage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get both email and phone from location state
  const { email, phone, contact, method } = location.state || {};

  const handleVerify = () => {
    // For now, auto-proceed since OTP is not implemented
    navigate("/auth/register/display-name", {
      state: {
        email: email || (method === "email" ? contact : ""),
        phone: phone || (method === "phone" ? contact : ""),
        contact,
        method,
      },
    });
  };

  // If no contact info, redirect back --AUTO ENABLE ONCE OTP IS CONFIGURED
  // if (!email && !phone && !contact) {
  //   navigate("/auth/register");
  //   return null;
  // }

  // Determine which contact method to display for OTP --AUTO REMOVE TEST WHEN DONE WITH OTP VERIFICATION
  const displayContact = email || phone || contact || "test@example.com";
  const displayMethod = email ? "email" : phone ? "phone" : method;

  const maskedContact =
    displayMethod === "phone"
      ? displayContact.replace(/(\d{3})\d+(\d{2})/, "$1*****$2")
      : displayContact.replace(/(.{3}).*@(.*)/, "$1****@$2");

  return (
    <div className="w-2/3 flex flex-col items-center mx-auto gap-8">
      <div className="flex justify-between w-full">
        <Button variant="ghost" size="sm" className="mr-4 p-2">
          <Link to="/auth/register">
            <ArrowLeft size={24} className="text-gray-600" />
          </Link>
        </Button>
      </div>

      <div className="flex flex-col justify-center items-center gap-1 text-center">
        <h1 className="text-charcoal text-[28px] font-semibold">Enter code</h1>
        <p className="text-[#5A5A5A] text-sm font-normal">
          A 6-digit code has been sent to your {displayMethod}{" "}
          <strong className="text-[#1E1E1E] font-semibold">
            {maskedContact}
          </strong>
        </p>
      </div>

      <div className="w-fit flex flex-col items-center gap-5.5">
        <div className="flex flex-col justify-center items-center gap-5 self-stretch">
          {/* Use the OTP component without onComplete prop for now */}
          <OneTimePasswordFieldDemo />
          <p className="text-primary text-center text-sm underline cursor-pointer">
            Resend code
          </p>
        </div>

        <Button
          onClick={handleVerify}
          className="w-full h-12 bg-primary rounded-lg text-white font-medium text-sm"
        >
          Verify
        </Button>
      </div>

      <span className="text-center text-gray-600 gap-0.5">
        Already a member?
        <Link
          to="/auth/login"
          className="text-primary underline font-medium ml-1"
        >
          Log in
        </Link>
      </span>
    </div>
  );
}
