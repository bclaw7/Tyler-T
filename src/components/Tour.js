import React, { Component } from "react";
import { Fade } from "react-reveal";

export class Tour extends Component {
	render() {
		return (
			<div>
                <Fade bottom duration={1000}>
				<img
					src="../img/mixed-media-beach.jpg"
					className="img-fluid beach"
					alt="Beach"
				/>
                </Fade>
			</div>
		);
	}
}

export default Tour;
