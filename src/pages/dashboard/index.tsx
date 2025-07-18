/** @format */

import Buttons from "../../components/Buttons";

const Dashboard = () => {
  return (
    <div>
      this is the homepage
      <div className="flex">
        <Buttons to="/setprofile" label="SetProfile" variant="primary" />
      </div>
    </div>
  );
};

export default Dashboard;
