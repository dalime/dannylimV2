import React, { Component } from "react";
import compose from "recompose/compose";
import withWidth from "@material-ui/core/withWidth";
import { withStyles } from "@material-ui/core/styles";
import TrackVisibility from "react-on-screen";
import Typography from "@material-ui/core/Typography";
import "react-alice-carousel/lib/alice-carousel.css";

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
	},
	bottomMargin: {
		marginBottom: "10px"
	}
});

const notableClients = [
	{
		name: 'Counterweight',
		url: 'https://counterweight.org/',
		width: 150,
		imgSrc: 'https://counterweight.org/assets/img/logo-colour.svg',
		whiteText: false,
	},
	{
		name: 'ListenField',
		url: 'https://www.listenfield.com/',
		width: 150,
		imgSrc: 'https://s3-ap-northeast-1.amazonaws.com/assets-listenfield/images/logo.svg',
		whiteText: true,
	},
	{
		name: 'Venustars',
		url: 'https://venustarsmall.com',
		width: 150,
		imgSrc: 'https://venustarsmall.com/skin/frontend/smartwave/porto/images/logo01.png',
		whiteText: false,
	},
	{
		name: 'JST.B',
		url: 'https://jstbyoo.com',
		width: 150,
		imgSrc: 'https://static1.squarespace.com/static/52a0f930e4b07ac79d0158fe/t/5bdc5af2352f53656b8cb07a/1570738695895/?format=1500w',
		whiteText: false,
	},
	{
		name: 'Petchpacker',
		url: 'https://petchpacker.com/',
		width: 150,
		imgSrc: 'https://i1.wp.com/petchpacker.com/wp-content/uploads/petchpacker.png?w=1800&ssl=1',
		whiteText: false,
	}
];

class ClientsComponent extends Component {
	render() {
		const { isVisible, width } = this.props;

		return (
			<div
				style={styles.root}
				className={isVisible ? "sectionView" : "section"}
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
					Notable Clients
        </Typography>
				<div className="notable-client-container">
					{notableClients.map((client, index) => {
						return (
							<a href={client.url} rel="noopener noreferrer" target="_blank" alt={`${client.name} website`} key={index} className="notable-client-link">
								<Typography
									gutterBottom
									variant="inherit"
									className="notable-client-name"
									style={styles.bottomMargin}
								>
									{client.name}
								</Typography>
								<img src={client.imgSrc} alt={`${client.name} logo`} className="notable-client-img" style={{ backgroundColor: client.whiteText ? '#000000' : 'none' }} />
							</a>
						)
					})}
				</div>
			</div>
		);
	}
}

class Clients extends Component {
	render() {
		let { width } = this.props;

		return (
			<TrackVisibility offset={width === "xs" || width === "sm" ? 400 : 200}>
				{({ isVisible }) => (
					<ClientsComponent isVisible={isVisible} width={width} />
				)}
			</TrackVisibility>
		);
	}
}

export default compose(
	withStyles(styles),
	withWidth()
)(Clients);
