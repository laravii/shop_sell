import styled from 'styled-components';

export const Container = styled.div`
	gap: 5px;
	grid-area: MM;
	display: grid;
	width: 100%;
	@media (min-width: 1825px) and (max-width: 2560px){
			width: 1024px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		} 
`;
