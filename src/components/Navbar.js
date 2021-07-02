import React, { Component } from "react";

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar sticky-top navbar-expand-sm navbar-light bg-primary bg-gradient px-sm-2">
				<div className="container-fluid">
					<a className="navbar-brand nav-name" href="/">
						Tyler T.
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav mx-auto nav-menu">
							<a className="nav-link" href="#tour">
								Tour
							</a>
							<a className="nav-link" href="#productList">
								Merch
							</a>
							<a className="nav-link" href="#music">
								Music
							</a>
							<a className="nav-link" href="#photos">
								Photos
							</a>
							<a className="nav-link" href="#videos">
								Videos
							</a>
							<a className="nav-link" href="#about">
								About
							</a>
							<a className="nav-link" href="#contact">
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
