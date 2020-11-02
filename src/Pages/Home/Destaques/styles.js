import styled from 'styled-components';
import { RightArrowAlt } from '@styled-icons/boxicons-regular/RightArrowAlt';

export const Icon = styled(RightArrowAlt)`
	size: 2rem;
`;

export const Container = styled.div`
	width: 100vw;
	display: grid;
	gap: 10px;

	@media (min-width: 320px) and (max-width: 480px) {
		grid-template-rows: repeat(5, 300px);
	}

	@media (min-width: 481px) and (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		> div:nth-child(1),
		div:nth-child(2) {
			height: 200px;
		}

		> div:nth-child(3),
		div:nth-child(4),
		div:nth-child(5) {
			grid-column: 1/-1;
			height: 350px;
		}
	}

	@media (min-width: 769px) and (max-width: 1024px),
		(min-width: 1025px) and (max-width: 2560px) {
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(2, auto);
		grid-template:
			'D1 D1 D1 D2 D2 D2' 400px
			'D3 D3 D4 D4 D5 D5' 350px;

		> div:nth-child(1) {
			grid-area: D1;
		}
		> div:nth-child(2) {
			grid-area: D2;
		}
		> div:nth-child(3) {
			grid-area: D3;
		}
		> div:nth-child(4) {
			grid-area: D4;
		}
		> div:nth-child(5) {
			grid-area: D5;
		}
	}
	> div:nth-child(3),
	div:nth-child(4) h1 {
		font-size: 3rem;
		font-weight: 600;
		color: #fff;
	}
	> div:nth-child(5) h1 {
		font-size: 3rem;
		font-weight: 600;
		color: #000;
	}
	> div:nth-child(1) button {
		border: 1px solid #fff;
		background-color: #fff;
		color: #000;
	}
	> div:nth-child(2) button {
		border: 1px solid #fff;
		background-color: #fff;
		color: #000;
	}
	> div:nth-child(3) button {
		border: none;
		background-color: transparent;
		color: white;
	}
	div:nth-child(4) button {
		border: none;
		background-color: transparent;
		color: white;
	}
	> div:nth-child(5) button {
		border: none;
		background-color: transparent;
		color: black;
	}

	> div:nth-child(1) ${Icon} {
		display: none;
	}
	> div:nth-child(2) ${Icon} {
		display: none;
	}
`;

export const Destaque = styled.div`
	background-image: url(${(props) => props.imgUrl});
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const TitleDestaque = styled.h1`
	font-size: 3rem;
	font-weight: 900;
	color: #fff;
`;

export const BtnDestaque = styled.button`
	margin: 15px;
	padding: 15px;
	border: none;
`;
