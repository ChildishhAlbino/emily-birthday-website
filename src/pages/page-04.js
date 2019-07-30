import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const FourthPage = () => {
	const data = useStaticQuery(graphql`
		query PageFourMarkdownQuery {
			image: file(relativePath: { eq: "flareon.png" }) {
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
			<h1>FLAREON</h1>
			<Image className="gatsbyImage" alt={'Eevee'} fluid={data.image.childImageSharp.fluid} />
			<div>
				<div>
					<h3>Fire Type Pokemon | Related Star Signs: Leo, Cancer</h3>
				</div>
				<p>
					Fire is the element of human passion. This passion drives those who exhibit the sign of Flareon
					prominently to become natural leaders of society. They are loyal, prideful, and emotionally charged
					- although not irrational.
				</p>
				<p>
					Flareon stans are the most likely to be affected during Generation Eightrograde if something
					negative were to happen. However, they're also the most suited to dealing with hard times and
					helping others who may not be so lucky. You may want to speak with an Espeon or Vaporeon stan for
					comfort and support if you feel your Flareon is burning a little hot.
				</p>
			</div>
		</div>
	);
};

export default FourthPage;
