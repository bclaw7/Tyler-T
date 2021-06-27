import React, { Component } from "react";

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar sticky-top navbar-expand-sm navbar-light bg-primary bg-gradient">
				<div className="container-fluid">
					<a className="navbar-brand nav-name logo" href="/Header">Tyler T.
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
							<a className="nav-link active" aria-current="page" href="/Header">
								Home
							</a>
							<a class="nav-link" href="/Tour">
								Tour
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
