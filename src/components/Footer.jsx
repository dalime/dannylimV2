import React from "react";
import compose from "recompose/compose";
import Grid from "@material-ui/core/Grid";
import withWidth from "@material-ui/core/withWidth";
import {
	createMuiTheme,
	withStyles,
	MuiThemeProvider
	// makeStyles,
	// ThemeProvider
} from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
// import { green } from "@material-ui/core/colors";
import { goToAnchor } from "react-scrollable-anchor";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#00e676"
		},
		secondary: {
			light: "#0066ff",
			main: "#0044ff",
			contrastText: "#ffcc00"
		},
		contrastThreshold: 3,
		tonalOffset: 0.2
	}
});

// const useStyles = makeStyles(theme => ({
//   margin: {
//     margin: theme.spacing(1)
//   }
// }));

// const theme = createMuiTheme({
//   palette: {
//     primary: green
//   }
// });

function Footer(props) {
	const { width } = props;
	// const classes = useStyles();

	return (
		<div style={{ marginTop: "10vh" }}>
			<MuiThemeProvider theme={theme}>
				<Button
					variant="contained"
					style={{ backgroundColor: "white", color: "black" }}
					onClick={() => goToAnchor("connect")}
				>
					Work With Danny
				</Button>
			</MuiThemeProvider>
			<div style={{ marginTop: "10vh" }} />
			<Grid container spacing={24}>
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
		</div>
	);
}

export default compose(withStyles({}), withWidth())(Footer);
