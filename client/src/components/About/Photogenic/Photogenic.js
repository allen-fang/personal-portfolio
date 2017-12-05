import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Home/Header';
import Footer from '../../Home/Footer';
import '../AboutPages.css';

class Photogenic extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		const techUsed = [
			'html-js-css',
			'reactjs',
			'materializecss',
			'flickr',
			'github'
		];
		return (
			<div>
				<Header />
				<div className="about-page-wrapper">
					<div className="about-content-wrapper">
						<div className="about-content-header section">
							<div className="project-intro">
								<h1>Photogenic</h1>
								<hr />
								<p>
									A simple, yet aesthetically pleasing way for photographers to
									share their work.
								</p>
							</div>
							<div className="header-image">
								<img
									src={require('../../../images/Photogenic/photogenic-half.png')}
									alt="Landing Page"
								/>
							</div>
						</div>
						<div className="content-section section">
							<h2>The Project</h2>
							<hr />
							<div>
								<p>
									As a hobby photographer, I’ve always wanted to create a
									gallery for my photos to share with friends and family. There
									are many sites out there that allow for photo share services
									including Facebook, Google photos, and Flickr. However those
									sites either required me to be connected with the other party
									or included other elements in their interface which cluttered
									the sharing experience.
								</p>
								<p>
									The goal of this project is to create a website that could
									take an album and generate a responsive, minimalistic gallery
									that can be shared simply by sharing the url. Since we didn’t
									didn’t plan on creating a photo storage system, we sought out
									a photo service with an API that would let us fetch photos. We
									settled with Flickr but there is potential to expand to other
									options.
								</p>
							</div>
						</div>
						<div className="image-section">
							<div className="gallery-image-web">
								<img
									src={require('../../../images/Photogenic/photogenic-home-full.png')}
									alt="gallery 1"
								/>
							</div>
							<div className="gallery-image-web">
								<img
									src={require('../../../images/Photogenic/photogenic-progress-1.png')}
									alt="gallery 1"
								/>
							</div>
						</div>
						<div className="content-section section">
							<h2>The Design</h2>
							<hr />
							<div>
								<p>
									Because other photo sharing sites could be cluttered, the main
									focus from a design standpoint was to keep the process of
									creating, sharing, and viewing the gallery as simple as
									possible. The website only has two main pages: the main page
									and the gallery page.
								</p>
								<p>
									The home page has a simple input field where you can copy and
									paste your album’s Flickr URL and hit enter to generate a
									gallery. The gallery page was generated with Flickr’s
									justified layout library which contains algorithms to lay out
									photos in a responsive layout.
								</p>
							</div>
						</div>
						<div className="image-section">
							<div className="gallery-image-web">
								<img
									src={require('../../../images/Photogenic/photogenic-sketch-gallery.png')}
									alt="gallery 1"
								/>
							</div>
							<div className="gallery-image-web">
								<img
									src={require('../../../images/Photogenic/photogenic_landing.png')}
									alt="gallery 1"
								/>
							</div>
						</div>
						<div className="content-section section code-section">
							<h2>The Code</h2>
							<hr />
							<div>
								<p>
									This project was a front end only website.{' '}
									<a
										href="https://www.reactjs.org/"
										target="_blank"
										rel="noopener noreferrer"
									>
										ReactJS
									</a>{' '}
									and{' '}
									<a
										href="https://materializecss.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										MaterializeCSS
									</a>{' '}
									were used to render and style the pages. We used a react
									library called{' '}
									<a
										href="https://www.npmjs.com/package/axios"
										target="_blank"
										rel="noopener noreferrer"
									>
										axios
									</a>{' '}
									for the RESTful routes to{' '}
									<a
										href="https://www.flickr.com/services/api/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Flickr's API
									</a>. Fetching an album of photos and all of the photos’
									dimensions and meta data proved to be more complicated than a
									simple API call. The code became full of nested call promises
									callbacks. To clean up the code we used{' '}
									<a
										href="http://rossboucher.com/await/#/"
										target="_blank"
										rel="noopener noreferrer"
									>
										ES7's newest async/await syntax
									</a>{' '}
									for clear linear style code, explicit asynchronous points, and
									native try/catch error handling.
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
							<h2>
								<div>Current State</div> <div>and</div> Future Steps
							</h2>
							<hr />
							<div>
								<p>
									A couple of months ago, Flickr updated their policies on using
									their API and now requires authentication. The original goal
									of this project was that it would be easily accessible and
									wouldn’t require users viewing galleries to log in to a Flickr
									account (which many people don’t have and would deter them
									from viewing the photographer’s photos).
								</p>
								<p>
									Future plans for this project include integrating other photo
									services to generate galleries and finding a way around the
									authentication needed by users who are only viewing a shared
									URL.
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

export default Photogenic;
