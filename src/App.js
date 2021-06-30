import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Tour from "./components/Tour";
import MerchList from "./components/MerchList";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
                <Home />
                <Tour />
				<Switch>
					<Route path="/merchlist" component={MerchList} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default App;
