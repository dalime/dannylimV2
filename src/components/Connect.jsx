import React, { Component, PureComponent, Fragment } from "react";
import compose from "recompose/compose";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import green from "@material-ui/core/colors/green";
import TrackVisibility from "react-on-screen";

import { UpworkBacklink } from "./PlatformBacklinks";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "75%"
  },
  textMessage: {
    width: "100%"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: "relative"
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  },
  hireMeObj: {
    paddingLeft: "5%",
    paddingRight: "5%"
  }
});

const theme = createMuiTheme({
  palette: {
    primary: green
  },
  typography: { useNextVariants: true }
});

class ConnectComponent extends PureComponent {
  render() {
    const {
      classes,
      name,
      phoneNumber,
      emailAddress,
      subject,
      message,
      error,
      errorMessage,
      success,
      successMessage,
      loading,
      buttonClassname,
      handleChange,
      submit,
      width
    } = this.props;
    return (
      <Grid container spacing={24}>
        {success ? (
          <Grid item xs={12}>
            <Typography
              gutterBottom
              variant="subheading"
              component="h3"
              style={{
                textAlign: "center",
                fontFamily: "Open Sans, sans-serif",
                fontSize: 25
              }}
            >
              {successMessage}
            </Typography>
          </Grid>
        ) : (
          <MuiThemeProvider theme={theme}>
            <Grid item xs={12}>
              <Typography className={classes.container} component="form">
                {width === "xs" || width === "sm" ? (
                  <div />
                ) : (
                  <Grid item xs={2} />
                )}
                <Grid item xs={width === "xs" || width === "sm" ? 12 : 4}>
                  <TextField
                    id="name"
                    label="Name"
                    className={classes.textField}
                    value={name}
                    data-statekey="name"
                    onChange={handleChange("name")}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={width === "xs" || width === "sm" ? 12 : 4}>
                  <TextField
                    id="phoneNumber"
                    label="Phone Number"
                    className={classes.textField}
                    value={phoneNumber}
                    data-statekey="phoneNumber"
                    onChange={handleChange("phoneNumber")}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                {width === "xs" || width === "sm" ? (
                  <div />
                ) : (
                  <Grid item xs={2} />
                )}
                {width === "xs" || width === "sm" ? (
                  <div />
                ) : (
                  <Grid item xs={2} />
                )}
                <Grid item xs={width === "xs" || width === "sm" ? 12 : 4}>
                  <TextField
                    id="emailAddress"
                    label="Email"
                    className={classes.textField}
                    value={emailAddress}
                    data-statekey="emailAddress"
                    onChange={handleChange("emailAddress")}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={width === "xs" || width === "sm" ? 12 : 4}>
                  <TextField
                    id="subject"
                    label="Subject"
                    className={classes.textField}
                    value={subject}
                    data-statekey="subject"
                    onChange={handleChange("subject")}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                {width === "xs" || width === "sm" ? (
                  <div />
                ) : (
                  <Grid item xs={2} />
                )}
                {width === "xs" || width === "sm" ? (
                  <div />
                ) : (
                  <Grid item xs={2} />
                )}
                <Grid item xs={width === "xs" || width === "sm" ? 12 : 6}>
                  <TextField
                    id="message"
                    label="Message"
                    multiline
                    variant="outlined"
                    rowsMax="5"
                    value={message}
                    onChange={handleChange("message")}
                    className={classes.textField}
                    margin="normal"
                    helperText="Please let me know the nature of your business."
                  />
                </Grid>
                <Grid
                  item
                  xs={width === "xs" || width === "sm" ? 12 : 2}
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    textAlign:
                      width === "xs" || width === "sm" ? "center" : "left",
                    alignItems:
                      width === "xs" || width === "sm" ? "center" : "left"
                  }}
                >
                  <Fragment>
                    <div className={classes.wrapper}>
                      <Button
                        variant="contained"
                        color="default"
                        className={buttonClassname}
                        disabled={loading}
                        onClick={submit}
                      >
                        Submit
                      </Button>
                      {loading && (
                        <CircularProgress
                          size={24}
                          className={classes.buttonProgress}
                        />
                      )}
                    </div>
                  </Fragment>
                </Grid>
                {width === "xs" || width === "sm" ? (
                  <div />
                ) : (
                  <Grid item xs={2} />
                )}
                {error ? (
                  <Grid item xs={12}>
                    <h3 style={{ color: "red", fontWeight: "bold" }}>
                      {errorMessage}
                    </h3>
                  </Grid>
                ) : (
                  <div />
                )}
              </Typography>
            </Grid>
          </MuiThemeProvider>
        )}
        <Grid item xs={12}>
          <Typography component="br" />
        </Grid>
        <Grid item xs={3}>
          <a
            href="https://dannylim.co/DannyLim_Resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i
              className={`fa fa-5x fa-file ${
                width === "xs" || width === "sm" ? "connectBtnSm" : "connectBtn"
              }`}
              width="100%"
            ></i>
          </a>
        </Grid>
        <Grid item xs={3}>
          <a
            href="https://github.com/dalime"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i
              className={`fa fa-5x fa-github-square ${
                width === "xs" || width === "sm" ? "connectBtnSm" : "connectBtn"
              }`}
              width="100%"
            ></i>
          </a>
        </Grid>
        <Grid item xs={3}>
          <a
            href="https://www.linkedin.com/in/danny-lim-a4839230"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i
              className={`fa fa-5x fa-linkedin-square ${
                width === "xs" || width === "sm" ? "connectBtnSm" : "connectBtn"
              }`}
              width="100%"
            ></i>
          </a>
        </Grid>
        <Grid item xs={3}>
          <a
            href="https://www.behance.net/dalime/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i
              className={`fa fa-5x fa-behance-square ${
                width === "xs" || width === "sm" ? "connectBtnSm" : "connectBtn"
              }`}
              width="100%"
            ></i>
          </a>
        </Grid>
      </Grid>
    );
  }
}

