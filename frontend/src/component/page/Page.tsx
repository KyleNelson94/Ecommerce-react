import * as React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Header from '@component/header/Header';
import Sidebar from '@component/sidebar/Sidebar';
import { GlobalTheme, lightTheme } from '@utils/config/index';

interface Props {
  children: object;
};

const GridContainer = styled.div`

  display: grid;
  grid-template-columns: ${props => props.theme.sidebarWidth}px 1fr;
  min-height: 100vh;
  box-sizing: inherit;
`;

const Container = styled.div`

	position: relative;
	background: ${props => props.theme.white};
	width: 100%;
	height: 100%;
	min-height: 100vh;
	min-width: calc(100vw - ${props => props.theme.sidebarWidth + 17}px);
	margin-left: ${props => props.theme.sidebarWidth}px;
  
  .menu-check {

    display: none;

    &:checked {

      ~ header nav ul li .menu-label span {

        background-color: ${props => props.theme.primaryColor};

        &::before, &::after {

          top: 0;
        }

        &::before {

          transform: rotate(-220deg);
        }

        &::after {

          transform: rotate(220deg);
        }
      }

      ~ .slide-menu {

        transform: translateX(0);
        opacity: 1;
      }
    }
  }
`;

const InnerContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	padding: 2rem 35px 0 70px;
	background: ${props => props.theme.primaryColor};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

function Page({children}: Props) {
  return (
    <ThemeProvider theme={ lightTheme }>
      <GlobalTheme />
      <GridContainer>
        <Sidebar logo={'null'} locations={[]} />
        <Container>
          <input id="menu-check" name="menu-check" className="menu-check" type="checkbox" />
          <Header />
          <InnerContainer>
            {children}
          </InnerContainer>
        </Container>
      </GridContainer>
    </ThemeProvider>
  );
};

export default Page;
