import styled from 'styled-components';

export const Container = styled.div`
	grid-area: HH;
	
	background-color: var(--light);

		@media (min-width: 320px) and (max-width: 479px),
		(min-width: 480px) and (max-width: 767px),
		(min-width: 768px) and (max-width: 1023px),
        (min-width: 1024px) and (max-width: 2560px){
			width:100vw;
		} 
`;
