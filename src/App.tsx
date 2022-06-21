import "./App.css";

import { Route, Routes } from "react-router-dom";

import Demo from "./Demo/Demo";
import Homescreen from "./Homescreen/Homescreen";
import RestaurantListingPage from "./RestaurantListingPage/RestaurantListingPage";
import SearchPage from "./SearchPage/SearchPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="restaurant" element={<RestaurantListingPage />} />
      </Routes>
    </div>
  );
}

export default App;
