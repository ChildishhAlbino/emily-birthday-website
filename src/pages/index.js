import React from 'react';
import Arrows from '../components/arrows';

const IndexPage = () => (
	<Arrows previous={'/page-2/'} next={'/page-2/'}>
		<div>
			<h1>THIS IS PAGE ONE</h1>
		</div>
	</Arrows>
);

export default IndexPage;
