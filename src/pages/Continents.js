import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "../components/CountryCard";

const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

function Continents() {
  const [selected, setSelected] = useState(null);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (selected) {
      axios.get(`https://restcountries.com/v3.1/region/${selected}`)
        .then(res => setCountries(res.data))
        .catch(err => console.error(err));
    }
  }, [selected]);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "15px" }}>Kıtalar</h2>
      
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        {continents.map(c => (
          <button
            key={c}
            onClick={() => setSelected(c)}
            style={{
              margin: "0 5px",
              padding: "8px 12px",
              backgroundColor: selected === c ? "#b22222" : "#f0f0f0",
              color: selected === c ? "white" : "black",
              border: "1px solid #ccc",
              borderRadius: "3px",
              cursor: "pointer",
              fontSize: "14px"
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "15px"
      }}>
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Continents;
