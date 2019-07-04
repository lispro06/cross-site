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

	render() {
		return (
			<form
				action="#"
				method="post"
				name="contact"
				className="footer-form"
				data-netlify="true">
			</form>
		);
	}
}
