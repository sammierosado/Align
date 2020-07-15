import React from "react";
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
