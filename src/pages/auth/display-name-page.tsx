/** @format */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function DisplayNamePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Get both email and phone from location state
  const { email, phone, contact, method } = location.state || {};

  const handleNext = () => {
    if (!firstName.trim()) return;

    navigate("/auth/set-password", {
      state: {
        // Pass both email and phone explicitly
        email: email || (method === "email" ? contact : ""),
        phone: phone || (method === "phone" ? contact : ""),
        contact,
        method,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
      },
    });
  };

  return (
    <div className="font-geist flex flex-col px-2 sm:px-4 gap-6 py-5">
      <div className="flex justify-between w-full">
        <Button variant="ghost" size="sm" className="mr-4 p-2">
          <Link to="/auth/register/confirm">
            <ArrowLeft size={24} className="text-gray-600" />
          </Link>
        </Button>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center max-w-md w-full">
          <h1 className="text-charcoal text-center text-[28px] font-semibold mb-5.5">
            What's your name?
          </h1>
          <div className="flex flex-col items-center gap-5.5 w-full">
            <div className="w-full space-y-4">
              <div>
                <label
                  htmlFor="first-name"
                  className="text-sm text-[#303030] block mb-2"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="first-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full h-12 px-3 rounded-[8px] border focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="First name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="last-name"
                  className="text-sm text-[#303030] block mb-2"
                >
                  Last Name (optional)
                </label>
                <input
                  type="text"
                  id="last-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full h-12 px-3 rounded-[8px] border focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Last name"
                />
              </div>
            </div>

            {/* Show which contact method is being used */}
            <div className="w-full p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600">
                Creating account with:
                {email && (
                  <span className="font-medium ml-1">Email: {email}</span>
                )}
                {phone && (
                  <span className="font-medium ml-2">Phone: {phone}</span>
                )}
                {contact && !email && !phone && (
                  <span className="font-medium ml-1">
                    {contact} ({method})
                  </span>
                )}
              </p>
            </div>

            <p className="text-[#303030] text-center text-xs">
              Feel free to use emojis or special characters.
            </p>

            <Button
              onClick={handleNext}
              disabled={!firstName.trim()}
              className="w-full h-12 bg-primary rounded-lg text-white font-medium text-sm"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
