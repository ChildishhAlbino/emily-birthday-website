import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Context } from './layout';

const timeout = 550;
const defaultAnimation = {
	entering: {
		position: `absolute`,
		left: -2000,
		transition: `left ${timeout}ms ease-in-out`,
		width: '100vw'
	},
	entered: {
		position: `absolute`,
		left: 0,
		transition: `left ${timeout}ms ease-in-out`,
		width: '100vw'
	},
	exiting: {
		position: `absolute`,
		left: 2000,
		transition: `left ${timeout}ms ease-in-out`,
		width: '100vw'
	}
};

class Transition extends React.PureComponent {
	render() {
		const { children, location } = this.props;
		return (
			<Context.Consumer>
				{(context) => {
					const transitionAnimation = context.state.animation || defaultAnimation;
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
				}}
			</Context.Consumer>
		);
	}
}
export default Transition;

// credit to -> https://scotch.io/tutorials/animated-page-transitions-in-gatsby-websites#toc-option-1-adding-page-transitions-with-react-transition-group

// I was scratching my head for ages on this one

// Context consumer allows state to be passed up and down between parent and child elements easily.
