/*
 * @Author: Kenneth Kwakye-Gyamfi
 * @Date: 2019-04-11 21:03:19
 * @Last Modified by: Kenneth Kwakye-Gyamfi
 * @Last Modified time: 2019-04-11 22:09:43
 */
import React from 'react';

const quotes = [
	{
		text: 'Perform the latest vulnerability discovery and check.',
		author: 'Vulnerability Diagnosis'
	},
	{
		text: 'Validate the integrity check of the source code and the existence of security vulnerabilities.',
		author: 'Source code Diagnosis'
	},
	{
		text: 'Provides guidance and training on smartphone apps.',
		author: 'Mobile app Diagnosis'
	}
];

function HomeQuotes() {
	const quote = quotes[Math.floor(Math.random() * quotes.length)];

	return (
		<div className="home-quote grid pad-grid">
			<p className="home-quote__title">{`"${quote.text}"`}</p>
			<p className="home-quote__quote">{quote.author}</p>
		</div>
	);
}

export default React.memo(HomeQuotes);
