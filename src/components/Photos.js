import React, { Component } from "react";

export class Photos extends Component {
	render() {
		return (
			<div className="carousel slide carousel-fade" data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="/img/tyert-sepia.jpg"
							className="d-block w-100"
							alt="live at Arizona Haunted Hotel"
						/>
					</div>
					<div className="carousel-item">
						<img
							src="/img/tylert-radio.jpg"
							className="d-block w-100"
							alt="on air"
						/>
					</div>
					<div className="carousel-item">
						<img
							src="/img/tylert-backyard.jpg"
							className="d-block w-100"
							alt="live at Kinney Farm"
						/>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleFade"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		);
	}
}

export default Photos;
