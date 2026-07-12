import React from "react";
import Highlights from './components/Highlights';
import Landing from "./components/Landing";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Landing />
        <Highlights />
      </div>
    </Router>
  );
}

export default App;
