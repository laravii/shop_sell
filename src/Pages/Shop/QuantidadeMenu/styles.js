import styled from 'styled-components';

export const Container = styled.div`
	grid-area: QUANT;

	padding: 10px;
	display: grid;
	> div:nth-child(1) {
		grid-area: Sh;
	}
	> div:nth-child(2) {
		grid-area: Sh1;
	}
	> div:nth-child(3) {
		grid-area: S;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		grid-template:
			'Sh'
			'Sh1'
			'S';
	}
	@media (min-width: 481px) and (max-width: 768px) {
		grid-template:
			'Sh Sh1' 40px
			'S S' 40px;
	}

	@media (min-width: 769px) and (max-width: 1024px),
		(min-width: 1025px) and (max-width: 2560px) {
		display: flex;
		justify-content: space-evenly;
	}
`;

export const Showing = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`;

export const ShowingButton = styled.button`
	padding: 10px;
	background: transparent;
	border: 0.2px solid var(--gray-border);
	color: var(--dark);
`
