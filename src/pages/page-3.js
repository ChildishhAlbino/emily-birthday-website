import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const ThirdPage = () => {
	const data = useStaticQuery(graphql`
		query PageThreeMarkdownQuery {
			image: file(relativePath: { eq: "jolteon.png" }) {
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
			<h1>JOLTEON</h1>
			<Image alt={'Eevee'} fluid={data.image.childImageSharp.fluid} />
		</div>
	);
};

export default ThirdPage;
