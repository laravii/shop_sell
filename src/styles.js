import styled from 'styled-components';

export const Grid = styled.div`
	margin: 0;
	padding: 0;
	display: grid;
	box-sizing: border-box;
	overflow-x: hidden;
	grid-template:
		'HH'
		'MM'
		'FF' ;

		@media (min-width: 320px) and (max-width: 479px),
		(min-width: 480px) and (max-width: 767px),
		(min-width: 768px) and (max-width: 1024px){
			width: 100%;
		}
		
`;
