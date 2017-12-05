import React from 'react';
import { Link } from 'react-router-dom';
import '../Projects.css';

const Mobile = () => {
	const restaurantRouletteTech = [
		'iOS',
		'Swift 3',
		'Google Places API',
		'Core Location',
		'MapKit'
	];
	const roadTripPlannerTech = [
		'iOS',
		'Swift 3',
		'Google Places API',
		'Core Location',
		'MapKit'
	];
	return (
		<div>
			<div className="project-card">
				<div className="project-image">
					<img
						src={require('../../../images/RestaurantRoulette.png')}
						alt="restaurant roulette"
					/>
				</div>
				<div className="project-description">
					<h2>Restaurant Roulette</h2>
					<p>
						Can't decide where to eat? Pick a cuisine and let the app do the
						rest.
					</p>
					<div className="tech-used">
						{restaurantRouletteTech.map(tech => (
							<div className="tech-tag" key={tech}>{tech}</div>
						))}
					</div>
					<div className="project-links">
						<a
							className="project-link-btn"
							href="https://github.com/allen-fang/restaurant_roulette"
							target="_blank"
							rel="noopener noreferrer"
						>
							View Code
						</a>
						<Link className="project-link-btn" to="/about/restaurant_roulette">
							Learn More
						</Link>
					</div>
				</div>
			</div>
			<div className="separator" />
			<div className="project-card">
				<div className="project-image">
					<img
						src={require('../../../images/RoadTripPlanner.png')}
						alt="road trip planner"
					/>
				</div>
				<div className="project-description">
					<h2>Road Trip Planner</h2>
					<p>
						Get an overview of points of interests, restaurants, and lodging
						along your road trip.
					</p>
					<div className="tech-used">
						{roadTripPlannerTech.map(tech => (
							<div className="tech-tag" key={tech}>{tech}</div>
						))}
					</div>
					<div className="project-links">
						<Link className="project-link-btn" to="/about/road-trip-planner">
							Learn More
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mobile;
