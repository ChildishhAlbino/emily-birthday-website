import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const ThirdPage = () => {
	const data = useStaticQuery(graphql`
		query PageThreeMarkdownQuery {
			image: file(relativePath: { eq: "jolteon.png" }) {
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
			<h1>JOLTEON</h1>
			<Image className="gatsbyImage" alt={'Eevee'} fluid={data.image.childImageSharp.fluid} />
			<div>
				<div>
					<h3>Electric Type Pokemon | Related Star Signs: Sagittarius, Aries</h3>
				</div>
				<p>
					Jolteon comes from electricity - a spark that drives people to do more than just live a normal life.
					This Eeviac sign embodies the human quality of creativity and spontaneity. Jolteon stans are often
					found sporadically making major life decisions and rolling with it.
				</p>
				<p>
					Jolteon stans might suffer from a lack-of-forethought during Generation Eightrograde. Although they
					are used to getting in over their heads, the consequences of such a careless decision could be
					significant.
				</p>
			</div>
		</div>
	);
};

export default ThirdPage;
