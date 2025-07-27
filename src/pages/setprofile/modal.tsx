/** @format */
import { Link } from "react-router-dom";
import Buttons from "../../components/Buttons";
import { Button } from "@/components/ui/button";

import { ArrowLeft, ArrowRight } from "lucide-react";

const ModalContact = () => {
  return (
    <div className="min-h-screen font-geist flex flex-col px-2 sm:px-4 gap-6 py-5">
      <div className="flex justify-between w-full">
        <Button variant="ghost" size="sm" className="mr-4 p-2">
          <Link to="/auth/set-password">
            <ArrowLeft size={24} className="text-gray-600" />
          </Link>
        </Button>
        <Button variant="ghost" size="sm" className="mr-4 p-2">
          <Link to="/SetProfile">
            <ArrowRight size={24} className="text-gray-600" />
          </Link>
        </Button>
      </div>
      <div className="h-screen flex items-center justify-center px-5 bg-[#FCFBFD]">
        <div className="w-full md:w-1/2 shadow-lg rounded-md py-10 flex flex-col gap-4 items-center justify-center ">
          <h2 className="font-geist text-xl font-semibold">Add to contacts</h2>
          <p className="text-sm text-center ">
            Sync your contacts to invite<br></br> your members to your chama
          </p>
          <Buttons to="" label="Allow" variant="primary" />
          <Link to="" className="text-primary">
            {" "}
            Skip
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalContact;
