import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
	Container,
	Destaque,
	TitleDestaque,
	BtnDestaque,
	Icon,
} from './styles';

function Destaques() {
	const [arr, setArr] = useState([]);

	useEffect(() => {
		axios.get(`http://localhost:3004/categories`).then((response) => {
			setArr(response.data);
		});
	}, []);

	return (
		<Container>
			{arr.map((destaque) => (
				<Destaque key={destaque.id} imgUrl={destaque.url}>
					<TitleDestaque>{destaque.title}</TitleDestaque>
					<BtnDestaque>
						SHOP NOW <Icon size='2rem' />
					</BtnDestaque>
				</Destaque>
			))}
		</Container>
	);
}

export default Destaques;
