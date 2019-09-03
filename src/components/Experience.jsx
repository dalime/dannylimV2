import React, { Component, Fragment } from "react";
import compose from "recompose/compose";
import withWidth from "@material-ui/core/withWidth";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TrackVisibility from "react-on-screen";
import { goToAnchor } from "react-scrollable-anchor";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: "left",
    flexGrow: 1
  }
});

const ExperienceComponent = ({
  isVisible,
  classes,
  renderExperience,
  width
}) => {
  return (
    <div
      style={{ position: "relative" }}
      className={isVisible ? "sectionView" : "section"}
    >
      <div className={classes.root} id="experienceRoot">
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
          My Experiences
        </Typography>
        <Typography component="br" />

        {renderExperience(
          "https://i.imgur.com/9wV1vh8.jpg",
          false,
          "Freelance & Entrepreneurship",
          "Frontend Developer & Owner (May 2018 - Current)",
          `I am currently pursuing some startup ideas while taking on freelance clients, 
          which help to expand my skills and allow me to serve the world with my skillset.
          If you would like me to work on your projects, please feel free to reach out via the "Connect" page on this website.`
        )}

        {renderExperience(
          "https://i.imgur.com/zgi7C3A.png",
          "https://www.boozallen.com/",
          "Booz Allen Hamilton",
          "Software Developer (November 2016 - May 2018)",
          `Booz Allen Hamilton is the largest government contracting firm in the Washington, DC area.
          I contributed to R&D projects as part of their Strategic Innovation Group, as well as worked in systems delivery.
          Constanly learning new technologies as part of my job, I was part of a Big Data team that created a search engine using the Hadoop ecosystem. Later, I led a Content Management System team as the lead Frontend Developer.
          It was an exciting time for me to provide tech solutions for the government.`
        )}

        {renderExperience(
          "https://i.imgur.com/1GAgpjG.png",
          "https://freecodecamp.com",
          "Free Code Camp",
          "Fullstack Web Development (May 2016 - Current)",
          `After my internship with a2z, I decided to dedicate more time to better my development skillset.
          I found Free Code Camp, which was the perfect solution for me.
          Since then, JavaScript has been my choice language and I've been developing particularly with React.js.`
        )}

        {renderExperience(
          "https://i.imgur.com/SprmAln.png?1",
          "https://www.a2zinc.net/show6/public/enter.aspx",
          "a2z, Inc.",
          "Software Development Intern (September 2015 - May 2016)",
          `a2z offers robust software solutions for trade show management.
          As an intern on their tech team, I had the pleasure of being a part of the day-to-day development of said software solutions.
          I helped customize new client sites, developed new in-house apps for PMs, and resolved some errors in their base product.
          a2z was definitely a fantastic team to expose me to working in development.`
        )}

        {renderExperience(
          "https://i.imgur.com/Fn7p3Gp.jpg",
          "https://www2.deloitte.com/us/en.html",
          "Deloitte",
          "Advisory Consultant (September 2014 - September 2015)",
          `Deloitte Advisory offers enterprise risk solutions to clients nationwide.
          The pairing of my two majors led straight to this position, particularly in Technology Risk.
          Using my systems background, I served clients by auditing their information systems and business processes.`
        )}

        {renderExperience(
          "https://i.imgur.com/ErkLYCZ.png",
          "https://www.rhsmith.umd.edu/",
          "Robert H. Smith School of Business (University of Maryland)",
          "Bachelor of Science in Information Systems and Accounting (August 2010 - May 2014)",
          `From 2010 to 2014, I spent the first defining years of adulthood at UMD.
          Always having an interest in business, I was a direct admit to the Robert H. Smith School of Business as a freshman.
          Interested in how companies manage data, I chose Information Systems as my primary major within the school.
          It was then that I was first exposed to programming, particularly in Visual Basic and SQL.`
        )}
      </div>
    </div>
  );
};

class Experience extends Component {
  constructor(props) {
    super(props);

    this._renderExperience = this._renderExperience.bind(this);
  }

  _renderExperience(imgUrl, url, company, position, description) {
    let { width } = this.props;

    if (width === "xs" || width === "sm") {
      return (
        <Fragment>
          <Grid container spacing={24}>
            <Grid item xs={6} style={{ textAlign: "right" }}>
              <Avatar
                className="avatar"
                src={imgUrl}
                onClick={
                  url
                    ? () => window.open(url)
                    : () => goToAnchor("connect", false)
                }
                style={{ margin: 10, width: 120, height: 120 }}
              />
            </Grid>
            <Grid
              item
              xs={6}
              style={{ borderLeft: "1px solid black", textAlign: "left" }}
            >
              <Typography
                gutterBottom
                variant="inherit"
                className="companyTitle"
                onClick={
                  url
                    ? () => window.open(url)
                    : () => goToAnchor("connect", false)
                }
              >
                {company}
              </Typography>
              <Typography
                gutterBottom
                style={{ fontSize: 14, fontStyle: "italic" }}
              >
                {position}
              </Typography>
            </Grid>
            <Grid item xs={12} sm container style={{ textAlign: "center" }}>
              <Typography variant="body1">{description}</Typography>
            </Grid>
          </Grid>
          <Typography component="br" />
        </Fragment>
      );
    }

    return (
      <Fragment>
        <Grid container spacing={24}>
          <Grid item xs={2} />
          <Grid item xs={2} style={{ textAlign: "center" }}>
            <Avatar
              className="avatar"
              src={imgUrl}
              onClick={
                url
                  ? () => window.open(url)
                  : () => goToAnchor("connect", false)
              }
              style={{ margin: 10, width: 120, height: 120 }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm
            container
            style={{ borderLeft: "1px solid black" }}
          >
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="inherit"
                  className="companyTitle"
                  onClick={
                    url
                      ? () => window.open(url)
                      : () => goToAnchor("connect", false)
                  }
                >
                  {company}
                </Typography>
                <Typography
                  gutterBottom
                  style={{ fontSize: 14, fontStyle: "italic" }}
                >
                  {position}
                </Typography>
                <Typography variant="body1">{description}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Typography component="br" />
      </Fragment>
    );
  }

  render() {
    let { classes, width } = this.props;

    return (
      <TrackVisibility offset={width === "xs" || width === "sm" ? 2200 : 1000}>
        {({ isVisible }) => (
          <ExperienceComponent
            classes={classes}
            renderExperience={this._renderExperience}
            isVisible={isVisible}
            width={width}
          />
        )}
      </TrackVisibility>
    );
  }
}

Experience.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  withWidth()
)(Experience);
