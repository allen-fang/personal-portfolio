import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import Header from '../../Home/Header';
import Footer from '../../Home/Footer';
import '../AboutPages.css';

class HousePlanner extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		const techUsed = [
			'html-js-css',
			'python',
			'django',
			'mysql',
			'mamp',
			'materializecss',
			'github'
		];
		return (
			<div>
				<Header />
				<div className="about-page-wrapper">
					<div className="about-content-wrapper">
						<div className="about-content-header section">
							<div className="project-intro">
								<h1>House Planner</h1>
								<hr />
								<p>
									House Planner gives a space for people living together to
									organize logistics. Includes basic tools such as a calendar,
									expense tracker, and message board.
								</p>
							</div>
							<div className="header-image">
								<img
									src={require('../../../images/HousePlanner/house-planner-half.png')}
									alt="Landing Page"
								/>
							</div>
						</div>
						<div className="content-section section">
							<h2>The Project</h2>
							<hr />
							<div>
								<p>
									Living with housemates requires strong communication among
									everyone to keep logistics running smoothly. Throughout my
									personal experiences of living with other people, bills that
									are often divided between people, chores that rotate from week
									to week and house events are all planned and documented over a
									variety of different platforms which can lead to confusion and
									miscommunication. A message about one thing over a group text
									could be lost when another conversation is going on in a
									Facebook messaging group.
								</p>
								<p>
									House planner aims to solve organization problems by placing
									everything in one centralized place by providing users with a
									number of features. The website should allow users to organize
									house events, split bills, and have a message board.
								</p>
							</div>
						</div>
						<div className="image-section-house-planner">
							<div className="gallery-image-web">
								<img
									src={require('../../../images/HousePlanner/house-planner-dashboard.png')}
									alt="gallery 1"
								/>
							</div>
							<div className="gallery-image-web">
								<img
									src={require('../../../images/HousePlanner/house-planner-calendar.png')}
									alt="gallery 1"
								/>
							</div>
							<div className="gallery-image-web">
								<img
									src={require('../../../images/HousePlanner/house-planner-expense.png')}
									alt="gallery 1"
								/>
							</div>
						</div>
						<div className="content-section section code-section">
							<h2>The Solution</h2>
							<hr />
							<div>
								<p>
									Consolidating common tasks that housemates would encounter was
									the main challenge of House Planner. We used{' '}
									<a
										href="https://www.djangoproject.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Django
									</a>, written in{' '}
									<a
										href="https://www.python.org/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Python
									</a>, as the framework for this project.{' '}
									<a
										href="https://www.mysql.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										MySQL
									</a>{' '}
									was our choice of database for the backend. Having a SQL
									database allowed us to design our schemas in great detail. We
									needed to utilize many-to-many relationships between the users
									schemas and the message board that we implemented.{' '}
									<a
										href="https://materializecss.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										MaterializeCSS
									</a>{' '}
									was used to style the front-end and{' '}
									<a
										href="http://jinja.pocoo.org/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Jinja
									</a>{' '}
									was the templating language used.
								</p>
								<p>
									A calendar provided users a place to input house events or
									important deadlines and dates. The calendar was implemented
									with a calendar js library and passed JSON objects to our
									server to store each event.
								</p>
								<p>
									A billing page stored a history of expenses that needed to be
									split evenly among housemates.
								</p>
								<p>
									Other features include contact information of each housemate
									and a message board for announcements and the ability to
									comment on each posted message.
								</p>
							</div>
						</div>
						<div className="video-section">
							<YouTube videoId="HVv2kAIkkpM" />
						</div>
						<div className="tech-logos-section">
							<h1>Technologies Used</h1>
							<div className="separator" />
							<div className="tech-logos">
								{techUsed.map(tech => (
									<div key={tech} className="tech-logo">
										<img
											src={require(`../../../images/tech-logos/${tech}.png`)}
											alt={`${tech} logo`}
										/>
									</div>
								))}
							</div>
						</div>
						<div className="footer-section">
							<h1>More Web Projects</h1>
							<div className="separator" />
							<div className="more-projects">
								<div className="project-thumbnail">
									<Link to="/about/jobhub">
										<img
											src={require('../../../images/JobHub/jobhub-landing.png')}
											alt="JobHub thumbnail"
										/>
									</Link>
								</div>
								<div className="project-thumbnail">
									<Link to="/about/photogenic">
										<img
											src={require('../../../images/Photogenic/photogenic_landing.png')}
											alt="Photogenic thumbnail"
										/>
									</Link>
								</div>
								<div className="project-thumbnail">
									<Link to="/about/react-flashcards">
										<img
											src={require('../../../images/ReactFlashcards/react_flashcards_landing.jpg')}
											alt="React Flashcards thumbnail"
										/>
									</Link>
								</div>
							</div>
							<div className="home-btn">
								<Link to="/" className="project-link-btn">
									Back Home
								</Link>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default HousePlanner;
