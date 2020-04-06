import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import "bulma/css/bulma.css";
import Home from "./Home";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  return (
    <Router>
      <QueryParamsComp />
    </Router>
  );
}

export default App;

function QueryParamsComp() {
  let query = useQuery();

  return <Home q={query.get("q")} />;
}
