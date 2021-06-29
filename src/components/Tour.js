import React, { Component } from "react";
import beach from "../beach.jpg";

export class Tour extends Component {
	render() {
		return (
			<div
				id="tour"
				style={{ backgroundImage: `url(${beach})`, backgroundSize: "cover" }}
			>
				<h1 className="display-3 pt-5 pb-5 text-center fw-bold text-warning tour">
					Tour
					<strong className="text-info">Dates</strong>
				</h1>
			</div>
		);
	}
}

export default Tour;
