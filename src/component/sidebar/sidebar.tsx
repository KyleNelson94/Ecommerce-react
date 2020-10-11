import React from 'react';
import {Bar, Logo} from './styles';
// LogoIcon from '../../asset/icon/logo.png';

interface Props {
	logo: string;
	locations: [];
}

const SideBar = ({logo, locations}: Props) => (
	<Bar>
	</Bar>
);

export default SideBar;