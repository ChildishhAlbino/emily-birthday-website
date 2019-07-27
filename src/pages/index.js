import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Markdown from '../markdown/test.mdx';
const IndexPage = () => {
	const data = useStaticQuery(graphql`
		query PageOneMarkdownQuery {
			image: file(relativePath: { eq: "kda-emily.png" }) {
				childImageSharp {
					fluid(maxWidth: 2000) {
						...GatsbyImageSharpFluid
					}
				}
			}
			post: file(relativePath: { regex: "/test.mdx/" }) {
				childMdx {
					rawBody
					body
				}
			}
		}
	`);

	return (
		<div>
			<Markdown />
		</div>
	);
};

export default IndexPage;
