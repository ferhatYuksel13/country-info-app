import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import CountryDetail from "./pages/CountryDetail";
import Continents from "./pages/Continents";
import SearchFilter from "./pages/SearchFilter";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/country/:name" element={<CountryDetail />} />
        <Route path="/continents" element={<Continents />} />
        <Route path="/search" element={<SearchFilter />} />
      </Routes>
    </Router>
  );
}

export default App;