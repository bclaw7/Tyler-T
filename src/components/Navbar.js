import React, { Component } from "react";

class Navbar extends Component {
	render() {
		return (
			<nav class="navbar navbar-expand-sm navbar-light bg-primary bg-gradient">
				<div class="container-fluid">
					<a class="navbar-brand nav-name" href="/Header">
						Tyler T.
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div class="navbar-nav mx-auto nav-menu">
							<a class="nav-link active" aria-current="page" href="/Header">
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
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
