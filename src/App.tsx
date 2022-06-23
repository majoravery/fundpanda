import "./App.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";

import Favourites from "./Favourites/Favourites";
import FoodDescriptionPage from "./FoodDescriptionPage/FoodDescriptionPage";
import FoodSwipe from "./FoodSwipe/FoodSwipe";
import Homescreen from "./Homescreen/Homescreen";
import RestaurantListingPage from "./RestaurantListingPage/RestaurantListingPage";
import SearchPage from "./SearchPage/SearchPage";
import YumlistPage from "./YumlistPage/YumlistPage";

// if (process.env.NODE_ENV === "development") {
//   require("mocks");
// }

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/foodswipe" element={<FoodSwipe />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="restaurant" element={<RestaurantListingPage />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="yumlist" element={<YumlistPage />} />
          <Route path="/dish/:id" element={<FoodDescriptionPage />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
