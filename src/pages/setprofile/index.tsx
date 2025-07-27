/** @format */
import { ArrowLeft, Plus } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
        <div className="relative w-52 h-52 rounded-full border border-dashed border-gray-400 flex items-center justify-center">
          <img
            src={assets.profileAvatar}
            alt="Profile Avatar"
            className="w-38 h-38 object-cover rounded-full"
          />
          <button
            className="absolute top-[20%] -right-4 -translate-x-1/2 -translate-y-1/2 bg-[#4107A5] text-white rounded-full w-9 h-9 flex items-center justify-center shadow-md z-10"
            aria-label="Add"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs mt-6">Or choose Akiba Chama avator</p>
        <div className="flex flex-col gap-3 items-center">
          <div className="flex gap-4">
            {" "}
            <div className="bg-[#FFDBDE] p-1 rounded-full inline-block">
              <Avatar className="w-10 h-10">
                <AvatarImage src={assets.avator1} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="bg-[#FFF2B9] p-1 rounded-full inline-block">
              <Avatar className="w-10 h-10">
                <AvatarImage src={assets.avator2} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="bg-[#D1FFF4] p-1 rounded-full inline-block">
              <Avatar className="w-10 h-10">
                <AvatarImage src={assets.avator3} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="bg-[#FFC0B8] p-1 rounded-full inline-block">
              <Avatar className="w-10 h-10">
                <AvatarImage src={assets.avator4} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="flex gap-4">
            {" "}
            <div className="bg-[#FFF2B9] p-1 rounded-full inline-block">
              <Avatar className="w-10 h-10">
                <AvatarImage src={assets.avator5} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="bg-[#FFA576] p-1 rounded-full inline-block">
              <Avatar className="w-10 h-10">
                <AvatarImage src={assets.avator6} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
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
