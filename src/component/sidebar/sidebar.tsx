import React from 'react';
import styled from 'styled-components';
import LogoIcon from '../../asset/icon/logo.png';

const Bar = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: ${props => props.theme.sidebarWidth}px;
	height: 100vh;
	background: ${props => props.theme.white};
	text-align: center;
	padding: 30px 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;
//<Logo src={LogoIcon} />
const Logo = styled.img`
	width: 37px;
	height: 33px;
	margin: 0 auto;
	text-align: center;
`;

const SideBar = () => {
	return (
		<Bar>
					
		</Bar>
	);
}

export default SideBar;