import * as React from "react";
import Link from 'next/link';
import {Bar, Logo} from './styles';
import { 
	AccountIcon,
	ShopIcon,
	DeliveryIcon,
	FavoritesIcon,
	LocationIcon,
	GlobalIcon,
	GiftIcon
} from '@component/icons/index';
// LogoIcon from '../../asset/icon/logo.png';

interface Props {
	logo: string;
	locations: [];
}

function Sidebar ({logo, locations}:Props) {
	return (
		<Bar>
			<Link href="/">
				<Logo src="/icon/logo.png" />
			</Link>
			<ul>
				<li>
					<Link href="account">
						<AccountIcon />
					</Link>
				</li>
				<li>
					<Link href="shop">
						<ShopIcon />
					</Link>
				</li>
				<li>
					<Link href="delivery">
						<DeliveryIcon />
					</Link>
				</li>
				<li>
					<Link href="favorites">
						<FavoritesIcon />
					</Link>
				</li>
				<li>
					<Link href="favorites">
						<LocationIcon />
					</Link>
				</li>
				<li>
					<Link href="favorites">
						<GlobalIcon />
					</Link>
				</li>
				<li>
					<Link href="gift">
						<GiftIcon />
					</Link>
				</li>
			</ul>
		</Bar>
	);
};

export default Sidebar;