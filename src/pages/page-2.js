import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const SecondPage = () => {
	const data = useStaticQuery(graphql`
		query PageTwoMarkdownQuery {
			image: file(relativePath: { eq: "vaporeon.png" }) {
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
			<h1>VAPOREON</h1>
			<Image className="gatsbyImage" alt={'Eevee'} fluid={data.image.childImageSharp.fluid} />
		</div>
	);
};
export default SecondPage;
