import React, { Component } from "react";
import withWidth from "@material-ui/core/withWidth";
import CoverImg from "../images/Cover.jpg";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

class Splash extends Component {
  render() {
    let { width } = this.props;

    return (
      <div className="splashContainer">
        <img
          src={CoverImg}
          alt="Modern Desk"
          className={
            width === "xs" || width === "sm" ? "splashLogoSm" : "splashLogo"
          }
        />
        <h1
          className={
            width === "xs" || width === "sm" ? "splashTextSm" : "splashText"
          }
          style={styles}
        >
          {" "}
          Your Digital Presence Matters.
        </h1>
      </div>
    );
  }
}

export default withWidth()(Splash);
