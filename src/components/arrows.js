import React from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'gatsby';
import './arrows.scss';
import { Context } from './layout';

const timeout = 550;
const slideLeft = {
	title: 'slideLeft',
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

const slideRight = {
	title: 'slideRight',
	entering: {
		position: `fixed`,
		left: 2000,
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
		left: -2000,
		transition: `left ${timeout}ms ease-in-out`,
		width: '100vw'
	}
};

const Arrows = (props) => {
	return (
		<Context.Consumer>
			{(context) => {
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
			}}
		</Context.Consumer>
	);
};

export default Arrows;
