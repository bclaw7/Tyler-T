import React, { Component } from "react";
import Fade from "react-reveal";

export class Home extends Component {
	render() {
		return (
			<div>
				<Fade left duration={5000}>
					<img
						src="../img/mixed-media-logo.png"
						className="logo"
						alt="Tyler T"
					/>
				</Fade>
				<Fade top duration={1000}>
					<img
						src="../img/mixed-media-tree.jpg"
						className="img-fluid tree"
						alt="Tree of Life"
					/>
				</Fade>
			</div>
		);
	}
}

export default Home;
