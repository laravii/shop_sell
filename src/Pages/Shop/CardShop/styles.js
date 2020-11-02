import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerCard = styled.div`
	width: 100vw; 
	grid-area: ITEMS;
	display: grid;
	align-items: center;
	justify-content: center;
	gap: 20px;

	position:relative;

	@media (min-width: 769px) and (max-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1025px) and (max-width: 2560px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const FlexCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Product = styled.img`
	height: 300px;
`;
export const ProductDescriptions = styled.div`
	height: 60px;
	flex: 1;
`;

export const ProductSubDescription = styled.p`
	color: var(--gray);
	font-size: 0.8rem;
`;

export const ProductDescription = styled.h4``;

export const SetProduct = styled.div`
	display: flex;
	align-items: center;
	font-size: 0.8rem;
`;

export const ProductSet = styled(Link)`
	text-decoration: none;
	:hover {
		cursor: pointer;
	}
	color: var(--gray);
	margin: 0 10px;
`;

export const ProductDelet = styled.a`
	text-decoration: none;
	:hover {
		cursor: pointer;
	}
	color: var(--gray);
	margin: 0 10px;
`;

export const Modal = styled.div`
	background-color: rgba(221, 221, 221, 0.5 );
	position: absolute;

	z-index: 1;
	width: 100%;
	height: 100%;

	display: ${({ isModal }) => isModal ? 'flex' : 'none'};
	flex-direction: column;

	align-items: center;
	justify-content: flex-start;
`;

export const ModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	margin-top:20px;

	z-index: 2;

	background-color: white;
	border-radius: 10px;
	
	width: 40%;
`

export const ModalText = styled.h4`
	margin-top:20px;
`

export const Confirm = styled.div`
	display: flex;
	flex-direction: ${({ btn }) => btn ? 'row' : 'column'};

	align-items: center;
	justify-content: center;

	width: 100%;
`;

export const ConfirmBtn = styled.button`
	background-color: var(--blue);
	color: var(--white);

	border: none;	
	border-radius: 10px;

	width: 100px;
	padding: 5px;
	margin: 10px 30px;
`;
