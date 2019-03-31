module.exports = {
	siteMetadata: {
		title: 'Kenneth Kwakye-Gyamfi',
		description:
			"Hello. My name is Kenneth. I'm a mobile + web developer currently based in Accra, Ghana and working for getINNOtized GmbH",
		author: 'Kenneth Kwakye-Gyamfi',
		image: '/favicon.jpg',
		social: {
			twitter: '@cross19xx',
			fbAppId: '100009436144652'
		},
		socialUrls: [
			{
				url: 'https://www.facebook.com/profile.php?id=100009436144652',
				className: 'ti-facebook'
			},
			{ url: 'https://www.github.com/cr05s19xx', className: 'ti-github' },
			{ url: 'https://www.twitter.com/cross19xx', className: 'ti-twitter-alt' },
			{ url: 'https://www.instagram.com/kenneth_kwakyegyamfi/', className: 'ti-instagram' },
			{ url: 'https://www.linkedin.com/in/kenneth-kwakye-gyamfi/', className: 'ti-linkedin' }
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
