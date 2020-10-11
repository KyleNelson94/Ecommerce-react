import * as React from 'react';

interface Props {
	title: string;
}

const History = ({title}:Props) => {
  title = 'History';
	return (
		<h1>Hello {title} Component</h1>
	);
};

export default History;