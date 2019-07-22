import React from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/Fa';
import { Link } from 'gatsby';
import './arrows.scss';

const Arrows = (props) => {
	return (
		<main className="container">
			<div className="content">{props.children}</div>
			<div className="overlay">
				<Link to={props.previous}>
					<FaArrowLeft className="arrow" />
				</Link>
				<Link to={props.next}>
					<FaArrowRight className="arrow" />
				</Link>
			</div>
		</main>
	);
};

// Arrows.propTypes = {
// 	children: PropTypes.node.isRequired
// };

export default Arrows;
