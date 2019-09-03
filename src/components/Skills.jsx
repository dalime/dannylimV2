import React, { Component } from "react";
import compose from "recompose/compose";
import withWidth from "@material-ui/core/withWidth";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import TrackVisibility from "react-on-screen";

import {
  SketchLogo,
  InvisionLogo,
  ReactLogo,
  ReactNativeLogo,
  ReduxLogo,
  JavaScriptLogo,
  BootstrapLogo,
  MaterialUILogo,
  CSSLogo,
  HTMLLogo,
  NodeLogo,
  ExpressLogo,
  JavaLogo,
  GraphQLLogo,
  SQLLogo,
  MongoLogo,
  WordPressLogo,
  SquarespaceLogo,
  GitLogo,
  SVNLogo
} from "./SkillsLogos";

const styles = theme => ({
  skillLogo: {
    width: "50%",
    color: "black",
    textAlign: "left"
  }
});

const SkillsComponent = ({ isVisible, renderSection, renderSkill, width }) => {
  return (
    <div
      className={isVisible ? "sectionView" : "section"}
      style={{ paddingLeft: "5%", flexGrow: 1 }}
    >
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
        My Skills
      </Typography>
      <Grid container item xs={12} spacing={16}>
        {renderSection("UI Design")}
        {renderSkill("Sketch", "https://www.sketchapp.com/", SketchLogo)}
        {renderSkill("Invision", "https://www.invisionapp.com/", InvisionLogo)}
      </Grid>

      <Grid container item xs={12} spacing={16}>
        {renderSection("UI Development")}
        {renderSkill("React", "https://facebook.github.io/react/", ReactLogo)}
        {renderSkill(
          "React Native",
          "https://facebook.github.io/react-native/",
          ReactNativeLogo
        )}
        {renderSkill("Redux", "https://redux.js.org/", ReduxLogo)}
        {renderSkill(
          "JavaScript",
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          JavaScriptLogo
        )}
        {renderSkill("Bootstrap", "https://getbootstrap.com/", BootstrapLogo)}
        {renderSkill("Material UI", "https://material-ui.com/", MaterialUILogo)}
        {renderSkill(
          "CSS",
          "https://www.w3schools.com/css/css_intro.asp",
          CSSLogo
        )}
        {renderSkill(
          "HTML",
          "https://www.w3schools.com/html/html_intro.asp",
          HTMLLogo
        )}
      </Grid>

      <Grid container item xs={12} spacing={16}>
        {renderSection("Backend / API Development")}
        {renderSkill("Node.js", "https://nodejs.org/en/", NodeLogo)}
        {renderSkill("Express", "https://expressjs.com/", ExpressLogo)}
        {renderSkill("Java", "https://www.java.com/en/", JavaLogo)}
        {renderSkill("GraphQL", "https://graphql.org/", GraphQLLogo)}
      </Grid>

      <Grid container item xs={12} spacing={16}>
        {renderSection("Database Management")}
        {renderSkill("SQL", "https://www.mysql.com/", SQLLogo)}
        {renderSkill("MongoDB", "https://www.mongodb.com/", MongoLogo)}
      </Grid>

      <Grid container item xs={12} spacing={16}>
        {renderSection("Website Builders")}
        {renderSkill("WordPress", "https://wordpress.org/", WordPressLogo)}
        {renderSkill(
          "Squarespace",
          "https://www.squarespace.com/",
          SquarespaceLogo
        )}
      </Grid>

      <Grid container item xs={12} spacing={16}>
        {renderSection("Source Control")}
        {renderSkill("Git", "https://git-scm.com/", GitLogo)}
        {renderSkill("Tortoise SVN", "https://tortoisesvn.net/", SVNLogo)}
      </Grid>
    </div>
  );
};

class Skills extends Component {
  constructor() {
    super();

    this._renderSection = this._renderSection.bind(this);
    this._renderSkill = this._renderSkill.bind(this);
  }

  _renderSection(name) {
    return (
      <Grid item xs={12}>
        <Typography component="br" />
        <Typography
          variant="inherit"
          style={{ fontSize: 20, fontWeight: "bold", textAlign: "left" }}
        >
          {name}
        </Typography>
        <Divider />
      </Grid>
    );
  }

  _renderSkill(name, link, logo) {
    let { classes, width } = this.props;

    return (
      <Grid item xs={width === "xs" || width === "sm" ? 6 : 3} container>
        <Grid item xs>
          <a
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            className="skillLink"
          >
            <h4 className={classes.skillLogo}>{name}</h4>
          </a>
          <div style={{ textAlign: "center", justifyContent: "center" }}>
            <Avatar
              className="skillLogo"
              src={logo}
              style={{ alignSelf: "center", justifyContent: "center" }}
            />
          </div>
        </Grid>
      </Grid>
    );
  }

  render() {
    let { width } = this.props;

    return (
      <TrackVisibility offset={width === "xs" || width === "sm" ? 1500 : 1000}>
        {({ isVisible }) => (
          <SkillsComponent
            isVisible={isVisible}
            renderSection={this._renderSection}
            renderSkill={this._renderSkill}
            width={width}
          />
        )}
      </TrackVisibility>
    );
  }
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  withWidth()
)(Skills);
