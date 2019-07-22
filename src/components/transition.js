import React from 'react';
import { TransitionGroup, Transition as ReactTransition } from 'react-transition-group';
const timeout = 500;
const getTransitionStyles = {
	entering: {
		position: `absolute`,
		opacity: 0
	},
	entered: {
		transition: `opacity ${timeout}ms ease-in-out`,
		opacity: 1
	},
	exiting: {
		transition: `opacity ${timeout}ms ease-in-out`,
		opacity: 0
	}
};

class Transition extends React.PureComponent {
	render() {
		const { children, location } = this.props;
		return (
			<TransitionGroup>
				<ReactTransition
					key={location.pathname}
					timeout={{
						enter: timeout,
						exit: timeout
					}}
				>
					{(status) => (
						<div
							style={{
								...getTransitionStyles[status]
							}}
						>
							{children}
						</div>
					)}
				</ReactTransition>
			</TransitionGroup>
		);
	}
}
export default Transition;

// credit to -> https://scotch.io/tutorials/animated-page-transitions-in-gatsby-websites#toc-option-1-adding-page-transitions-with-react-transition-group

// I was scratching my head for ages on this one
