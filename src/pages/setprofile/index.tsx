/** @format */
import { ArrowLeft } from "lucide-react";
// import { CirclePlus } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import Buttons from "../../components/Buttons";

import { assets } from "@/assets/assets";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SetProfile = () => {
  return (
    <div className="min-h-screen flex flex-col p-6 relative w-full">
      <div className="flex justify-between w-full mb-8">
        <Button variant="ghost" size="sm" className="mr-4 p-2">
          <Link to="/">
            <ArrowLeft size={24} className="text-gray-600" />
          </Link>
        </Button>
        <Link
          to="/next-page"
          className="text-primary hover:opacity-80 transition-opacity"
        >
          Skip
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 py-4">
        <h2 className="text-xl font-semibold font-geist mb-3">
          Choose Profile picture
        </h2>
        <div className="w-52 h-52 rounded-full border-1 border-dashed border-gray-400 overflow-hidden flex items-center justify-center">
          <img
            src={assets.profileAvatar}
            alt="assetsImage"
            className="w-38 h-38 object-cover"
          />
        </div>
        <p className="text-xs mt-6">Or choose Akiba Chama avator</p>
        <div className="flex flex-col gap-3 items-center">
          <div className="flex gap-4">
            {" "}
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex gap-4">
            {" "}
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="w-full absolute bottom-0 py-2 px-4">
          {/* <Buttons to="/auth/login" label="Next" variant="primary" /> */}
          <button className="w-full bg-primary text-white py-3 sm:py-4 rounded-md font-semibold text-base ">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetProfile;
