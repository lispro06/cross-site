/*
 * @Author: Kenneth Kwakye-Gyamfi
 * @Date: 2019-03-31 12:03:16
 * @Last Modified by: Kenneth Kwakye-Gyamfi
 * @Last Modified time: 2019-03-31 13:17:35
 */
import React from 'react';

import HomeHero from '../components/HomeHero';
import Layout from '../components/Layout';

import '../css/home.css';

export default function LandingPage() {
	return (
		<Layout className="home">
			<HomeHero />
		</Layout>
	);
}
