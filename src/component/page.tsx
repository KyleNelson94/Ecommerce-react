import * as React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Header from './header/Header';
import SideBar from './sidebar/sidebar';
import { lightTheme } from '../utils/index';
import { GlobalTheme } from '@utils/styleTheme.ts';

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
	background: ${props => props.theme.primaryColor};
	width: 100%;
	height: 100%;
	min-height: 100vh;
	min-width: calc(100vw - ${props => props.theme.sidebarWidth}px);
	margin-left: ${props => props.theme.sidebarWidth}px;
	padding: 0 35px 0 70px;
`;

function Page({children}: Props) {
  return (
    <ThemeProvider theme={ lightTheme }>
      <GlobalTheme />
      <GridContainer>
        <SideBar />
        <Container>
          <Header />
          {children}
        </Container>
      </GridContainer>
    </ThemeProvider>
  );
};

export default Page;
