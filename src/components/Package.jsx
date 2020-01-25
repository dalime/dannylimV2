import React, { Component } from "react";
import compose from "recompose/compose";
import withWidth from "@material-ui/core/withWidth";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TrackVisibility from "react-on-screen";
import { goToAnchor } from "react-scrollable-anchor";

import MeetingImg from "../images/Meeting.jpg";
import UIPrototypeImg from "../images/UIPrototype.jpg";
import CodingImg from "../images/Coding.jpg";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: "left",
    flexGrow: 1
  }
});

const PackageComponent = ({ isVisible, classes, width }) => {
  const renderPart = (
    title,
    description,
    imgSrc,
    imgAlt,
    action,
    actionText
  ) => {
    return (
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={imgAlt}
              height="auto"
              width="100%"
              image={imgSrc}
              title={imgAlt}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" className="btn-link" onClick={action}>
              {actionText}
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  };

  return (
    <div
      style={{ position: "relative" }}
      className={isVisible ? "sectionView" : "section"}
    >
      <div className={classes.root} id="packageRoot">
        <Typography
          gutterBottom
          variant="headline"
          component="h2"
          style={{
            textAlign: "center",
            fontFamily: "Open Sans, sans-serif",
            fontSize: width === "xs" || width === "sm" ? 30 : 50
          }}
        >
          My Service Package
        </Typography>
        <Typography component="br" />

        <Grid container spacing={24}>
          {renderPart(
            "1. Strategy Call",
            "We will have a remote meeting where we discuss the strategy of your website or web app, including target audience, functionality, design specifics, and timeline.",
            MeetingImg,
            "Client meeting",
            () => goToAnchor("connect"),
            "Get Started"
          )}
          {renderPart(
            "2. Prototype",
            "I will design and share a prototype of your web app or website based on your requirements. Any feedback you give would iterate a new prototype until we agree upon the final design.",
            UIPrototypeImg,
            "UI Prototype mockups",
            () => goToAnchor("skills"),
            "Learn More"
          )}
          {renderPart(
            "3. Delivery",
            "I will deliver your web app or website just like the final Prototype with required functionality and design. Adjustments can be made with discussion.",
            CodingImg,
            "Code editor open",
            () => goToAnchor("reviews"),
            "See Reviews"
          )}
        </Grid>
      </div>
    </div>
  );
};

class Package extends Component {
  render() {
    let { classes, width } = this.props;

    return (
      <TrackVisibility offset={width === "xs" || width === "sm" ? 2200 : 1000}>
        {({ isVisible }) => (
          <PackageComponent
            classes={classes}
            isVisible={isVisible}
            width={width}
          />
        )}
      </TrackVisibility>
    );
  }
}

Package.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles), withWidth())(Package);
