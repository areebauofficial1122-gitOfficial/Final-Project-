import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h3 style={{ marginBottom: "30px" }}>Dashboard</h3>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Overview</Link>
    </div>
  );
}

export default Sidebar;
