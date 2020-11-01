import * as React from 'react';
import Hero from '@component/hero/Hero';

interface Props {
	query: any;
};

const Home = ({ query } :Props) => {
	return (
		<>
			<Hero title="Amazon's latest product" btnText="Click here!" />
		</>
	);
}

export default Home;