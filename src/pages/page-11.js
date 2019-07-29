import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
const EleventhPage = () => {
	const data = useStaticQuery(graphql`
		query PageElevenMarkdownQuery {
			image: file(relativePath: { eq: "kda-emily.png" }) {
				childImageSharp {
					fluid(maxWidth: 3940, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<div className="page">
			<h1>INTRODUCING... K/DA EMILY</h1>
			<Image className="gatsbyImage" alt={'Eevee'} fluid={data.image.childImageSharp.fluid} />
			<p>Artwork by ShyGirl @ Sketchmob</p>
			<a href="https://i.imgur.com/m83JUgg.png">Click here to open in a new tab to download.</a>
		</div>
	);
};

export default EleventhPage;
