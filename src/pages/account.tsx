import * as React from 'react';

interface Props {
	title: string;
}

const Account = ({title}:Props) => {
  title = 'Account';
	return (
		<h1>Hello {title} Component</h1>
	);
};

export default Account;