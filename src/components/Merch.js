import React, { Component } from "react";
import beach2 from "../beach-down.jpg";

export class Merch extends Component {
	render() {
		return (
			<div
				id="merch"
				style={{ backgroundImage: `url(${beach2})`, backgroundSize: "cover" }}
			>
				<h1 className="display-3 pt-5 pb-5 text-center fw-bold text-warning tour">
					Merch
				</h1>
			</div>
		);
	}
}

export default Merch;
