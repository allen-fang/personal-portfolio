import React, { Component } from "react";
import Header from "./Header";
import Tabs from "./Tabs";
import Footer from './Footer'
import "./Home.css";


class Home extends Component {
	state = { page: 0 };
	componentDidMount() {
		window.scrollTo(0,0);
	}
	render() {
		return (
			<div className="home-wrapper">
				<Header />
				<Tabs />
				<Footer />
			</div>
		);
	}
}

export default Home;
