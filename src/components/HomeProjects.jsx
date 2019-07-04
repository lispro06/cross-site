/*
 * @Author: Kenneth Kwakye-Gyamfi
 * @Date: 2019-04-11 17:30:07
 * @Last Modified by: Kenneth Kwakye-Gyamfi
 * @Last Modified time: 2019-04-28 17:28:15
 */
import React from 'react';

const projects = [
	{
		id: 1,
		name: 'Kakao Chatbot',
		description:
			'chatbot with google product',
		type: 'Cloud',
		img: 'https://boanit.kr/assets/image/contact.jpg',
		url: 'https://pf.kakao.com/_xlwrJC'
	},
	{
		id: 2,
		name: 'Guide',
		type: 'Mobile',
		description: 'Guide production',
		img: 'https://boanit.kr/assets/img/guide.png',
		url: 'https://boanit.kr/pen/jstl-xss-prevention'
	},
	{
		id: 3,
		name: 'Technical Blog',
		type: 'Website + Mobile + IoT',
		description: "technical blog.",
		img: 'https://boanit.kr/assets/image/mobile2.jpg',
		url: 'https://boanit.kr/pen/'
	}
];

function HomeProjects() {
	const renderProjects = () => {
		return projects.map(project => (
			<div
				key={project.id}
				className="home-project"
				style={{ backgroundImage: `url(${project.img})` }}>
				{project.inProgress && (
					<span
						className="home-project__ip"
						title="This project is currently being developed">
						In progress
					</span>
				)}

				<div className="home-project__inner">
					<p className="home-project__title">{project.name}</p>
					<p className="home-project__type">{project.type}</p>
					<p className="home-project__desc">{project.description}</p>

					<a
						target="_blank"
						href={project.url}
						rel="noopener noreferrer"
						className="home-project__learn">
						Learn more
					</a>
				</div>
			</div>
		));
	};

	return (
		<div className="home-projects">
			<div className="grid pad-grid">
				<h2 className="home-projects__title">Stuff we&apos;ve worked on</h2>
				<p className="home-projects__subtitle">
					These are the things We&apos;re worked on.
				</p>

				<div className="home-projects__container">{renderProjects()}</div>
			</div>
		</div>
	);
}

export default React.memo(HomeProjects);
