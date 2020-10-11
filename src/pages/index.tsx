import React from 'react';
import styled from 'styled-components';

interface Props {
	label: string;
	query: any;
}

const Container = styled.div`
	position: relative;
`;

const Home = ({query, label}:Props) => {
	console.log('Page Query 4 index ----------------------->', query);
	return (
		<Container>
			<h1>Hello Home Component</h1>
		</Container>
	);
}

export default Home;