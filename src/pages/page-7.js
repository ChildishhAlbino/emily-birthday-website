import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
const SeventhPage = () => {
	const data = useStaticQuery(graphql`
		query PageSevenMarkdownQuery {
			image: file(relativePath: { eq: "leafeon.png" }) {
				childImageSharp {
					fluid(maxWidth: 1280) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<div className="page">
			<h1>LEAFEON</h1>
			<Image className="gatsbyImage" alt={'Eevee'} fluid={data.image.childImageSharp.fluid} />
		</div>
	);
};
export default SeventhPage;
