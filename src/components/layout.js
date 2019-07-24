import React from 'react';
import PropTypes from 'prop-types';
import './layout.scss';
import PageTransition from './transition';
import { useStaticQuery, graphql } from 'gatsby';
import Arrows from './arrows';

const Context = React.createContext();

class ContextProvider extends React.Component {
	state = {
		animation: null,
		changeAnimation: (animation) => {
			this.setState({ animation: animation });
		}
	};
	render() {
		return <Context.Provider value={{ state: this.state }}>{this.props.children}</Context.Provider>;
	}
}

const Layout = ({ children, location }) => {
	const pages = [];
	const data = useStaticQuery(graphql`
		query MyQuery {
			allSitePage {
				edges {
					node {
						path
					}
				}
			}
		}
	`);
	data.allSitePage.edges.forEach((element) => {
		const path = element.node.path;
		if (!path.includes('404')) {
			console.log(path);
			pages.push(path);
		}
	});
	const pageIndex = pages.indexOf(location.pathname);
	let nextPageIndex = pageIndex + 1;
	let previousPageIndex = pageIndex - 1;
	if (pageIndex === 0) {
		previousPageIndex = pages.length - 1;
	}
	if (pageIndex === pages.length - 1) {
		nextPageIndex = 0;
	}
	if (!location.state) {
		location.state = {};
	}
	return (
		<ContextProvider>
			<div className="container">
				<PageTransition location={location}>
					<div className="content">{children}</div>
				</PageTransition>
				<Arrows className="overlay" next={pages[nextPageIndex]} previous={pages[previousPageIndex]} />
			</div>
		</ContextProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
export { Context };
