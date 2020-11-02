import styled from 'styled-components';

export const ContainerShop = styled.div`
	width: 100%;
	margin-top: 30px;
	display: grid;

	@media (min-width: 320px) and (max-width: 479px),
		(min-width: 480px) and (max-width: 767px),
		(min-width: 768px) and (max-width: 1023px) {
		grid-template:
			'QUANT'
			'ITEMS'
			'PAGINATION'
			;
	}

	@media (min-width: 1024px) and (max-width: 2560px) {
		grid-template:
			' QUANT QUANT QUANT '
			' ITEMS ITEMS ITEMS'
			' ITEMS ITEMS ITEMS'
			' PAGINATION PAGINATION PAGINATION';
	}

	 @media (min-width: 320px) and (max-width: 479px),
		(min-width: 480px) and (max-width: 767px),
		(min-width: 768px) and (max-width: 1023px),
        (min-width: 1024px) and (max-width: 2560px){
			width:100vw;
		}  
`;
