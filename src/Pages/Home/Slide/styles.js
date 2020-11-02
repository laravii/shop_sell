import styled from 'styled-components';

import { RightArrow } from '@styled-icons/boxicons-solid/RightArrow';
import { LeftArrow } from '@styled-icons/boxicons-solid/LeftArrow';

export const BeforeTitle = styled.p`
	font-weight: 400;
	font-size: 1.2rem;
	margin-bottom: 18px;
`;

export const Title = styled.h1`
	margin-top: 18px;
	margin-bottom: 18px;
`;

export const Text = styled.p`
	margin-top: 18px;
	margin-bottom: 18px;
	padding: 30px;
`;

export const Btn = styled.button`
	padding: 10px;
	background-color: var(--white);
	color: black;
	margin-top: 18px;
	margin-bottom: 18px;
	border: none;
`;

export const ContainerSlides = styled.div`
	width:  100%;
	height: auto;
	display: flex;
	align-items: center;

	overflow-x: hidden;

	-webkit-overflow-scrolling: touch;

	::-webkit-scrollbar-thumb {
		display: none;
	}
	::-webkit-scrollbar-track {
		background: transparent;
	}

	> div:nth-child(2) ${BeforeTitle} {
		display: none;
	}
	> div:nth-child(3) ${Text} {
		display: none;
	}
`;

export const Slides = styled.div`
	width: 100vw;
	height: 600px;
	padding: 20px;

	flex: none;

	background-image: url(${(props) => props.slideImg});
	background-size: cover;
	background-position: center;

	object-fit: cover;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	position: relative;

	color: var(--white);

	transition: 0.5s;
`;

export const GoToBtn = styled.button`
	position: absolute;
	${(props) => (props.left ? 'left' : 'right')}: 0;
	width: 3rem;
	background: none;
	border: none;
`;

export const Previous = styled(LeftArrow)`
	width: 3rem;
	height: 2rem;
	color: #fff;
	transition: color .8s;
	:hover {
		color: #000;
	}
`;

export const Next = styled(RightArrow)`
	width: 3rem;
	height: 2rem;
	color: #fff;
	transition: color .8s;
	:hover {
		color: #000;
	}
`;
