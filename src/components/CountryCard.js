import React from "react";
import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        width: "220px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        backgroundColor: "#fff",
        transition: "transform 0.2s",
      }}
    >
      <img
        src={country.flags.png}
        alt={country.name.common}
        style={{
          width: "100px",
          height: "auto",
          borderRadius: "5px",
          marginBottom: "10px",
        }}
      />
      <h3>{country.name.common}</h3>
      <p>Bölge: {country.region}</p>

      <Link
        to={`/country/${country.name.common}`}
        style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "8px 12px",
          backgroundColor: "#f0f0f0",
          color: "black",
          border: "1px solid #ccc",
          borderRadius: "3px",
          textDecoration: "none",
          fontSize: "14px",
          cursor: "pointer"
        }}
      >
        Detay
      </Link>
    </div>
  );
}

export default CountryCard;
