import React from "react";
import Featured from './components/Featured'
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
        <Featured/>
      </div>
    </Router>
  );
}

export default App;
