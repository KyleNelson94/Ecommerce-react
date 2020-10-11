import * as React from 'react';
import Link from "next/link";
import { Container, Navigation, SideNav } from './styles';

function Header() {
	return (
		<React.Fragment>
			<Container>
				<Navigation>
					<ul id="secondary-menu">
						<li>
							<Link href="todaysDeals">Todays Deals</Link>
						</li>
						<li>
							<Link href="history">History</Link>
						</li>
						<li>
							<Link href="todaysDeals">Buy Again</Link>
						</li>
						<li>
							<Link href="todaysDeals">Search</Link>
						</li>
						<li className="secondary-menu">
							<label htmlFor="menu-check" id="menu-label" className="menu-label">
								<span></span>
							</label>
						</li>
					</ul>
				</Navigation>
			</Container>
			<SideNav className="slide-menu">
				<nav>
					<ul>
						<li>
							<Link href="/">Page Link</Link>
						</li>
						<li>
							<Link href="/">Page Link</Link>
						</li>
						<li>
							<Link href="/">Page Link</Link>
						</li>
						<li>
							<Link href="/">Page Link</Link>
						</li>
						<li>
							<Link href="/">Page Link</Link>
						</li>
						<li>
							<Link href="/">Page Link</Link>
						</li>
					</ul>
				</nav>
			</SideNav>
		</React.Fragment>
	);
};

export default Header;