import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const buttonStyle = {
    margin: "0 5px",
    padding: "8px 12px",
    backgroundColor: "#f0f0f0",
    color: "black",
    border: "1px solid #ccc",
    borderRadius: "3px",
    cursor: "pointer",
    fontSize: "14px",
    textDecoration: "none",
  };

  return (
    <div style={{
      textAlign: "center",
      padding: "40px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      maxWidth: "500px",
      margin: "40px auto",
      borderRadius: "8px"
    }}>
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>Ülke Bilgi Sistemi</h1>
      <p style={{ fontSize: "18px", color: "#555", marginBottom: "30px" }}>
        Dünyadaki ülkeler hakkında bilgi alabileceğiniz bir sistem.
      </p>
      <div>
        <Link to="/countries" style={buttonStyle}>Tüm Ülkeler</Link>
        <Link to="/continents" style={buttonStyle}>Kıtalar</Link>
        <Link to="/search" style={buttonStyle}>Arama / Filtreleme</Link>
      </div>
    </div>
  );
}

export default Home;
