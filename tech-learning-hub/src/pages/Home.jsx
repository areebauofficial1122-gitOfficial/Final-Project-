import React, { useState, useEffect } from "react";
import techData from "../utils/techData";
import TechCard from "../components/TechCard";

function Home() {
  const [technologies, setTechnologies] = useState([]);

  // Load data when component mounts
  useEffect(() => {
    setTechnologies(techData);
  }, []);

  return (
    <div className="container">
      
      {/* Hero Section */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
          Welcome to Tech Learning Hub
        </h1>
        <p style={{ color: "#555", maxWidth: "600px", margin: "0 auto" }}>
          Explore different technology domains, understand their scope,
          and discover the skills required to build your career.
        </p>
      </div>

      {/* Technology Cards Section */}
      <div className="tech-grid">
        {technologies.map((tech) => (
          <TechCard
            key={tech.id}
            name={tech.name}
            description={tech.description}
            image={tech.image}
          />
        ))}
      </div>

    </div>
  );
}

export default Home;
