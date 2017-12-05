import React, { Component } from "react";
import axios from "axios";
import "./Emailer.css";

class Emailer extends Component {
	state = {
		name: "",
		email: "",
		subject: "",
		message: "",
		emailSent: false,
		errors: {
			name: false,
			email: false,
			subject: false,
			message: false
		},
		touched: {
			name: false,
			email: false,
			subject: false,
			message: false
		}
	};
	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};
	handleSubmit = async e => {
		e.preventDefault();
		this.setState({ emailSent: true });
		console.log("form values", this.state);
		await axios.post("/api/email", this.state);
		console.log("email sent");
	};
	validate = (name, email, subject, message) => {
		return {
			name: name.length === 0,
			email: email.length === 0,
			subject: subject.length === 0,
			message: message.length === 0
		};
	};
	handleBlur = field => event => {
		this.setState({
			touched: { ...this.state.touched, [field]: true }
		});
	};
	render() {
		const { name, email, subject, message } = this.state;
		const errors = this.validate(name, email, subject, message);
		const isEnabled = !Object.keys(errors).some(x => errors[x]);
		if (this.state.emailSent) {
			return <div className="message-sent">Thank you for sending a message!</div>;
		}
		const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="input-row">
					<input
						type="text"
						className={`name-field input-field ${shouldMarkError('name') ? "error-field" : ""}`}
						placeholder="Name"
						name="name"
						value={name}
						onChange={this.handleChange}
						onBlur={this.handleBlur('name')}
					/>
					<input
						type="text"
						className={`email-field input-field ${shouldMarkError('email') ? "error-field" : ""}`}
						placeholder="Email"
						name="email"
						value={email}
						onChange={this.handleChange}
						onBlur={this.handleBlur('email')}
					/>
				</div>
				<div className="input-row">
					<input
						type="text"
						className={`subject-field input-field ${shouldMarkError('subject') ? "error-field" : ""}`}
						placeholder="Subject"
						name="subject"
						value={subject}
						onChange={this.handleChange}
						onBlur={this.handleBlur('subject')}
					/>
				</div>
				<div className="input-row">
					<textarea
						type="text"
						className={`message-field input-field ${shouldMarkError('message') ? "error-field" : ""}`}
						placeholder="Message"
						name="message"
						value={message}
						onChange={this.handleChange}
						onBlur={this.handleBlur('message')}
					/>
				</div>
				<div className="input-btn">
					<input
						className={`${isEnabled ? "submit-btn" : "disabled-btn"}`}
						type="submit"
						value="Send Message"
						disabled={!isEnabled}
					/>
				</div>
			</form>
		);
	}
}

export default Emailer;
