import "./App.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";

import Demo from "./Demo/Demo";
import Favourites from "./Favourites/Favourites";
import FoodSwipe from "./FoodSwipe/FoodSwipe";
import Homescreen from "./Homescreen/Homescreen";
import RestaurantListingPage from "./RestaurantListingPage/RestaurantListingPage";
import SearchPage from "./SearchPage/SearchPage";

if (process.env.NODE_ENV === "development") {
  require("mocks");
}

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/swipe" element={<FoodSwipe />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="restaurant" element={<RestaurantListingPage />} />
          <Route path="favourites" element={<Favourites />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
