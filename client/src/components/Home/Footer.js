import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div className="footer-wrapper fadeIn">
			<a className="footer-link" href="mailto:allenfang08@gmail.com">
				<i className="fa fa-envelope fa-2x" />
			</a>
			<a
				className="footer-link"
				href={require('../../assets/AllenFangResume.pdf')}
				target="_blank"
			>
				<i className="fa fa-file-text fa-2x" />
			</a>
			<a
				className="footer-link"
				href="https://www.linkedin.com/in/fang-allen/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fa fa-linkedin fa-2x" />
			</a>
			<a
				className="footer-link"
				href="https://www.github.com/allen-fang"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fa fa-github fa-2x" />
			</a>
		</div>
	);
};

export default Footer;
