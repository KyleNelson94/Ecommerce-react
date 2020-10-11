import React from 'react';
import Link from "next/link";
import { Container, Navigation } from './styles';

function Header() {
	return (
		<Container>
			<Navigation>
				<ul id="secondary-menu">
					<li>
						<Link href="todaysDeals">Todays Deals</Link>
					</li>
					<li>
						<Link href="/">History</Link>
					</li>
					<li>
						<Link href="todaysDeals">Buy Again</Link>
					</li>
					<li>
						<Link href="todaysDeals">Search</Link>
					</li>
					<li className="secondary-menu">
						<input id="menu-check" name="menu-check" className="menu-check" type="checkbox" />
						<label htmlFor="menu-check" id="menu-label" className="menu-label">
							<span></span>
						</label>
					</li>
				</ul>
			</Navigation>
		</Container>
	);
};

export default Header;