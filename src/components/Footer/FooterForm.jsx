/*
 * @Author: Kenneth Kwakye-Gyamfi
 * @Date: 2019-04-11 21:30:39
 * @Last Modified by: Kenneth Kwakye-Gyamfi
 * @Last Modified time: 2019-04-11 21:38:12
 */
import React from 'react';

export default class FooterForm extends React.Component {
	state = {
		name: '',
		email: '',
		message: ''
	};

	onSubmit = e => {
		e.preventDefault();
	};

	render() {
		return (
			<form className="footer-form" onSubmit={this.submit}>
				<input
					type="text"
					className="footer-form__input"
					value={this.state.name}
					onChange={e => this.setState({ name: e.target.value })}
					placeholder="Name"
				/>

				<input
					type="email"
					className="footer-form__input"
					value={this.state.email}
					onChange={e => this.setState({ email: e.target.value })}
					placeholder="Email address"
				/>

				<textarea
					type="text"
					className="footer-form__input footer-form__textarea"
					value={this.state.message}
					onChange={e => this.setState({ message: e.target.value })}
					placeholder="Your message"
				/>
				<button type="submit" className="footer-form__button">
					Submit
				</button>
			</form>
		);
	}
}
