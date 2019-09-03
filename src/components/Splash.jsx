import React, { Component } from "react";
import withWidth from "@material-ui/core/withWidth";

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
          src="https://i.imgur.com/D5WMo8R.jpg"
          alt="Danny at the Grand Canyon"
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
          Danny Lim - Web Developer & Designer {" "}
        </h1>
      </div>
    );
  }
}

export default withWidth()(Splash);
