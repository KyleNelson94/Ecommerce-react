import * as React from 'react';

interface Props {
	title: string;
}

const TodaysDeals = ({title}:Props) => {
  title = 'Todays Deals';
	return (
		<h1>Hello {title} Component</h1>
	);
};

export default TodaysDeals;