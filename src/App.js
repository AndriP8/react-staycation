import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
      </Router>
    </div>
  );
}

export default App;
