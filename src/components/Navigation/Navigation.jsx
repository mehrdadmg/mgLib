import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav-wrapper">
      <h1>NAV</h1>
      <div className="nav-wrapper">
        <Link to="/Clock" className="btn btn-outline-primary btn-block">
          Clock
        </Link>
        <Link to="/Counter" className="btn btn-outline-primary btn-block">
          Counter
        </Link>
        <Link to="/game2" className="btn btn-outline-primary btn-block">
          Primary2
        </Link>
        <Link to="/game3" className="btn btn-outline-primary btn-block">
          Primary3
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
