import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2 style={{ color: "white" }}>Tech Learning Hub</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}

export default Navbar;
