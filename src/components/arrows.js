import React from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'gatsby';
import './arrows.scss';
import { Context } from './layout';
import { slideLeft, slideRight } from './animations';

const Arrows = (props) => {
	return (
		<Context.Consumer>
			{(context) => {
				if (context.state.animating) {
					return <div />;
				} else {
					return (
						<main className="container arrows">
							<div className="content">{props.children}</div>
							<div className="overlay">
								<Link
									onClick={() => {
										context.state.changeAnimation(slideLeft);
									}}
									to={props.previous}
								>
									<FaArrowLeft className="arrow" />
								</Link>
								<Link
									onClick={() => {
										context.state.changeAnimation(slideRight);
									}}
									to={props.next}
								>
									<FaArrowRight className="arrow" />
								</Link>
							</div>
						</main>
					);
				}
			}}
		</Context.Consumer>
	);
};

export default Arrows;
