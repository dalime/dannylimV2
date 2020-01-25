import React, { Component } from "react";
import withWidth from "@material-ui/core/withWidth";
import Typography from "@material-ui/core/Typography";
import TrackVisibility from "react-on-screen";

const styles = {
  textAlign: "left",
  paddingBottom: "1%"
};

const ProblemDefinitionComponent = ({ isVisible, width }) => {
  return (
    <div style={styles} className={isVisible ? "sectionView" : "section"}>
      {width === "xs" || width === "sm" ? (
        <>
          <Typography
            gutterBottom
            variant="headline"
            component="h2"
            style={{
              textAlign: "center",
              fontFamily: "Open Sans, sans-serif",
              fontSize: 30
            }}
          >
            Need a Website or Web App?
          </Typography>
          <Typography
            gutterBottom
            variant="h4"
            component="h4"
            style={{
              textAlign: "center",
              fontFamily: "Open Sans, sans-serif",
              fontSize: 25
            }}
          >
            Here is your one-stop shop.
          </Typography>
        </>
      ) : (
        <>
          <Typography
            gutterBottom
            variant="headline"
            component="h2"
            style={{
              textAlign: "center",
              fontFamily: "Open Sans, sans-serif",
              fontSize: 50
            }}
          >
            Need a Website or Web App?
          </Typography>
          <Typography
            gutterBottom
            variant="h4"
            component="h4"
            style={{
              textAlign: "center",
              fontFamily: "Open Sans, sans-serif",
              fontSize: 10
            }}
          >
            Here is your one-stop shop.
          </Typography>
        </>
      )}
    </div>
  );
};

class ProblemDefinition extends Component {
  render() {
    let { width } = this.props;

    return (
      <TrackVisibility offset={500}>
        {({ isVisible }) => (
          <ProblemDefinitionComponent isVisible={isVisible} width={width} />
        )}
      </TrackVisibility>
    );
  }
}

export default withWidth()(ProblemDefinition);
