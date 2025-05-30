import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CountryDetail() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then(res => setCountry(res.data[0]))
      .catch(err => console.error(err));
  }, [name]);

  if (!country) return <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "600" }}>Yükleniyor...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        {country.name.common}
      </h2>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img src={country.flags.png} alt={country.name.common} width="200" />
      </div>

      <div style={{ fontSize: "16px", lineHeight: "1.8", color: "#555", textAlign: "center" }}>
        <p><strong>Başkent:</strong> {country.capital?.[0] || "Bilinmiyor"}</p>
        <p><strong>Nüfus:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Bölge:</strong> {country.region}</p>
        <p><strong>Alt Bölge:</strong> {country.subregion}</p>
        <p><strong>Diller:</strong> {Object.values(country.languages || {}).join(", ")}</p>
        <p><strong>Para Birimi:</strong> {Object.values(country.currencies || {}).map(c => c.name).join(", ")}</p>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button 
          onClick={() => window.history.back()} 
          style={{
            margin: "0 5px",
            padding: "8px 12px",
            backgroundColor: "#f0f0f0",
            color: "black",
            border: "1px solid #ccc",
            borderRadius: "3px",
            cursor: "pointer",
            fontSize: "14px"
          }}
        >
          Geri Dön
        </button>
      </div>
    </div>
  );
}

export default CountryDetail;