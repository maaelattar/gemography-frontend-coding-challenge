import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./screens";

function App() {
  return (
    <div className="md:container">
      <Route path="/">
        <Home />
      </Route>
    </div>
  );
}

export default App;
