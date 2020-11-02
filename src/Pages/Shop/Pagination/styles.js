import styled from 'styled-components';

export const ContainerFlex = styled.div`
	grid-area: PAGINATION;
	padding: 40px 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Btn = styled.button`
	padding: 10px;
	background: transparent;
	border: 0.2px solid ${({ isActive }) => isActive ? `var(--blue)` : `var(--gray-border)`};
	color: ${({ isActive }) => isActive ? `var(--blue)` : `var(--black)`};
`;
