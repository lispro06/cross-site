/*
 * @Author: Kenneth Kwakye-Gyamfi
 * @Date: 2019-03-31 15:00:02
 * @Last Modified by: Kenneth Kwakye-Gyamfi
 * @Last Modified time: 2019-04-24 00:18:49
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
	const height = '6\'5"';

	return (
		<StaticQuery
			query={imgQuery}
			render={({ portrait }) => (
				<div className="home-user grid pad-grid">
					<div className="home-user-image column">
						<div className="home-user-image__img">
							<Image
								alt="Kenneth Kwakye-Gyamfi"
								fluid={portrait.childImageSharp.fluid}
							/>
						</div>
						<h3 className="home-user-image__title">boanit?</h3>
						<p className="home-user-image__desc">boanit is a company that specializes in information security.
						</p>

						<div className="resume-container">
							<a href="/boanit.pdf" download>
								<i className="ti-download" />
								<span>Download ppt</span>
							</a>
						</div>

						<SocialLinks className="home-user-image__socials" />
					</div>

					<TrackVisibility once className="home-user-achievements column">
						<HomeUserAchievements />
					</TrackVisibility>
				</div>
			)}
		/>
	);
}
