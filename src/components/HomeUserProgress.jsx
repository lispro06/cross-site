/*
 * @Author: Kenneth Kwakye-Gyamfi
 * @Date: 2019-03-31 16:04:23
 * @Last Modified by: Kenneth Kwakye-Gyamfi
 * @Last Modified time: 2019-03-31 16:27:40
 */
import React from 'react';
import PropTypes from 'prop-types';

export default function HomeUserProgress(props) {
	let value = props.isTransition ? props.value : 0;
	value += '%';

	return (
		<div className="home-user-progress grid">
			<div className="home-user-progress__title column">{props.title}</div>
			<div className="home-user-progress__bar column grid">
				<div className="home-user-progress__bar-filled column" style={{ width: value }} />
				<p className="home-user-progress__bar-text column">{`${props.value}%`}</p>
			</div>
		</div>
	);
}

HomeUserProgress.propTypes = {
	title: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
	isTransition: PropTypes.bool
};
