import * as React from 'react';

interface Props {
	title: string;
	query: any;
};

const Home = ({query, title}:Props) => {
	title = "Home";
	return (
		<h1>Hello {title} Component</h1>
	);
}

export default Home;