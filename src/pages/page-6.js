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
			<Image className="gatsbyImage" alt={'Eevee'} fluid={data.image.childImageSharp.fluid} />
			<div>
				<div>
					<h3>Dark Type Pokemon | Related Star Signs: Aquarius, Gemini</h3>
				</div>
				<p>
					Ambition and Ambivertedness are found under the sign of the dark type eveelution - Umbreon. Umbreon
					isn't nefarious by nature, they just know what they want. They aren't particularly social, but they
					aren't antisocial either. Umbreon stans are exactly what the situation calls of them.
				</p>
				<p>
					Umbreon stans should be careful of tunnel-visoning too heavily on success during Generation
					Eighgtrograde as it might lead to problematic relationships in the future. Flareon stans are the
					perfect companion throughout this hard time.
				</p>
			</div>
		</div>
	);
};

export default SixthPage;
