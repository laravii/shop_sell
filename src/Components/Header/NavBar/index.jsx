import React, { useState } from 'react';

import {
	ContainerNav,
	ContainerNavBar,
	LogoContainer,
	Navbar,
	NavOptions,
	Icons,
	ReactLogoIcon,
	SearchIcon,
	PersonCircleIcon,
	CartIcon,
	MenuIcon,
} from './styles';
export default function NavBar() {
	const [burguerOpen, setBurguerOpen] = useState(false);

	return (
		<ContainerNav>
			<LogoContainer>
				<ReactLogoIcon size='3rem' />

				<MenuIcon
					size='2rem'
					onClick={() =>
						burguerOpen ? setBurguerOpen(false) : setBurguerOpen(true)
					}
				/>
			</LogoContainer>

			<ContainerNavBar isOpen={burguerOpen}>
				<Navbar>
					<NavOptions to='/'>HOME</NavOptions>
					<NavOptions to='/shop'>SHOP</NavOptions>
					<NavOptions to='/forms-new-product'>FORMS</NavOptions>
				</Navbar>
				<Icons>
					<SearchIcon size='1.5rem' />
					<PersonCircleIcon size='1.5rem' />
					<CartIcon size='1.5rem' />
				</Icons>
			</ContainerNavBar>
		</ContainerNav>
	);
}
