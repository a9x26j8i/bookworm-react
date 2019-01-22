import React from "react";
import { Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

export default () => (
  <div className="ui container">
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
  </div>
);
