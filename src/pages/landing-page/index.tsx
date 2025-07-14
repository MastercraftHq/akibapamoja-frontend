/** @format */

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white. text-gray-800 font-geist p-6">
      <h1 className="text-4xl font-bold mb-2">Akiba Pamoja</h1>
      <h2 className="text-2xl mb-6">Welcome to our chama platfrom</h2>

      <p className="text-center mb-8 max-w-md">
        Join a community where savings, investements anad collective growth
        thrive
      </p>

      <div className="flex gap-4">
        <Link
          to="/auth/login"
          className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition cursor-pointer"
        >
          Login
        </Link>
        <Link
          to="/auth/register"
          className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition cursor-pointer"
        >
          Register
        </Link>
        <Link
          to="/dashboard"
          className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition cursor-pointer"
        >
          H
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
