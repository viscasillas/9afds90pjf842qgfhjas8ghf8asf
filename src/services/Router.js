import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../views/Home";
import Create from "../views/Create";
import Room from "../views/Room";
// import Editor from "../views/Editor";
export default ({ children }) => (
  <Router basename={""}>
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/create" component={Create} />
      {/* <Route path="/room/:id" component={Room} /> */}
      {/* <Route path="/editor/:id" component={Editor} /> */}
    </Fragment>
  </Router>
);
