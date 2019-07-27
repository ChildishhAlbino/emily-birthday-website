import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const FourthPage = () => {
	const data = useStaticQuery(graphql`
		query PageFourMarkdownQuery {
			image: file(relativePath: { eq: "flareon.png" }) {
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
			<h1>FLAREON</h1>
			<Image alt={'Eevee'} fluid={data.image.childImageSharp.fluid} />
		</div>
	);
};

export default FourthPage;
