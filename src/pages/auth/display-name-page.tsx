/** @format */

import { Button } from "@/components/ui/button";

export default function DisplayNamePage() {
  return (
    <div className=" font-geist flex flex-col px-2 sm:px-4 gap-6 py-5">
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center  max-w-md w-full">
          <h1 className="text-charcoal text-center md:text-left text-[28px] leading-normal font-semibold mb-5.5">
            What’s your name?
          </h1>
          <div className="flex flex-col items-center gap-5.5 w-81">
            <form action="" className="w-full flex flex-col items-start gap-4">
              <label
                htmlFor="display-name"
                className="text-sm text-[#303030] self-stretch"
              >
                Display Name
              </label>
              <input
                type="text"
                id="display-name"
                name="display-name"
                className="w-full h-12 flex py-1.5 px-3 items-center self-stretch rounded-[8px] bg-input-gray focus:outline-none focus:ring-2 focus:ring-primary text-[#AFAFAF]"
                placeholder="Full name"
              />
              <p className="text-[#303030] text-center text-xs leading-normal">
                Feel free to use emojis or special characters.
              </p>
            </form>
            <Button className="w-full h-12 bg-primary rounded-lg text-white font-medium text-sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
