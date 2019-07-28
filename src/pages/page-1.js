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
				<div>
					<h3>Normal Type Pokemon | Related Star Signs: Aquarius, Virgo</h3>
				</div>
				<p>
					Eevee is the sign of adaptability. It's unstable DNA allow it to quickly and sporadically change
					it's body to suit it's circumstance or environment better. People who prominently represent that of
					Eevee have the greatest hidden potential of any of the Eeviac signs.
				</p>
				<p>
					Eevee stans are potentially going to experience serious changes in the coming months as Pokemon as
					the Sword and Shield cover the Sun and Moon. During this time, you may realise your hidden potential
					and feel more at home with yourself and your Eeviac sign.
				</p>
			</div>
		</div>
	);
};

export default FirstPage;
