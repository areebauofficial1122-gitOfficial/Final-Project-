import React from "react";
import { useParams } from "react-router-dom";
import techData from "../utils/techData";

function Category() {
  const { name } = useParams();

  const tech = techData.find((item) => item.name === name);

  if (!tech) {
    return <h2>Technology Not Found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{tech.name}</h2>
      <p><strong>Description:</strong> {tech.description}</p>
      <p><strong>Career Scope:</strong> {tech.scope}</p>
    </div>
  );
}

export default Category;
