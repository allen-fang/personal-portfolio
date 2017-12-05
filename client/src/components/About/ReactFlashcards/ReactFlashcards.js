import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Home/Header';
import Footer from '../../Home/Footer';
import '../AboutPages.css';

class ReactFlashcards extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		const techUsed = [
			'html-js-css',
			'reactjs',
			'bootstrap',
			'mongodb',
			'heroku',
			'github'
		];
		return (
			<div>
				<Header />
				<div className="about-page-wrapper">
					<div className="about-content-wrapper">
						<div className="about-content-header section">
							<div className="project-intro">
								<h1>React Flashcards</h1>
								<hr />
								<p>
									A simple flashcard application for coding techincal
									interviews. Add to a pool of interview questions and quiz
									yourself.
								</p>
							</div>
							<div className="header-image">
								<img
									src={require('../../../images/ReactFlashcards/react-flashcards-half.png')}
									alt="Landing Page"
								/>
							</div>
						</div>
						<div className="content-section section">
							<h2>The Project</h2>
							<hr />
							<div>
								<p>
									Often times during phone interviews, especially for entry
									level positions, technical questions are asked. A friend and I
									wanted to stay sharp on commonly asked interview questions. We
									wanted to be able to present the questions and answers as
									flashcards so that we could practice interviewing each other.
									The project should be expandable in the future where we would
									have the ability to continuously add questions that we come
									across in interviews. The questions should be grouped based on
									topic.
								</p>
							</div>
						</div>
						<div className="content-section section code-section">
							<h2>The Solution</h2>
							<hr />
							<div>
								<p>
									The project would need a front end for the user interface and
									a backend database to store all the question and answer pairs.
									For the front-end, we decided to code it with{' '}
									<a
										href="https://reactjs.org/"
										target="_blank"
										rel="noopener noreferrer"
									>
										ReactJS
									</a>. As this was my first project in ReactJS, I learned a lot
									about component based web development. The ability to
									components allowed for a lot of customization and importing
									components into others reduced a lot of repeated code. React
									uses a virtual DOM which contains all the components and is
									extremely efficient since it only re-renders certain
									components based on a life cycle. Having states and props also
									helps passing data between the components clean. The front end
									was designed using{' '}
									<a
										href="https://getbootstrap.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Bootstrap
									</a>.For the backend we built an API with{' '}
									<a
										href="https://www.mongodb.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										MongoDB
									</a>. Basic CRUD operations were coded with{' '}
									<a
										href="https://mongoosejs.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Mongoose JS
									</a>. We used MongoDB because of how fast it is to set up
									especially for a small project like this. It doesn’t require
									well planned schemas and relational mapping.
								</p>
							</div>
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
						<div className="content-section section">
							<h2>Future Steps</h2>
							<hr />
							<div>
								<p>
									For now, this project was created just for personal use to
									practice for interviews. In the future, user accounts could be
									added so that people could contribute their own stack of
									flashcards and save their favorites. The user interface could
									also use a facelift if the project were to be released for
									anyone to use.
								</p>
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
									<Link to="/about/house_planner">
										<img
											src={require('../../../images/HousePlanner/house_planner_landing.jpg')}
											alt="House Planner thumbnail"
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

export default ReactFlashcards;