class Connect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phoneNumber: "",
      emailAddress: "",
      subject: "",
      message: "",
      error: false,
      errorMessage: "",
      success: false,
      successMessage: ""
    };

    this._handleChange = this._handleChange.bind(this);
    this._submit = this._submit.bind(this);
  }

  _handleChange = name => e => {
    this.setState({ [name]: e.target.value });
  };

  _submit(e) {
    e.preventDefault();
    let { name, phoneNumber, emailAddress, subject, message } = this.state;

    if (
      !name.length ||
      !phoneNumber.length ||
      !emailAddress.length ||
      !subject.length ||
      !message.length
    )
      return this.setState({
        error: true,
        errorMessage: "Please fill out all fields."
      });

    this.setState({ loading: true });

    window.emailjs
      .send("mailgun", "dannylim", {
        sendName: name,
        sendEmail: emailAddress,
        sendSubject: subject,
        sendMessage: message,
        sendPhone: phoneNumber
      })
      .then(() => {
        this.setState({
          success: true,
          successMessage: "Thank You! I will get back to you shortly :)",
          loading: false
        });
      })
      .catch(() =>
        this.setState({
          error: true,
          errorMessage: "Sorry, email cannot be sent at this time.",
          loading: false
        })
      );
  }

  render() {
    const { classes, width } = this.props;
    let {
      name,
      phoneNumber,
      emailAddress,
      subject,
      message,
      error,
      errorMessage,
      success,
      successMessage,
      loading
    } = this.state;
    const buttonClassname = classNames({
      [classes.buttonSuccess]: success
    });

    return (
      <TrackVisibility offset={width === "xs" || width === "sm" ? 1000 : 500}>
        {({ isVisible }) => (
          <div className={isVisible ? "sectionView" : "section"}>
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
              Let's Work Together
            </Typography>
            <div id="hireme">
              <div id="pph-hireme" className={classes.hireMeObj} />
              {(function(d, s) {
                var useSSL = "https:" === document.location.protocol;
                var where = d.getElementsByTagName(s)[0],
                  js = d.createElement(s);
                js.src =
                  (useSSL ? "https:" : "http:") +
                  "//www.peopleperhour.com/hire/1048807493/2546541.js?width=300&height=135&orientation=vertical&theme=light&rnd=" +
                  parseInt(Math.random() * 10000, 10);
                try {
                  where.parentNode.insertBefore(js, where);
                } catch (e) {
                  if (
                    typeof console !== "undefined" &&
                    console.log &&
                    e.stack
                  ) {
                    console.log(e.stack);
                  }
                }
              })(document, "script")}
              <div id="upwork-hireme" className={classes.hireMeObj}>
                <img
                  src={UpworkBacklink}
                  style={{ width: 250 }}
                  alt="Screenshot of Danny's Upwork Profile handle"
                />
                <Button
                  variant="text"
                  color="default"
                  style={{
                    height: "35px",
                    marginTop: "10px",
                    marginBottom: "10px",
                    backgroundColor: "#6fda44",
                    color: "white",
                    textDecoration: "none",
                    width: "225px",
                    textTransform: "capitalize"
                  }}
                  onClick={() => {
                    window.open(process.env.REACT_APP_UPWORK_LINK, "_blank");
                  }}
                >
                  Hire Me on Upwork
                </Button>
              </div>
            </div>
            <ConnectComponent
              classes={classes}
              name={name}
              phoneNumber={phoneNumber}
              emailAddress={emailAddress}
              subject={subject}
              message={message}
              error={error}
              errorMessage={errorMessage}
              success={success}
              successMessage={successMessage}
              loading={loading}
              buttonClassname={buttonClassname}
              handleChange={this._handleChange}
              submit={this._submit}
              width={width}
            />
          </div>
        )}
      </TrackVisibility>
    );
  }
}

Connect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  withWidth()
)(Connect);
