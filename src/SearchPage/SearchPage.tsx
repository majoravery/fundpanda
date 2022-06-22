import { useGetRecommendations } from "api/recommendations";
import React from "react";
import "./SearchPage.css";

function SearchPage() {
  const { data } = useGetRecommendations({
    cid: "sg109sdu",
    city: "singapore",
  });

  return (
    <div className="SearchPage">
      <h1>SearchPage</h1>
      {JSON.stringify(data)}
    </div>
  );
}

export default SearchPage;
