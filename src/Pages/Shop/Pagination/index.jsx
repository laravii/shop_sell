import React from 'react';

import { ContainerFlex, Btn } from './styles';

export function Pagination({ pagesTotal, active, setActive }) {
	const Pages = (num) => {
		let arr = []

		for (let value = 1; value <= num; value++) {

			arr.push(<Btn isActive={value === active} onClick={(e) => setActive(value)} key={String(Math.random())}>{value}</Btn>)
		}
		console.log(arr)
		return arr.map(((btn) => btn))
	}



	return (
		<ContainerFlex>
			<Btn onClick={(e) => active === 1 ? null : setActive(active - 1)}>PREV</Btn>
			{Pages(pagesTotal)}
			<Btn onClick={(e) => active === pagesTotal ? null : setActive(active + 1)} >NEXT</Btn>
		</ContainerFlex>
	);
}
