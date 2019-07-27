import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
const FirstPage = () => {
	const data = useStaticQuery(graphql`
		query PageOneMarkdownQuery {
			image: file(relativePath: { eq: "eevee.png" }) {
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
			<h1>EEVEE</h1>
			<Image className="gatsbyImage" alt={'Eevee'} fluid={data.image.childImageSharp.fluid} />
			<div>
				<p>Type: Normal </p>
			</div>
		</div>
	);
};

export default FirstPage;
