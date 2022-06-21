import "./App.css";

import { Route, Routes } from "react-router-dom";

import Demo from "./Demo/Demo";
import Homescreen from "./Homescreen/Homescreen";
import RestaurantListingPage from "./RestaurantListingPage/RestaurantListingPage";
import SearchPage from "./SearchPage/SearchPage";
import { QueryClient, QueryClientProvider } from "react-query";

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
          <Route path="search" element={<SearchPage />} />
          <Route path="restaurant" element={<RestaurantListingPage />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
