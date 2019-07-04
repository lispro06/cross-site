/*
 * @Author: Kenneth Kwakye-Gyamfi
 * @Date: 2019-03-31 14:06:02
 * @Last Modified by: Kenneth Kwakye-Gyamfi
 * @Last Modified time: 2019-04-24 00:19:44
 */
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const imgQueries = graphql`
	query {
		frontendImg: file(relativePath: { eq: "desktop-computer.png" }) {
			childImageSharp {
				fluid(maxWidth: 256) {
					...GatsbyImageSharpFluid
				}
			}
		}
		backendImg: file(relativePath: { eq: "cloud-server.png" }) {
			childImageSharp {
				fluid(maxWidth: 256) {
					...GatsbyImageSharpFluid
				}
			}
		}
		mobileImg: file(relativePath: { eq: "smartphone.png" }) {
			childImageSharp {
				fluid(maxWidth: 256) {
					...GatsbyImageSharpFluid
				}
			}
		}
		cleanCodeImg: file(relativePath: { eq: "clean-code.png" }) {
			childImageSharp {
				fluid(maxWidth: 256) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

export default function HomeAboutSection() {
	return (
		<StaticQuery
			query={imgQueries}
			render={data => {
				const sections = [
					{
						title: 'Frontend consulting',
						desc:
							'Frontend development with experience writing code in React, Angular, VueJS and vanilla JavaScript.',
						img: data.frontendImg
					},
					{
						title: 'Backend consulting',
						desc:
							'Backend and microservice architecture development, with experience in NodeJS, Python and PHP.',
						img: data.backendImg
					},
					{
						title: 'Mobile app consulting',
						desc:
							'Native android application development (Java + Kotlin) as well as hybrid applications built with React Native, Ionic and Flutter',
						img: data.mobileImg
					},
					{
						title: 'Secure code',
						desc:
							'Prefer to follow the software development lifecycle meticulously, not forgetting sections such as documentation and testing. 🤒',
						img: data.cleanCodeImg
					}
				];

				return (
					<React.Fragment>
						{sections.map((section, index) => (
							<div className="home-about-section column" key={`about-${index}`}>
								<div className="about-section__img">
									<Image
										alt={section.title}
										fluid={section.img.childImageSharp.fluid}
									/>
								</div>
								<p className="about-section__title">{section.title}</p>
								<p className="about-section__desc">{section.desc}</p>
							</div>
						))}
					</React.Fragment>
				);
			}}
		/>
	);
}
