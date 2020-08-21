import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import MainContent from "./components/MainContent/MainContent";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="main-wrapper">
            <Navigation />
            <MainContent />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
