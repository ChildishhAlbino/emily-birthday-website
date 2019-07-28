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
			<div>
				<div>
					<h3>Water Type Pokemon | Related Star Signs: Libra, Capricorn</h3>
				</div>
				<p>
					The Vaporeon sign focuses on a calm demeanour, or level-headedness. You can always rely on someone
					who resembles that of Vaporeon to be self-assured and carefully judge any situation that comes their
					way. Vaporeon stans are usually of an older mind than those that do not share such prominence with
					the water-type Eeveelution.
				</p>
				<p>
					Vaporeon stans are the safest of all the other signs during the time of Generation Eightrograde as
					they will always keep their head above water. You may experience some rough tides in the coming
					months, but be sure of yourself and you will pull through.
				</p>
			</div>
		</div>
	);
};
export default SecondPage;
