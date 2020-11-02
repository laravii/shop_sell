import React from 'react';

import { useParams } from 'react-router-dom';

import { ContainerContacts } from './styles';

import NewProduct from './NewProduct';

export default function Forms() {
	const { id } = useParams();

	return (
		<ContainerContacts>

			<NewProduct id={id ? Number.parseInt(id, 10) : null} />

		</ContainerContacts>
	);
}
