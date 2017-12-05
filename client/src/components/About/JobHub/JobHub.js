import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Home/Header';
import Footer from '../../Home/Footer';
import '../AboutPages.css';

class JobHub extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		const techUsed = [
			'html-js-css',
			'reactjs',
			'nodejs',
			'express',
			'redux',
			'mongodb',
			'AWS-S3',
			'github',
			'heroku'
		];
		return (
			<div>
				<Header />
				<div className="about-page-wrapper">
					<div className="about-content-wrapper">
						<div className="about-content-header section">
							<div className="project-intro">
								<h1>JobHub</h1>
								<hr />
								<p>
									JobHub is a one stop shop for organizing any job search. It
									allows for a centralized location for tracking dates, details,
									and files for all job applications.
								</p>
							</div>
							<div className="header-image">
								<img
									src={require('../../../images/JobHub/jobhub-half.png')}
									alt="Landing Page"
								/>
							</div>
						</div>
						<div className="content-section section">
							<h2>The Project</h2>
							<hr />
							<div>
								<p>
									When looking for a job, the number of applications, files, and
									information can get messy and cluttered. After surveying peers
									about their job searches, a majority had similar issues with
									organization. Most consisted of a spreadsheet for details
									about each application and a folder system on their computer
									which held their resume and cover letters unique to each
									position. Another issue was that they didn’t have their files
									on the go.
								</p>
								<p>
									The goal of this project was to streamline the process of the
									job search. Important details of each application should be
									available at a glance. Users should be able to also keep notes
									and descriptions of each company and job position’s
									responsibilities and qualifications. When applying to many
									small companies, it can be easy to mix up what the company’s
									mission statements are and other small details. Since resumes
									and cover letters are often tailored for each application,
									users should be able to upload files accordingly. Recruiter
									contact information would also be useful to store.
								</p>
							</div>
						</div>
						<div className="image-section">
							<div className="gallery-column">
								<div className="gallery-image-landscape">
									<img
										src={require('../../../images/JobHub/jobhub-landing2.png')}
										alt="gallery 1"
									/>
								</div>
								<div className="gallery-image-landscape">
									<img
										src={require('../../../images/JobHub/jobhub-dashboard2.png')}
										alt="gallery 1"
									/>
								</div>
							</div>
							<div className="gallery-image-web">
								<img
									src={require('../../../images/JobHub/jobhub-opp.png')}
									alt="gallery 1"
								/>
							</div>
						</div>
						<div className="content-section section">
							<h2>The Design</h2>
							<hr />
							<div>
								<p>
									To keep a more optimistic view on an often stressful process,
									each application is called an opportunity. The website is
									split mainly into two different pages: an overview of all
									opportunities and single opportunity pages. The overall design
									methodology come from Material Design.
								</p>
								<p>
									The overview page is the home dashboard that users see when
									they first login. The dashboard aims to replace spreadsheets
									that people usually use to track every application. It’s a
									simple table that includes only the most important information
									about the application: company name, job title, step in the
									application process, date updated, priority, and the
									application link. This table is also sortable by any of the
									columns and searchable by company name or job title.
								</p>
								<p>
									Single opportunity pages include all the other details of the
									application. Users can enter descriptions of both the job and
									company along with responsibilities and qualifications.
									Recruiter information and uploaded documents can also be found
									on this page. Along the top of the boxes are summary tags
									where users can get creative and describe each application to
									suit their needs. For example, a user applying for coding jobs
									may list out technologies used on the job. A student looking
									for a part time job may use it to describe hours offered.
								</p>
								<p>
									Originally the form to enter a new opportunity was extremely
									long, it contained roughly 25 fields to fill out. While most
									of it was optional, it was still a tedious process. After
									receiving feedback from users, I decided it needed to be
									shortened to just the essential fields. The rest of the
									information could be filled later on through the edit page.
								</p>
							</div>
						</div>
						<div className="image-section-rows">
							<div className="image-section-row">
								<div>
									<img src={require('../../../images/JobHub/jobhub-dashboard-sketch.png')} alt="gallery"/>
								</div>
								<div>
									<img src={require('../../../images/JobHub/jobhub-dashboard-final.png')} alt="gallery"/>
								</div>
							</div>
							<div className="image-section-row">
								<div>
									<img src={require('../../../images/JobHub/jobhub-opp-sketch.png')} alt="gallery"/>
								</div>
								<div>
									<img src={require('../../../images/JobHub/jobhub-opp-final.png')} alt="gallery"/>
								</div>
							</div>
						</div>
						<div className="content-section section code-section">
							<h2>The Code</h2>
							<hr />
							<div>
								<p>
									Since this was a personal project, many technologies used were
									picked as a learning process. As a developer focusing mainly
									on JavaScript,{' '}
									<a
										href="https://www.reactjs.org/"
										target="_blank"
										rel="noopener noreferrer"
									>
										ReactJS
									</a>{' '}
									was used to build the front end of the website. Component
									based web development lead to more reusable code. Re-rendering
									of components only when they update improves the speed of the
									website. React Router v4 was used to navigate through the
									different pages.{' '}
									<a
										href="https://redux.js.org/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Redux
									</a>{' '}
									and{' '}
									<a
										href="https://www.redux-form.com"
										target="_blank"
										rel="noopener noreferrer"
									>
										Redux-Form
									</a>{' '}
									were applied to keep data in a store.
								</p>
								<p>
									The design of the website came from{' '}
									<a
										href="https://www.material-ui.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Material-UI
									</a>. I’ve used MaterializeCSS on previous projects before and
									enjoyed the style so I decided to try out a library that
									provided components in the{' '}
									<a
										href="https://material.io/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Material
									</a>{' '}
									design.
								</p>
								<p>
									For user login, I could’ve used a traditional email and
									password combination and used a library such as bcrypt to
									encode the password but I wanted to try out OAuth and decided
									to use Google’s OAuth. The process was a great learning
									experience because I had to learn about cookies and really
									understand passing data between the server and client to keep
									specific routes blocked unless authorized.
								</p>
								<p>
									The backend was built with{' '}
									<a
										href="https://www.mongodb.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										MongoDB
									</a>{' '}
									and mongoose was used to interact with the database through an
									express server on{' '}
									<a
										href="https://nodejs.org/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Node.js
									</a>. The database is hosted on a middleman service called
									mlab. A non-SQL based database is more flexible in the
									planning of the schemas and very quick at searching.
								</p>
								<p>
									To store user documents, I used{' '}
									<a
										href="https://aws.amazon.com/s3/"
										target="_blank"
										rel="noopener noreferrer"
									>
										AWS S3
									</a>. AWS servers are reliable and extremely fast. This allows
									for users to download their files from any computer.
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
									In the future, I am planning on adding two main features: web
									scrapping and a statistics pages.
								</p>
								<p>
									For web scrapping, the idea is to take the application link
									provided by the user and scrap for the job/company
									descriptions, qualifications, and responsibilities to save the
									user time since filling those fields out can be tedious.
								</p>
								<p>
									A statistics page would include charts or graphs containing
									stats about all applications. Some simple stats cold be the
									percentage of applications in each of the stages: interested,
									applied, interviewing, offer received. Other stats may require
									a standardization of input data such as standardizing how
									users type the location of the company or job title. This
									would allow users to visualize the kinds of jobs their
									applying to and give them a better sense of what they’re
									looking for in a job.
								</p>
							</div>
						</div>
						<div className="footer-section">
							<h1>More Web Projects</h1>
							<div className="separator" />
							<div className="more-projects">
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

export default JobHub;
