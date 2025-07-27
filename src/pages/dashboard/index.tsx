/** @format */

import Buttons from "../../components/Buttons";

const Dashboard = () => {
  return (
    <div className=" flex flex-col justify-center p-6 gap-4">
      <h2 className="text-2xl"> This is the homepage</h2>
      <div className="flex gap-2">
        <Buttons to="/setprofile" label="SetProfile" variant="primary" />
        <Buttons
          to="/auth/set-password"
          label="setPassword"
          variant="primary"
        />
      </div>
    </div>
  );
};

export default Dashboard;
