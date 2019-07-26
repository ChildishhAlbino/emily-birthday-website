import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Context } from './layout';
import { slideLeft } from './animations';
const timeout = 550;

class Transition extends React.PureComponent {
	render() {
		const { children, location } = this.props;
		return (
			<Context.Consumer>
				{(context) => {
					const transitionAnimation = context.state.animation || slideLeft;
					return (
						<TransitionGroup>
							<CSSTransition
								key={location.pathname}
								timeout={{
									enter: 0,
									exit: timeout
								}}
							>
								{(status) => {
									return (
										<div
											style={{
												...transitionAnimation[status]
											}}
										>
											{children}
										</div>
									);
								}}
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
