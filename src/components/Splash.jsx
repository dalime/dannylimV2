import React, { Component } from 'react';
import withWidth from '@material-ui/core/withWidth';
// import { Parallax } from 'react-parallax';

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
        // <Parallax bgImage={"https://i.imgur.com/D5WMo8R.jpg"} strength={-75}>
        //     <div style={{ height: width === 'xs' || width === 'sm' ? 200 : 600 }}>
        //         <h1 className={width === 'xs' || width === 'sm' ? "splashTextSm" : "splashText"} style={styles}>  Hi, I'm Danny  </h1>
        //     </div>
        // </Parallax>
        <div className="splashContainer">
            <img src="https://i.imgur.com/D5WMo8R.jpg" alt="" className={width === 'xs' || width === 'sm' ? "splashLogoSm" : "splashLogo"} />
            <h1 className={width === 'xs' || width === 'sm' ? "splashTextSm" : "splashText"} style={styles}> Hi, I'm Danny </h1>
        </div>
    )
  }
}

export default withWidth()(Splash);