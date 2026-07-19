import React from "react";
import Footer from './components/Footer';
import Highlights from './components/Highlights';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css";
import Home from "./pages/Home";
import Books from "./pages/Books";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home}/>
       <Route path="/books" component={Books} />
      
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
