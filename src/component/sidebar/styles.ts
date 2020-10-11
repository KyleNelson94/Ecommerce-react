import styled from 'styled-components';

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
	justify-content: flex-start;

	ul {
		list-style: none;
		margin: 3rem 0;

		li {

			margin: 2rem 0;
			display: block;
			cursor: pointer;

			a {
				display: block;
			}
		}
	}
`;
//<Logo src={LogoIcon} />
const Logo = styled.img`
	width: 37px;
	height: 33px;
	margin: 0 auto;
	text-align: center;
	cursor: pointer;
`;

export {Bar, Logo};