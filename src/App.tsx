import React from "react";
import { Routes, Route } from "react-router-dom";

import Homescreen from "./Homescreen/Homescreen";
import RestaurantListingPage from "./RestaurantListingPage/RestaurantListingPage";
import SearchPage from "./SearchPage/SearchPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="restaurant" element={<RestaurantListingPage />} />
      </Routes>
    </div>
  );
}

export default App;
