import React from "react";

function StatsCard({ title, value }) {
  return (
    <div className="card" style={{ width: "200px", textAlign: "center" }}>
      <h4>{title}</h4>
      <h2 style={{ marginTop: "10px", color: "#2563eb" }}>{value}</h2>
    </div>
  );
}

export default StatsCard;
