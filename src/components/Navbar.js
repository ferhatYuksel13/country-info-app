import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    margin: "0 10px",
    fontWeight: "bold"
  };

  return (
    <nav style={{ padding: "15px", background: "#eee", textAlign: "center" }}>
      <Link to="/" style={linkStyle}>Ana Sayfa</Link> | 
      <Link to="/countries" style={linkStyle}>Tüm Ülkeler</Link> | 
      <Link to="/continents" style={linkStyle}>Kıtalar</Link> | 
      <Link to="/search" style={linkStyle}>Arama</Link>
    </nav>
  );
}

export default Navbar;
