/** @format */

import Buttons from "../../components/Buttons";

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
        <Buttons to="/auth/login" label="Login" variant="primary" />
        <Buttons to="/auth/register" label="Register" variant="secondary" />
        <Buttons to="dashboard" label="H" variant="primary" />
      </div>
    </div>
  );
};

export default HomePage;
