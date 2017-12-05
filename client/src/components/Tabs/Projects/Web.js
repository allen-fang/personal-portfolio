import React from 'react';
import { Link } from 'react-router-dom';
import '../Projects.css';

const Web = () => {
	const jobHubTech = [
		'ReactJS',
		'JavaScript',
		'MongoDB',
		'AWS S3',
		'Material-UI',
		'OAuth'
	];
	const photogenicTech = [
		'ReactJS',
		'JavaScript',
		'Flickr API',
		'MaterializeCSS'
	];
	const housePlannerTech = ['Django', 'Python', 'mySQL', 'MaterializeCSS'];
	const reactFlashcardsTech = ['ReactJS', 'JavaScript', 'MongoDB'];
	return (
		<div>
			<div className="project-card">
				<div className="project-image">
					<img src={require('../../../images/jobhub.png')} alt="jobhub" />
				</div>
				<div className="project-description">
					<h2>
						<a
							href="https://job-hub.herokuapp.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							JobHub
						</a>
					</h2>
					<p>An online job search organizer.</p>
					<div className="tech-used">
						{jobHubTech.map(tech => <div className="tech-tag" key={tech}>{tech}</div>)}
					</div>
					<div className="project-links">
						<a
							className="project-link-btn"
							href="https://job-hub.herokuapp.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Visit Site
						</a>
						<a
							className="project-link-btn"
							href="https://github.com/Fang-Lee/job-tracker"
							target="_blank"
							rel="noopener noreferrer"
						>
							View Code
						</a>
						<Link className="project-link-btn" to="/about/jobhub">
							Learn More
						</Link>
					</div>
				</div>
			</div>
			<div className="separator" />
			<div className="project-card">
				<div className="project-image">
					<img src={require('../../../images/photogenic.png')} alt="photogenic" />
				</div>
				<div className="project-description">
					<h2>Photogenic</h2>
					<p>
						Generates beautiful and responsive photo galleries for
						photographers.
					</p>
					<div className="tech-used">
						{photogenicTech.map(tech => <div className="tech-tag" key={tech}>{tech}</div>)}
					</div>
					<div className="project-links">
						<a
							className="project-link-btn"
							href="https://github.com/Fang-Lee/photogenic"
							target="_blank"
							rel="noopener noreferrer"
						>
							View Code
						</a>
						<Link className="project-link-btn" to="/about/photogenic">
							Learn More
						</Link>
					</div>
				</div>
			</div>
			<div className="separator" />
			<div className="project-card">
				<div className="project-image">
					<img
						src={require('../../../images/house-planner.png')}
						alt="house planner"
					/>
				</div>
				<div className="project-description">
					<h2>House Planner</h2>
					<p>
						Living with housemates? Keep everything in check through a
						discussion board, calendar, and more.
					</p>
					<div className="tech-used">
						{housePlannerTech.map(tech => (
							<div className="tech-tag" key={tech}>{tech}</div>
						))}
					</div>
					<div className="project-links">
						<a
							className="project-link-btn"
							href="https://github.com/allen-fang/house_planner"
							target="_blank"
							rel="noopener noreferrer"
						>
							View Code
						</a>
						<Link className="project-link-btn" to="/about/house_planner">
							Learn More
						</Link>
					</div>
				</div>
			</div>
			<div className="separator" />
			<div className="project-card">
				<div className="project-image">
					<img
						src={require('../../../images/react-flashcards.png')}
						alt="react flashcards"
					/>
				</div>
				<div className="project-description">
					<h2>React Flashcards</h2>
					<p>Flashcards for technical interviews.</p>
					<div className="tech-used">
						{reactFlashcardsTech.map(tech => (
							<div className="tech-tag" key={tech}>{tech}</div>
						))}
					</div>
					<div className="project-links">
						<a
							className="project-link-btn"
							href="https://github.com/allen-fang/react-flashcards"
							target="_blank"
							rel="noopener noreferrer"
						>
							View Code
						</a>
						<Link className="project-link-btn" to="/about/react-flashcards">
							Learn More
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};


export default Web;