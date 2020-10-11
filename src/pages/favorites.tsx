import * as React from 'react';

interface Props {
	title: string;
}

const Favorites = ({title}:Props) => {
  title = 'Favorites';
	return (
		<h1>Hello {title} Component</h1>
	);
};

export default Favorites;