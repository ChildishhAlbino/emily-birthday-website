import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
const timeout = 550;
const def = {
	entering: {
		position: `fixed`,
		left: -2000,
		transition: `left ${timeout}ms ease-in-out`,
		width: '100vw'
	},
	entered: {
		position: `fixed`,
		left: 0,
		transition: `left ${timeout}ms ease-in-out`,
		width: '100vw'
	},
	exiting: {
		position: `fixed`,
		left: 2000,
		transition: `left ${timeout}ms ease-in-out`,
		width: '100vw'
	}
};

class Transition extends React.PureComponent {
	render() {
		const { children, location } = this.props;
		const transitionAnimation = location.state.animation || def;
		console.log(transitionAnimation);
		return (
			<TransitionGroup>
				<CSSTransition
					key={location.pathname}
					timeout={{
						enter: 0,
						exit: timeout
					}}
				>
					{(status) => (
						<div
							style={{
								...transitionAnimation[status]
							}}
						>
							{children}
						</div>
					)}
				</CSSTransition>
			</TransitionGroup>
		);
	}
}
export default Transition;

// credit to -> https://scotch.io/tutorials/animated-page-transitions-in-gatsby-websites#toc-option-1-adding-page-transitions-with-react-transition-group

// I was scratching my head for ages on this one
