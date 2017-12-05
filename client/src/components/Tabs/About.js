import React, { Component } from 'react';
import './About.css';
import './Tab.css';

class About extends Component {
	render() {
		return (
			<div className="about-tab-wrapper tab-wrapper">
				<div className="image-blurb">
					<div className="profile-image">
						<img
							alt="Profile"
							src={require('../../images/profile.jpg')}
						/>
					</div>
					<div className="blurb">
						<div className="blurb-text">
							<p>Located in Silicon Valley, CA.</p>
							<p>
								
							</p>
						</div>
						<div className="blurb-links">
							<div
								className="project-link-btn"
								onClick={() => this.props.changeTab(1)}
							>
								Portfolio
							</div>
							<div
								className="project-link-btn"
								onClick={() => this.props.changeTab(2)}
							>
								Contact
							</div>
						</div>
					</div>
				</div>
				<div className="separator" />
				<div className="about-description">
					<p>
						During my final year of completing a Bachelor's degree in biology at
						University of California, Santa Barbara, I decided to take a year of
						computer science classes and ended up pursuing the subject after
						graduation. Since then I have explored several technologies behind
						both web and app development. I've built several applications to
						boost producivity and solve problems in every day life.
					</p>
				</div>
			</div>
		);
	}
}

export default About;
