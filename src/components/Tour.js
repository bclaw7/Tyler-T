import React, { Component } from "react";
import beachflip from "../beach-down.jpg";
import Title from "./Title";

export class Tour extends Component {
	render() {
		return (
			<div
				id="tour"
				style={{ backgroundImage: `url(${beachflip})`, backgroundSize: "cover" }}
			>
                <Title name="tour" title="dates" />
				{/* <h1 className="display-3 pt-5 pb-5 text-center fw-bold text-warning tour">
					Tour
					<strong className="text-info">Dates</strong>
				</h1> */}
			</div>
		);
	}
}

export default Tour;
