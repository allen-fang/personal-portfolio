import React from 'react';
import './Contact.css';
import './Tab.css';
import Emailer from '../Emailer/Emailer';

const Contact = () => {
	return (
		<div className="contact-tab-wrapper tab-wrapper">
			<div className="about-wrapper">
				<h2>About Me</h2>
				<div className="about-content">
					<div className="profile-image">
						<img
							alt="Profile"
							src={require('../../images/profile.jpg')}
						/>
					</div>
					<div className="about-text">
						<p>Located in the Silicon Valley, CA.</p>
						<p>During my final year of completing a Bachelor's degree in biology at
						University of California, Santa Barbara, I decided to take a year of
						computer science classes and ended up pursuing the subject after
						graduation. Since then I have explored several technologies behind
						both web and app development. I've built several applications to
						boost producivity and solve problems in every day life.</p>
					</div>
				</div>
			</div>
			<div className="contact-tab-content">
				<div className="contact-tab-left">
					<h2>Contact</h2>
					<Emailer />
				</div>
				<div className="contact-tab-right">
					<h2>Connect</h2>
					<div className="connect-links">
						<a href="mailto:allenfang08@gmail.com">
							<i className="fa fa-envelope fa-2x" />
							<span>allenfang08@gmail.com</span>
						</a>
						<a
							href="https://www.linkedin.com/in/fang-allen/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fa fa-linkedin fa-2x" />
							<span>/in/fang-allen</span>
						</a>
						<a
							href="https://www.github.com/allen-fang"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fa fa-github fa-2x" />
							<span>/allen-fang</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
