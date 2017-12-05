import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import Header from '../../Home/Header';
import Footer from '../../Home/Footer';
import '../AboutPages.css';

class RoadTripPlanner extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		const techUsed = [
			'ios',
			'swift',
			'xcode',
			'google-api',
			'mapkit',
			'github'
		];
		return (
			<div>
				<Header />
				<div className="about-page-wrapper">
					<div className="about-content-wrapper">
						<div className="about-content-header section">
							<div className="project-intro">
								<h1>Road Trip Planner</h1>
								<hr />
								<p>
									An iOS mobile application used to plan out stops along a road
									trip. Provides points of interests, restaurants, and lodging
									at a glance. Won first place at a Coding Dojo Hackathon.
								</p>
							</div>
							<div className="header-image">
								<img
									src={require('../../../images/RoadTripPlanner/road-trip-home-half.png')}
									alt="Landing Page"
								/>
							</div>
						</div>
						<div className="content-section section">
							<h2>The Project</h2>
							<hr />
							<div>
								<p>
									This application was built as a submission into an in-house
									hackathon at Coding Dojo. The prompt was to create an app
									using Apple’s Core Location library. Three other peers and I
									decided to create an app that would plan stops along a road
									trip. The application should be able to search up multiple
									cities and draw a route on a map. Each location should have
									it’s own informational page where it displays points of
									interests for users to explore the area.
								</p>
							</div>
						</div>
						<div className="image-section">
							<div className="gallery-image-mobile">
								<img
									src={require('../../../images/RoadTripPlanner/road-trip-home.png')}
									alt="gallery 1"
								/>
							</div>
							<div className="gallery-image-mobile">
								<img
									src={require('../../../images/RoadTripPlanner/road-trip-map.png')}
									alt="gallery 2"
								/>
							</div>
							<div className="gallery-image-mobile">
								<img
									src={require('../../../images/RoadTripPlanner/road-trip-single.png')}
									alt="gallery 3"
								/>
							</div>
						</div>
						<div className="content-section section code-section">
							<h2>The Solution</h2>
							<hr />
							<div>
								<p>
									The project was coded on Xcode 8 in Swift 3. Wireframes of the
									project were designed using Xcode's Storyboard.
								</p>
								<p>
									We designed the application so that the home scene would be a
									table of cells with each cell being a different stop on the
									road trip. On the home scene there would also be a map that
									used Apple’s MapKit and Core Location to display the
									calculated route between all the stops. Core Location was also
									used to calculate the distance from where the user currently
									is and the destinations. We used Google’s autocomplete for
									users to type in their stops. Each cell has a background
									picture which comes from Google Places API.
								</p>
								<p>
									Each of the cells could be tapped on to bring the user to a
									screen that highlighted the city. At a glance, it included top
									three points of interests, restaurants, and lodging. All data
									was obtained through Google Places API. This part was
									challenge due to the amount of callback nesting involved to
									reach the needed information. We first had to fetch the city,
									then had to make API calls for each of the points of
									interests, restaurants, and lodging. We made sure to organize
									each callback and used guard statements for each call to
									handle errors. All data was received as JSON objects.
								</p>
								<p>
									Core Data was used to keep persistent data in the application.
									In the future, a backend server could be implemented to store
									information in user accounts.
								</p>
							</div>
						</div>
						<div className="video-section">
							<YouTube videoId="LngE9MfdO4s" />
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
							<h1>More Mobile Projects</h1>
							<div className="separator" />
							<div className="more-projects">
								<div className="project-thumbnail mobile-thumbnail">
									<Link to="/about/restaurant_roulette">
										<img
											src={require('../../../images/RestaurantRoulette/restaurant-roulette-thumbnail.png')}
											alt="Road Trip Planner thumbnail"
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

export default RoadTripPlanner;
