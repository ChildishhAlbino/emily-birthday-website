import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
const EighthPage = () => {
	const data = useStaticQuery(graphql`
		query PageEightMarkdownQuery {
			image: file(relativePath: { eq: "glaceon.png" }) {
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
			<h1>GLACEON</h1>
			<Image className="gatsbyImage" alt={'Eevee'} fluid={data.image.childImageSharp.fluid} />
			<div>
				<div>
					<h3>Ice Type Pokemon | Related Star Signs: Capricorn, Libra</h3>
				</div>
				<p>
					Glaceon comes from ice - one of the most extreme elements in our world. This is represented by those
					who find themselves expressing the qualities of bluntness and experiencing high highs and low lows.
					When a person's Glaceon-esque qualities are unbalanced - that person is likely to experience a
					rollercoaster of emotions and mental states.
				</p>
				<p>
					Glaceon stans; it's going to be okay. While Generation Eightrograde isn't going to be the most
					comfortable experience, it will be over soon enough as long as you have a core you trust. Grounded
					people are the closest to Glaceon stans and so a friendship or more with Vaporeon and Espeon stans
					should serve you well.
				</p>
			</div>
		</div>
	);
};

export default EighthPage;
