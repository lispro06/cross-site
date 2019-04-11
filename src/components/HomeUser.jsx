/*
 * @Author: Kenneth Kwakye-Gyamfi
 * @Date: 2019-03-31 15:00:02
 * @Last Modified by: Kenneth Kwakye-Gyamfi
 * @Last Modified time: 2019-03-31 16:45:42
 */
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import TrackVisibility from 'react-on-screen';

import HomeUserAchievements from './HomeUserAchievements';
import SocialLinks from './SocialLinks';

const imgQuery = graphql`
	query {
		portrait: file(relativePath: { eq: "portrait.jpeg" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

export default function HomeUser() {
	// Defined the height because it was messing up in React rendering 😅
	const height = '6\'5"';

	return (
		<StaticQuery
			query={imgQuery}
			render={({ portrait }) => (
				<div className="home-user grid pad-grid">
					<div className="home-user-image column">
						<div className="home-user-image__img">
							<Image fluid={portrait.childImageSharp.fluid} />
						</div>
						<h3 className="home-user-image__title">Who is this guy?</h3>
						<p className="home-user-image__desc">
							I&apos;m a {height} full stack developer 💪🏼 with a 4-year work
							experience and currently working for{' '}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.getinnotized.com">
								getINNOtized GmbH
							</a>{' '}
							in North Legon, Accra. I have the passion for developing secure and
							aesthetically pleasing applications 😍, or portions of an application.
						</p>

						<SocialLinks className="home-user-image__socials" />
					</div>

					<TrackVisibility once>
						<HomeUserAchievements />
					</TrackVisibility>
				</div>
			)}
		/>
	);
}
