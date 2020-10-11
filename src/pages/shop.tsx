import * as React from 'react';

interface Props {
	title: string;
}

const Shop = ({title}:Props) => {
  title = 'Shop';
	return (
		<h1>Hello {title} Component</h1>
	);
};

export default Shop;