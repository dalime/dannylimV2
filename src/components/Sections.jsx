import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import Splash from "./Splash";
import ProblemDefinition from "./ProblemDefinition";
import Package from "./Package";
import About from "./About";
import Experience from "./Experience";
import Reviews from "./Reviews";
import Clients from "./Clients";
import Skills from "./Skills";
import Projects from "./Projects";
import Connect from "./Connect";
import Footer from "./Footer";

import ScrollableAnchor from "react-scrollable-anchor";

const styles = {
	breakWhite: {
		height: "4%",
		width: "100%",
		backgroundColor: "white"
	}
};

class Sections extends Component {
	render() {
		return (
			<div style={{ textAlign: "center", justifyContent: "space-evenly" }}>
				<Splash />
				<ScrollableAnchor id={"problem"}>
					<div style={styles.sectionBreak} />
				</ScrollableAnchor>
				<ProblemDefinition />
				<Divider />
				<ScrollableAnchor id={"package"}>
					<div style={styles.sectionBreak} />
				</ScrollableAnchor>
				<Package />
				<Divider />
				<ScrollableAnchor id={"projects"}>
					<div style={styles.sectionBreak} />
				</ScrollableAnchor>
				<Projects />
				<Divider />
				<ScrollableAnchor id={"reviews"}>
					<div style={styles.sectionBreak} />
				</ScrollableAnchor>
				<Reviews />
				<Divider />
				<ScrollableAnchor id={"clients"}>
					<div style={styles.sectionBreak} />
				</ScrollableAnchor>
				<Clients />
				<Divider />
				<ScrollableAnchor id={"skills"}>
					<div style={styles.sectionBreak} />
				</ScrollableAnchor>
				<Skills />
				<Divider />
				<ScrollableAnchor id={"connect"}>
					{/* Remove links to PPH and Upwork links */}
					<div style={styles.sectionBreak} />
				</ScrollableAnchor>
				<Connect />
				<Divider />
				<ScrollableAnchor id={"experience"}>
					<div style={styles.sectionBreak} />
				</ScrollableAnchor>
				<Experience />
				<Divider />
				<ScrollableAnchor id={"about"}>
					<div style={styles.sectionBreak} />
				</ScrollableAnchor>
				<About />
				<Divider />
				<div style={styles.sectionBreak} />
				<Footer />
			</div>
		);
	}
}

export default Sections;
