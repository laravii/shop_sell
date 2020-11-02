import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { useHistory } from 'react-router-dom';

import {
	NewProductForm,
	Form,
	FormItem,
	ItemDescription,
	InputForm,
	Btns,
	FormBtn,
} from './styles';

const initialValue = {
	categoryName: '',
	name: '',
	price: '',
	url: '',
};

export default function NewProduct({ id }) {
	const [values, setValues] = useState(initialValue);
	// o useHistory faz com que após enviar um dado para o banco de dados seja redirecionado a outra pagina
	const history = useHistory();

	console.log(id);

	useEffect(
		// Verifica se o item contem ID para capturar os valores
		(response) => {
			if (id) {
				axios.get(`http://localhost:3004/products/${id}`).then((response) => {
					setValues(response.data);
				});
			}
		},
		[id]
	);

	function onChange(e) {
		// o evento captura o name e os valores do input e permite altera-los
		const { name, value } = e.target;

		setValues({ ...values, [name]: value });
		// quando é alterado, o valor o input ele é inserido na variável initialValue
		console.log(value);
	}

	function onSubmit(e) {
		e.preventDefault();

		const method = id ? 'put' : 'post';

		const url = id
			? `http://localhost:3004/products/${id}`
			: 'http://localhost:3004/products/';

		axios[method](url, values).then((response) => {
			history.push('/shop');
		});
	}

	return (
		<NewProductForm onSubmit={onSubmit}>
			<Form>
				<FormItem>
					<ItemDescription htmlFor='categoryName'>Categoria</ItemDescription>
					<InputForm
						onChange={onChange}
						id='categoryName'
						name='categoryName'
						type='text'
						value={values.categoryName}
					></InputForm>
				</FormItem>
				<FormItem>
					<ItemDescription htmlFor='name'>Produto</ItemDescription>
					<InputForm
						onChange={onChange}
						id='name'
						name='name'
						type='text'
						value={values.name}
					></InputForm>
				</FormItem>
				<FormItem>
					<ItemDescription htmlFor='price'>Preço</ItemDescription>
					<InputForm
						onChange={onChange}
						id='price'
						name='price'
						type='text'
						value={values.price}
					></InputForm>
				</FormItem>
				<FormItem>
					<ItemDescription htmlFor='url'>Imagem</ItemDescription>
					<InputForm
						onChange={onChange}
						id='url'
						name='url'
						type='text'
						value={values.url}
					></InputForm>
				</FormItem>
				<Btns>
					<FormBtn type='submit'>Salvar</FormBtn>
				</Btns>
			</Form>
		</NewProductForm>
	);
}
