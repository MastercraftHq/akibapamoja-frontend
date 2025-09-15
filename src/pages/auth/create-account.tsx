/** @format */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CreateAccountPage() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center ">
        <div className="flex flex-col justify-center p-3 gap-5 w-1/2">
          <div className="flex justify-between w-full">
            {/* dummy navigation buttons */}
            <Button variant="ghost" size="sm" className="mr-4 p-2">
              <Link to="/">
                <ArrowLeft size={24} className="text-gray-600" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" className="mr-4 p-2">
              <Link to="/auth/register/confirm">
                <ArrowRight size={24} className="text-gray-600" />
              </Link>
            </Button>
          </div>

          <div className="flex flex-col gap-5 mb-2">
            <h2 className="font-600 font-semibold leading-[38px] text-2xl font-geist">
              Create an account
            </h2>
            <p className="font-inter font-400 text-gray-600 text-sm">
              Register your account using either your phone number or email
            </p>
          </div>
          {/* tabs for phone and email */}
          <div className="flex gap-6 w-full">
            <Tabs defaultValue="Phone" className="w-[400px]">
              <TabsList className="w-full bg-white rounded-md flex gap-2 mb-5">
                <TabsTrigger
                  value="Phone"
                  className="flex-1 py-3 h-[48px] text-sm rounded text-gray-600 font-geist font-semibold
                data-[state=active]:bg-[hsla(262,92%,94%,1)]
                data-[state=active]:text-[hsla(262, 92%, 34%, 1)]"
                >
                  Phone
                </TabsTrigger>
                <TabsTrigger
                  value="Email"
                  className="flex-1 py-3 h-[48px] text-sm text-gray-600 rounded font-geist
                data-[state=active]:bg-[hsl(262,92%,94%,1)]
                 data-[state=active]:text-purple-900]
                  data-[state=active]:font-semibold"
                >
                  Email
                </TabsTrigger>
              </TabsList>
              <TabsContent value="Phone">
                {" "}
                <input
                  type="tel"
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

          <Button className="cursor-pointer">Next</Button>

          <p className="text-center">OR</p>
          <div className="flex flex-col gap-4 mb-4">
            {/* Button for alternate sigups */}
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
                  alt="google icon"
                  className="w-5 h-5"
                />
                <span>Sign up with Facebook</span>
              </Link>
            </Button>
          </div>
          <p className="font-geist font-400 text-gray-500 text-xs">
            Already a member?{" "}
            <a
              className="underline text-purple-900 hover:cursor-pointer text-xs "
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
