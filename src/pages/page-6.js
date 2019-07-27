import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const SixthPage = () => {
	const data = useStaticQuery(graphql`
		query PageSixMarkdownQuery {
			image: file(relativePath: { eq: "umbreon.png" }) {
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
			<h1>UMBREON</h1>
			<Image alt={'Eevee'} fluid={data.image.childImageSharp.fluid} />
		</div>
	);
};

export default SixthPage;
