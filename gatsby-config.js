const path = require(`path`);

module.exports = {
	siteMetadata: {
		title: `Happy Birthday Emily!!!`,
		description: `A Birthday Site for Emily!!`,
		author: `@ChildishhAlbino`
	},
	plugins: [
		`gatsby-plugin-mdx`,
		{
			resolve: 'gatsby-plugin-buildtime-timezone',
			options: {
				tz: 'Australia/Sydney',
				format: 'dddd[,] MMMM Do[,] YYYY[,] h:mm:ss a'
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: path.join(__dirname, `src`, `images`)
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `markdown`,
				path: path.join(__dirname, `src`, `markdown`)
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		`gatsby-transformer-remark`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-layout`,
			options: {
				component: require.resolve(`./src/components/layout.js`)
			}
		}

		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
