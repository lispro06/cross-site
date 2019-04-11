/*
 * @Author: Kenneth Kwakye-Gyamfi
 * @Date: 2019-03-31 12:03:16
 * @Last Modified by: Kenneth Kwakye-Gyamfi
 * @Last Modified time: 2019-04-11 17:31:32
 */
import React from 'react';

import HomeAbout from '../components/HomeAbout';
import HomeHero from '../components/HomeHero';
import HomeProjects from '../components/HomeProjects';
import HomeUser from '../components/HomeUser';
import Layout from '../components/Layout';

import '../css/home.css';

export default function LandingPage() {
	return (
		<Layout className="home">
			<HomeHero />
			<HomeAbout />
			<HomeUser />
			<HomeProjects />
		</Layout>
	);
}
