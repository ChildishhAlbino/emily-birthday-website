import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const FirstPage = () => {
	const data = useStaticQuery(graphql`
		query PageOneMarkdownQuery {
			image: file(relativePath: { eq: "eevee.png" }) {
				childImageSharp {
					fluid(maxWidth: 150) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<div className="main">
			<h1>EEVEE</h1>
			<div className="image">
				<Image alt={'Eevee'} fluid={data.image.childImageSharp.fluid} />
			</div>
		</div>
	);
};

export default FirstPage;
