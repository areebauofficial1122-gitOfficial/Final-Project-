import React from "react";
import { Link } from "react-router-dom";

function TechCard({ name, description, image }) {
  return (
    <div className="card" style={{ width: "280px", overflow: "hidden" }}>
      
      <img 
        src={image} 
        alt={name}
        style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "8px" }}
      />

      <h3 style={{ marginTop: "15px" }}>{name}</h3>
      <p style={{ marginTop: "10px", color: "#555" }}>{description}</p>

      <Link className="btn" to={`/category/${name}`}>
        View Details
      </Link>
    </div>
  );
}

export default TechCard;
