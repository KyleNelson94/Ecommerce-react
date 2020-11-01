import * as React from 'react';

interface Props {
	title: string;
}

const Gift = ({title}:Props) => {
  title = 'Gift';
	return (
		<h1>Hello {title} Component</h1>
	);
};

export default Gift;