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
			<Image className="gatsbyImage" alt={'Eevee'} fluid={data.image.childImageSharp.fluid} />
			<div>
				<div>
					<h3>Fairy Type Pokemon | Related Star Signs: All</h3>
				</div>
				<p>
					Sylveon is the most magical of all the Eeviac signs, as well as the one with the youngest mind.
					Sylveon stans are optimism incarnate and naturally beautiful beings. A strong expression of one's
					Sylveonic traits becomes apparent within seconds of meeting one.
				</p>
				<p>
					Sylveon stans are the least experienced with the rough times that occur during Generation
					Eightrograde. Their optimism brings those who align more directly with the other Eeviac signs find
					themselves smiling at the thought of being so young once again. A playful friend for all who just
					needs a guiding hand in life. Sylveon stans should console Vaporeon, Espeon, and Flareon stans for
					advice, and will have an especially strong bond with Jolteon stans.
				</p>
			</div>
		</div>
	);
};

export default NinthPage;
