import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/properties/:id" component={DetailsPage} />
      </Router>
    </div>
  );
}

export default App;
