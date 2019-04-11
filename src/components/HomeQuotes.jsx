/*
 * @Author: Kenneth Kwakye-Gyamfi
 * @Date: 2019-04-11 21:03:19
 * @Last Modified by: Kenneth Kwakye-Gyamfi
 * @Last Modified time: 2019-04-11 21:18:44
 */
import React from 'react';

function HomeQuotes() {
	const quote = '"Great things are done by a series of small things brought together"';
	const author = 'Vincent Van Gogh';

	return (
		<div className="home-quote grid pad-grid">
			<p className="home-quote__title">{quote}</p>
			<p className="home-quote__quote">{author}</p>
		</div>
	);
}

export default React.memo(HomeQuotes);
