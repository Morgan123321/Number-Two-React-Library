import React from "react";
import Discounted from './components/ui/Discounted';
import Explore from './components/Explore';
import Footer from './components/Footer';
import Featured from './components/Featured';
import Highlights from './components/Highlights';
import Landing from "./components/Landing";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Route/>
        <Nav />
      <Home/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
