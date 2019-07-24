import React from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'gatsby';
import './arrows.scss';

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
		<main className="container arrows">
			<div className="content">{props.children}</div>
			<div className="overlay">
				<Link to={props.previous} state={{ animation: slideLeft }}>
					<FaArrowLeft className="arrow" />
				</Link>
				<Link to={props.next} state={{ animation: slideRight }}>
					<FaArrowRight className="arrow" />
				</Link>
			</div>
		</main>
	);
};

export default Arrows;
