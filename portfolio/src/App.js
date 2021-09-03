import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Router>
      <div>
        
        <Wrapper>
        <Navbar />
          <Route exact path="/react-portfolio/" component={Welcome} />
          <Route exact path="/" component={Welcome} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
