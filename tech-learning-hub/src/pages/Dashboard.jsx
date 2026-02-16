import React, { useState, useEffect } from "react";
import techData from "../utils/techData";
import StatsCard from "../components/StatsCard";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const [totalTech, setTotalTech] = useState(0);

  useEffect(() => {
    setTotalTech(techData.length);
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <h2>Dashboard Overview</h2>

        <div className="stats-grid">
          <StatsCard title="Total Technologies" value={totalTech} />
          <StatsCard title="Categories" value="3" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
