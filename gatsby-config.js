module.exports = {
	siteMetadata: {
		title: 'Kenneth Kwakye-Gyamfi',
		description:
			"Hello. I'm Kenneth. I'm a mobile + web developer currently based in Accra, Ghana and working for getINNOtized GmbH",
		author: 'Kenneth Kwakye-Gyamfi'
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
				name: 'Kenneth Kwakye-Gyamfi',
				short_name: 'KKG',
				start_url: '/',
				background_color: '#FFFFFF',
				theme_color: '#FFFFFF',
				display: 'minimal-ui',
				icon: 'src/img/logo.jpg' // This path is relative to the root of the site.
			}
		}
	]
};
