import React from 'react';


import { Container, Showing, ShowingButton } from './styles';
export const QuantidadeMenu = ({ total, limitPerPag, productsPerPage, start }) => {
	const setLimitPerPag = (e, num) => {
		limitPerPag(num)

	}

	return (
		<Container>
			<Showing>Showing {start}- {productsPerPage} of {total} products</Showing>
			<Showing>Showing
				<ShowingButton onClick={(e) => setLimitPerPag(e, 12)}>12</ShowingButton>
				<ShowingButton onClick={(e) => setLimitPerPag(e, 24)}>24</ShowingButton>
				<ShowingButton onClick={(e) => setLimitPerPag(e, 36)}>36</ShowingButton>
			</Showing>
			<Showing>Sort By</Showing>
		</Container>
	);
}
