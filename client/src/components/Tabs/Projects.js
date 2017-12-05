import React, { Component } from 'react';
import './Projects.css';
import './Tab.css';

import Web from './Projects/Web';
import Mobile from './Projects/Mobile';

class Projects extends Component {
	state = { tab: 0 };
	changeTab = tab => {
		this.setState({ tab: tab });
	};
	render() {
		return (
			<div className="projects-tab-wrapper tab-wrapper">
				<ul className="tab-selector">
					<li
						className={`web-tab ${this.state.tab === 0 ? 'active' : ''}`}
						
					>
						<div className="tab-label" onClick={() => {
							this.changeTab(0);
						}}>
							<img
								className="tab-icon"
								src={require('../../images/web-icon.png')}
								alt="web icon"
							/>
							<b>Web</b>
						</div>
					</li>
					<li
						className={`mobile-tab ${this.state.tab === 1 ? 'active' : ''}`}
						
					>
						<div className="tab-label" onClick={() => {
							this.changeTab(1);
						}}>
							<img
								className="tab-icon"
								src={require('../../images/mobile-icon.png')}
								alt="mobile icon"
							/>
							<b>Mobile</b>
						</div>
					</li>
					<li className="project-slider" />
				</ul>
				<div className="projects-tab-content">
					<div className="project-cards">
						{this.state.tab ? <Mobile /> : <Web />}
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
