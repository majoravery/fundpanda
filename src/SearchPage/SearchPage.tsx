import { useGetPinder } from "api/pinder";
import React from "react";
import "./SearchPage.css";

function SearchPage() {
  const { data } = useGetPinder({ customerCode: "1234", city: "Singapore" });

  return (
    <div className="SearchPage">
      <h1>SearchPage</h1>
      {JSON.stringify(data)}
    </div>
  );
}

export default SearchPage;
