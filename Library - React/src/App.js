import React from "react";
import Discounted from './components/ui/Discounted';
import Explore from './components/Explore';
import Footer from './components/Footer';
import Featured from './components/Featured';
import Highlights from './components/Highlights';
import Landing from "./components/Landing";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css";
import Home from "./pages/Home";
import Books from "./pages/Books";

function App() {
  return (
    <Router>
      <div className="App">
        <Route/>
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/books" component={Books}/>
      <Home/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
