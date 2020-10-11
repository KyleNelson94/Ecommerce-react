import { DefaultTheme, createGlobalStyle } from "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		primaryColor: string;
		secondaryColor: string;
		tertiaryColor: string;
		white: string;
		sidebarWidth: number;
		menuWidth: number;
		speed500: number;
		speed600: number;
		speed800: number;
		transitDefault: string;
		transitCubeBezier: string;
	}
}

export const lightTheme: DefaultTheme = {
	primaryColor: "#F7F7F7",
	secondaryColor: "#001534",
	tertiaryColor: "FF9900",
	white: "#FFFFFF",
	sidebarWidth: 70,
	menuWidth: 30,
	speed500: 500,
	speed600: 600,
	speed800: 800,
	transitDefault: 'ease-in-out',
	transitCubeBezier: 'cubic-bezier(0.075, 0.82, 0.165, 1)'
};

export const GlobalTheme = createGlobalStyle`
	html {

		-moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;
	}

	*, *:before, *:after {

		-moz-box-sizing: inherit; -webkit-box-sizing: inherit; box-sizing: inherit;
		padding: 0;
		margin: 0;
	}

	body {

		margin: 0;
		padding: 0;
		font-size: 1rem;
		line-height: normal;
		-webkit-font-smoothing: antialised;
		font-family: 'Lato', sans-serif;
	}

	h1, h2, h3, h4, h5, span, a, li, button {

		font-family: 'Lato', sans-serif;
	}
`;