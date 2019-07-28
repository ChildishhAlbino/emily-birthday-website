import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
const SeventhPage = () => {
	const data = useStaticQuery(graphql`
		query PageSevenMarkdownQuery {
			image: file(relativePath: { eq: "leafeon.png" }) {
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
			<h1>LEAFEON</h1>
			<Image className="gatsbyImage" alt={'Eevee'} fluid={data.image.childImageSharp.fluid} />
			<div>
				<div>
					<h3>Grass Type Pokemon | Related Star Signs: Scorpio, Pisces</h3>
				</div>
				<p>
					Leafeon is the sign of affection. Humans who align with Leafeon's qualities are likely to be the
					most naturally empathetic and emotionally expressive. Leafeon stans are of the grass element and
					therefore, they have a special connection with nature. They are lively by nature and enjoy music,
					but are not by any means the most desire-driven of all the signs. Leafeon stans are very often
					content with happiness as they define it.
				</p>
				<p>
					Leafeon stans should find a rock during Generation Eightrograde. Affection can be forgotten when
					times get tough and those that do not are worth keeping. Leafeon stans work best when surrounded by
					Espeon and Jolteon stans.
				</p>
			</div>
		</div>
	);
};
export default SeventhPage;
