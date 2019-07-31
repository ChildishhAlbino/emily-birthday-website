import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
const EleventhPage = () => {
	const data = useStaticQuery(graphql`
		query PageElevenMarkdownQuery {
			image: file(relativePath: { eq: "kda-emily-cropped.png" }) {
				childImageSharp {
					fluid(maxWidth: 1924) {
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

			<a target="_blank" rel="noopener noreferrer" href="https://i.imgur.com/C5VSRmX">
				Click the link to download!
			</a>
		</div>
	);
};

export default EleventhPage;
