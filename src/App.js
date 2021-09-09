import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Checkout from "./pages/CheckoutPage";
import DetailsPage from "./pages/DetailsPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/properties/:id" component={DetailsPage} />
        <Route exact path="/checkout" component={Checkout} />
      </Router>
    </div>
  );
}

export default App;
