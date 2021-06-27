import React, { Component } from "react";

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar sticky-top navbar-expand-sm navbar-light bg-primary bg-gradient">
				<div className="container-fluid">
					<a className="navbar-brand nav-name" href="#home">
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
							<a class="nav-link" href="#tour">
								Tour
							</a>
							<a class="nav-link" href="/Videos">
								Videos
							</a>
							<a class="nav-link" href="/Photos">
								Photos
							</a>
							<a class="nav-link" href="/Merch">
								Merch
							</a>
							<a class="nav-link" href="/About">
								About
							</a>
							<a class="nav-link" href="/Contact">
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
