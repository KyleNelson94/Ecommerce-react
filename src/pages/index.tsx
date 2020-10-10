import React from 'react';
import styled from 'styled-components';

interface Props {
	label: string;
}

const Container = styled.div`

	position: relative;
`;

const Home = props => {

	console.log("Give me the index props ---------------->", props);
	return (
		<Container>
			<h1>Hello Home Component</h1>
		</Container>
	);
}

export default Home;