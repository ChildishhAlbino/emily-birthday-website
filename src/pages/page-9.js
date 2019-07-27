import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
const NinthPage = () => {
	const data = useStaticQuery(graphql`
		query PageNineMarkdownQuery {
			image: file(relativePath: { eq: "sylveon.png" }) {
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
			<h1>SYLVEON</h1>
			<Image alt={'Eevee'} fluid={data.image.childImageSharp.fluid} />
		</div>
	);
};

export default NinthPage;
