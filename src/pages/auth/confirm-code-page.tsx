/** @format */

import { Button } from "@/components/ui/button";
import OneTimePasswordFieldDemo from "@/components/ui/otp-field";

export default function ConfirmCodePage() {
  return (
    <div className="w-2/3 flex flex-col items-center mx-auto gap-8">
      <div className="flex flex-col justify-center items-center gap-1 text-center leading-[normal]">
        <h1 className="text-charcoal  text-[28px] font-semibold">Enter code</h1>
        <p className=" text-[#5A5A5A] text-sm font-normal text-center">
          A 6-digit code has been sent to your number{" "}
          <strong className="text-[#1E1E1E] font-semibold">070*****82</strong>
        </p>
      </div>
      <form action="" className="w-fit flex flex-col items-center gap-5.5">
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
            className="text-primary text-center text-sm leading-[normal] underline decoration-solid decoration-auto underline-offset-auto cursor-pointer"
          >
            Resend code
          </p>
        </div>
        <Button className="w-full h-12 bg-primary rounded-lg text-white font-medium text-sm">
          Verify
        </Button>
      </form>
      <span className="text-center hidden md:flex text-#4d4d4d gap-0.5 text-gray-600">
        Already a member?
        <span className="text-primary underline font-medium cursor-pointer">
          Log in
        </span>
      </span>
    </div>
  );
}
