import * as React from 'react';

interface Props {
	title: string;
}

const Delivery = ({title}:Props) => {
  title = 'Delivery';
	return (
		<h1>Hello {title} Component</h1>
	);
};

export default Delivery;