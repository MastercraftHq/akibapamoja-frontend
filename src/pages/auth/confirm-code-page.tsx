/** @format */

"use client";
import { Button } from "@/components/ui/button";
import OneTimePasswordFieldDemo from "@/components/ui/otp-field";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ConfirmCodePage() {
  return (
    <div className="w-full min-h-screen font-geist text-[#303030] bg-white flex flex-col items-center px-2 sm:px-4 py-4 gap-6">
      <div className="flex justify-between w-full">
        <Button variant="ghost" size="sm" className="mr-4 p-2">
          <Link to="/">
            <ArrowLeft size={24} className="text-gray-600" />
          </Link>
        </Button>
        <Button variant="ghost" size="sm" className="mr-4 p-2">
          <Link to="/auth/register/display-name">
            <ArrowRight size={24} className="text-gray-600" />
          </Link>
        </Button>
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-4 py-3">
        <div className="w-52 flex flex-col gap-3 ">
          <div className="flex justify-center items-center gap-1 text-center leading-[normal]">
            <h1 className="text-charcoal  text-[28px] font-semibold">
              Enter code
            </h1>
          </div>
          <p className=" text-[#5A5A5A] text-sm font-normal text-center">
            A 6-digit code has been sent to your number{" "}
            <strong className="text-[#1E1E1E] font-semibold">070*****82</strong>
          </p>
        </div>
        <form action="" className="w-84 flex flex-col items-center gap-5.5">
          {/* input with 6 boxes for the code */}
          <div className="flex flex-col justify-center items-center gap-5 self-stretch">
            <div className="flex justify-center items-start gap-2 self-stretch">
              <OneTimePasswordFieldDemo />
            </div>
            <p
              style={{
                textDecorationSkipInk: "auto",
                textUnderlinePosition: "from-font",
              }}
              className="text-primary text-center text-sm leading-[normal] underline decoration-solid decoration-auto underline-offset-auto "
            >
              Resend code
            </p>
          </div>
          <Button className="w-full h-12 bg-primary rounded-lg text-white font-medium text-sm">
            Verify
          </Button>
        </form>
      </div>
    </div>
  );
}
