import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<div className="home-header-wrapper">
			<div className="home-header-content">
				<div className="home-header-content-left">
					<Link className="link" to="/">
						<p className="home-header-content-name fadeInDown">Allen Fang</p>
					</Link>
					<p className="home-header-content-title fadeInDown">
						Web/iOS Developer
					</p>
				</div>
				<div className="home-header-content-right">
					<div className="icons-list fadeInLeft">
						<a
							href={require('../../assets/AllenFangResume.pdf')}
							target="_blank"
							className="icon resume-icon fadeInLeft"
						>
							<i className="fa fa-file-text fa-2x" />
							<span className="icon-text resume-icon-text">Resume</span>
						</a>
						<a
							href="https://www.linkedin.com/in/fang-allen/"
							target="_blank"
							rel="noopener noreferrer"
							className="icon linkedin-icon fadeInLeft"
						>
							<i className="fa fa-linkedin-square fa-2x" />
							<span className="icon-text linkedin-icon-text">
								/in/fang-allen
							</span>
						</a>
						<a
							href="https://www.github.com/allen-fang"
							target="_blank"
							rel="noopener noreferrer"
							className="icon github-icon fadeInLeft"
						>
							<i className="fa fa-github-square fa-2x" />
							<span className="icon-text github-icon-text">/allen-fang</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
