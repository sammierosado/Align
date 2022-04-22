import React from "react";
// import {BounceLoader} from 'react-spinners' // bounder loader is not being used. What is it's intention?
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
