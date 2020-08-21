import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Clock from "../Clock/Clock";
import Counter from "../Counter/Counter";

import Game2 from "../Game2/game2";
import Game3 from "../Game3/game3";

import "./MainContent.scss";

let MainContent = () => {
  return (
    <div className="main-content">
      <Route path="/Clock/" component={Clock} />
      <Route path="/Counter/" component={Counter} />
      <Route path="/game2/" component={Game2} />
      <Route path="/game3/" component={Game3} />
    </div>
  );
};

export default MainContent;
