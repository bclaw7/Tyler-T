import React, { Component } from "react";
import tree from '../tree.jpg'

export class Home extends Component {
	render() {
		return (
			<div id="home" style={{ backgroundImage: `url(${tree})`, backgroundSize: 'cover' }}>
                <img src='../img/logo.png' alt="logo" className="mt-5 mb-5 img-fluid"/> 
                </div>
		);
	}
}

export default Home;
