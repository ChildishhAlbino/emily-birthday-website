import React from 'react';
import './layout.scss';
import PageTransition from './transition';
import { StaticQuery, graphql } from 'gatsby';
import Arrows from './arrows';
import moment from 'moment';
import Timer from '../components/timer';
import { slideLeft } from './animations';
const Context = React.createContext();
const countdownDate = process.env.NODE_ENV === 'development' ? moment('2019-07-27T22:42') : moment('2019-08-01');
class ContextProvider extends React.Component {
	state = {
		animation: slideLeft,
		animating: false,
		changeAnimation: (animation) => {
			this.setState({ animation: animation, animating: true });
			setTimeout(this.state.toggleAnimating, 700);
		},
		toggleAnimating: () => {
			this.setState({ animating: !this.state.animating });
		},
		countdownDate: countdownDate,
		countingDown: true,
		setCountingDown: (countdownState) => {
			this.setState({ countingDown: countdownState });
		}
	};
	render() {
		return <Context.Provider value={{ state: this.state }}>{this.props.children}</Context.Provider>;
	}
}

const Layout = ({ children, location }) => {
	return (
		<ContextProvider>
			<div>
				<Context.Consumer>
					{(context) => {
						if (context.state.countingDown && moment().isSameOrBefore(context.state.countdownDate)) {
							return (
								<main>
									<Timer countdownDate={context.state.countdownDate} />
								</main>
							);
						} else {
							return (
								<StaticQuery
									query={graphql`
										query PagesPathQuery {
											allSitePage {
												edges {
													node {
														path
													}
												}
											}
										}
									`}
									render={(data) => {
										const pages = [];
										data.allSitePage.edges.forEach((element) => {
											const path = element.node.path;
											if (!path.includes('404')) {
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
											<main className="container">
												<PageTransition location={location}>
													<div className="content">{children}</div>
												</PageTransition>
												<Arrows
													className="overlay"
													next={pages[nextPageIndex]}
													previous={pages[previousPageIndex]}
												/>
											</main>
										);
									}}
								/>
							);
						}
					}}
				</Context.Consumer>
			</div>
		</ContextProvider>
	);
};

export default Layout;
export { Context };
