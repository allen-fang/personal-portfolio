import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import Header from '../../Home/Header';
import Footer from '../../Home/Footer';
import '../AboutPages.css';

class RestaurantRoulette extends Component {
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
								<h1>Restaurant Roulette</h1>
								<hr />
								<p>
									An iOS mobile application that randomly selects a restaurant in the
									area based on user's location and choice of cuisine. Won first
									place at a Coding Dojo Hackathon.
								</p>
							</div>
							<div className="header-image">
								<img
									src={require('../../../images/RestaurantRoulette/cuisine-page-half.png')}
									alt="Landing Page"
								/>
							</div>
						</div>
						<div className="content-section section">
							<h2>The Project</h2>
							<hr />
							<div>
								<p>
									This project was created for an in house hackathon at Coding
									Dojo. The prompt was to create an application that utilized a
									3rd party API. Since my team members and I always had trouble
									picking a place to eat for lunch, we created an application to
									help us decide. The app should be able to pick from
									restaurants in the area at random and display information
									about the place such as distance, price, and contact
									information.
								</p>
							</div>
						</div>
						<div className="image-section">
							<div className="gallery-image-mobile">
								<img
									src={require('../../../images/RestaurantRoulette/restaurant-roulette-home.png')}
									alt="gallery 1"
								/>
							</div>
							<div className="gallery-image-mobile">
								<img
									src={require('../../../images/RestaurantRoulette/cuisine-page.png')}
									alt="gallery 2"
								/>
							</div>
							<div className="gallery-image-mobile">
								<img
									src={require('../../../images/RestaurantRoulette/restaurant-example-1.png')}
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
									We wanted to make the process of choosing a restaurant a
									little more interactive so we decided that the application
									would give you another restaurant by shaking the device. To
									enable the shaking gesture on the phone, we utilized the Core
									Motion library.
								</p>
								<p>
									Restaurants were also divided into different cultural cuisines
									to help users narrow searches. To fetch information about the
									restaurants, we used Google Places API which returned
									information including address, hours, contact, pricing,
									reviews, and pictures of the place. We used MapKit to draw a
									route to the restaurant from the user’s location using the
									Core Location library. Fetching and displaying all the
									information was tricky with nesting all the callbacks. The
									flow of data to display a restaurant started with picking the
									cuisine. An API call with current location, distance away
									(radius), and type of cuisine placed as query parameters to
									Google Places would return a list of restaurants. The list is
									stored as an array and a random restaurant is picked. From
									that single restaurant, another API call to Google places
									returned specific details about the place in JSON format.
								</p>
								<p>
									Core Data was used to keep persistent data in the application.
									In the future, a backend server could be implemented to store
									information in user accounts.
								</p>
							</div>
						</div>
						<div className="video-section">
							<YouTube videoId="hMSw2vd2_ew" />
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
									<Link to="/about/road-trip-planner">
										<img
											src={require('../../../images/RoadTripPlanner/road-trip-thumbnail.png')}
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

export default RestaurantRoulette;
