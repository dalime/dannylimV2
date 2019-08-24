import React, { Component, Fragment } from "react";
import Sections from "./Sections";
import NavBar from "./NavBar";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Sections />
      </Fragment>
    );
  }
}

export default Layout;
