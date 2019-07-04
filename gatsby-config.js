module.exports = {
	siteMetadata: {
		title: 'boanit | security consulting',
		description:
			'homepage',
		author: 'boanit',
		image: '/favicon.jpg',
		social: {
			twitter: '@zero6pak',
			fbAppId: '1073918966083609'
		},
		socialUrls: [
			{
				url: '#',
				className: 'fab fa-facebook',
				containerClass: 'facebook'
			},
			{
				url: '#',
				className: 'fab fa-github',
				containerClass: 'github'
			},
			{
				url: '#',
				className: 'fab fa-twitter',
				containerClass: 'twitter'
			},
			{
				url: '#',
				className: 'fab fa-instagram',
				containerClass: 'instagram'
			},
			{
				url: '#',
				className: 'fab fa-linkedin',
				containerClass: 'linkedin'
			}
		]
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/img`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'boanit',
				short_name: 'bit',
				start_url: '/',
				background_color: '#FFFFFF',
				theme_color: '#FFFFFF',
				display: 'minimal-ui',
				icon: 'src/img/logo.jpg' // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-138977349-1'
			}
		}
	]
};
