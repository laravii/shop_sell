import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { ReactLogo } from '@styled-icons/simple-icons/ReactLogo';
import { Search } from '@styled-icons/bootstrap/Search';
import { PersonCircle } from '@styled-icons/bootstrap/PersonCircle';
import { Cart } from '@styled-icons/bootstrap/Cart';
import { Menu } from '@styled-icons/boxicons-regular/Menu';

export const ContainerNav = styled.div`
display: grid;
grid-template:
'menuh'
'menun';

	top: 50px;
	
	padding: 20px;
	background-color: var(--light);
	color: var(--white);
	transition: background-color color 0.8s;
	transition: color 0.8s;


	
	:hover {
		background: var(--white);
		color: black;
	}

`;

export const LogoContainer = styled.div`
grid-area: menuh;
display: block;
	@media (min-width: 320px) and (max-width: 479px),
		(min-width: 480px) and (max-width: 767px) {
		display: flex;
		align-items: center;
		justify-content: space-between;

	}
`;

export const ContainerNavBar = styled.div`
grid-area: menun;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (min-width: 320px) and (max-width: 479px),
		(min-width: 480px) and (max-width: 767px) {
		display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
		flex-direction: column;
		justify-content: center;
	}
`;

export const Navbar = styled.div`
	padding: 10px;
	@media (min-width: 320px) and (max-width: 479px),
		(min-width: 480px) and (max-width: 767px) {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: center;
	}
`;

export const NavOptions = styled(Link)`
	font-weight: 600;
	margin-left: 15px;
	margin-right: 15px;
`;

export const Icons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 20px;
	gap: 10px;
	@media (min-width: 320px) and (max-width: 479px),
		(min-width: 480px) and (max-width: 767px) {
		margin: 10px;
		justify-content: center;
	}
`;

export const ReactLogoIcon = styled(ReactLogo)``;

export const CartIcon = styled(Cart)``;

export const PersonCircleIcon = styled(PersonCircle)``;

export const SearchIcon = styled(Search)``;

export const MenuIcon = styled(Menu)`
	display: none;
	width: 2rem;
	height: 2rem;
	@media (min-width: 320px) and (max-width: 479px),
		(min-width: 480px) and (max-width: 767px) {
		display: block;
	}
`;
