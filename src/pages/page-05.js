import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
const FifthPage = () => {
	const data = useStaticQuery(graphql`
		query PageFiveMarkdownQuery {
			image: file(relativePath: { eq: "espeon.png" }) {
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
			<h1>ESPEON</h1>
			<Image className="gatsbyImage" alt={'Eevee'} fluid={data.image.childImageSharp.fluid} />
			<div>
				<div>
					<h3>Psychic Type Pokemon | Related Star Signs: Taurus, Virgo</h3>
				</div>
				<p>
					Espeon is the sign of grounded-ness and logic. They are reasonable and practical thinkers, although
					they tend to be emotionally inertial if rubbed the wrong way. People who exhibit their Espeon-esque
					qualities at the forefront are friends for life and naturally suited for shouldering the weight that
					life puts on your back. A person's Espeon-like qualities will compel them to protect those they care
					about even to a fault.
				</p>
				<p>
					Espeon stans should be focused on maintaining their own mental state; as it is easy for them to
					become lazy and discouraged, during Generation Eightrograde - a converation with a Vaporeon or an
					Umbreon stan might help this process. Do not abandon those you hold close, but be careful not to let
					their problems consume you too.
				</p>
			</div>
		</div>
	);
};

export default FifthPage;
