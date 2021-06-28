import React, { Component } from "react";
import beach from '../beach.jpg'

export class Tour extends Component {
	render() {
		return (
			<div id="tour" style={{ backgroundImage: `url(${beach})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
			</div>
		);
	}
}

export default Tour;
