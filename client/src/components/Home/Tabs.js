import React, { Component } from "react";
import "./Tabs.css";
import { StickyContainer, Sticky } from "react-sticky";
import scrollToComponent from "react-scroll-to-component";

import Projects from "../Tabs/Projects";
import Contact from "../Tabs/Contact";

class Tabs extends Component {
	state = { activeTab: 1 };
	changeTab = tab => {
		this.setState({ activeTab: tab });
	};
	renderTab = () => {
		switch (this.state.activeTab) {
			case 1:
				return <Projects />;
			case 2:
				return <Contact />;
			default:
				return;
		}
	};
	scrollUp = () => {
		var doc = document.documentElement;
		var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

		if (top > 0) {
			window.scrollTo(0, top - 15);
			setTimeout(this.scrollUp, 10);
		}
	};
	render() {
		return (
			<StickyContainer style={{ height: "auto" }}>
				<div
					ref={div => {
						this.Top = div;
					}}
				>
					<Sticky>
						{({
							isSticky,
							wasSticky,
							style,
							distanceFromTop,
							distanceFromBottom,
							calculatedHeight
						}) => {
							if (isSticky) {
								return (
									<div className="sticky-header" style={style}>
										<div className="sticky-header-left">
											<span className="sticky-header-logo">
												<span
													className="logo"
													onClick={() => {
														this.scrollUp();
													}}
												>
													Allen Fang
												</span>
											</span>
											<ul className="tabs-list-sticky sticky">
												<li
													onClick={() => {
														this.changeTab(1);
														scrollToComponent(this.Top, {
															offset: 10,
															align: "top",
															duration: 800
														});
													}}
													className={`tab-one tab-sticky ${this.state
														.activeTab === 1
														? "active"
														: ""}`}
												>
													<i className="fa fa-folder" />
												</li>
												<li
													onClick={() => {
														this.changeTab(2);
														scrollToComponent(this.Top, {
															offset: 10,
															align: "top",
															duration: 800
														});
													}}
													className={`tab-two tab-sticky ${this.state
														.activeTab === 2
														? "active"
														: ""}`}
												>
													<i className="fa fa-envelope" />
												</li>
												<li className="slider" />
											</ul>
										</div>
										<div className="sticky-header-right">
											<a href="" target="_blank" className="icon-sticky">
												<i className="fa fa-file-text" />
											</a>
											<a
												href="https://www.linkedin.com/in/fang-allen/"
												target="_blank"
												rel="noopener noreferrer"
												className="icon-sticky"
											>
												<i className="fa fa-linkedin-square" />
											</a>
											<a
												href="https://www.github.com/allen-fang"
												target="_blank"
												rel="noopener noreferrer"
												className="icon-sticky"
											>
												<i className="fa fa-github-square" />
											</a>
										</div>
									</div>
								);
							}
							return (
								<ul className="tabs-list" style={style}>
									<li
										onClick={() => {
											this.changeTab(1);
										}}
										className={`tabs tab-one ${this.state.activeTab === 1
											? "active"
											: ""}`}
									>
										<b>PROJECTS</b>
									</li>
									<li
										onClick={() => {
											this.changeTab(2);
										}}
										className={`tabs tab-two ${this.state.activeTab === 2
											? "active"
											: ""}`}
									>
										<b>ABOUT/CONTACT</b>
									</li>
									<li className="slider" />
								</ul>
							);
						}}
					</Sticky>
					<div className="tab-content-wrapper">{this.renderTab()}</div>
				</div>
			</StickyContainer>
		);
	}
}

export default Tabs;
