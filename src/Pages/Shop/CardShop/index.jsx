import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';



import {
	ContainerCard,
	FlexCard,
	Product,
	ProductDescriptions,
	ProductDescription,
	ProductSubDescription,
	SetProduct,
	ProductSet,
	ProductDelet,
	Modal,
	ModalContainer,
	ModalText,
	Confirm,
	ConfirmBtn,
} from './styles';

import { QuantidadeMenu } from '../QuantidadeMenu';
import { Pagination } from '../Pagination';

export default function CardShop() {
	const [arr, setArr] = useState([]);
	const [openModal, setOpenModal] = useState(false)
	const [messageModal, setMessageModal] = useState(false)
	const [idSelected, setIdSelected] = useState(false)
	const [startItem, setStartItem] = useState()
	const [limitOfProducts, setLimitOfProducts] = useState(12)
	const [totalPages, setTotalPages] = useState([])
	const [totalItems, setTotalItems] = useState(0)
	const [activePage, setActivePage] = useState(1)

	const history = useHistory();

	useEffect(() => {


		axios
			.get(`http://localhost:3004/products/?_limit=${limitOfProducts}&_start=${startItem}&_page=${activePage}&_order=desc&_sort=id`)
			.then((response) => {
				setTotalItems(response.headers["x-total-count"]);
				console.log("x-total-count", response.headers["x-total-count"])
				setStartItem(limitOfProducts * (activePage - 1))
				setTotalPages(Math.ceil(totalItems / limitOfProducts))
				console.log(Math.ceil(totalItems / limitOfProducts))
				setArr(response.data)
			});
	}, [limitOfProducts, totalItems, startItem, activePage]);

	function limitProducts(num) {
		setLimitOfProducts(num)
		setActivePage(1)
	}

	function callingModal(id, name, e) {
		setOpenModal(true)
		setMessageModal(name)
		setIdSelected(id)
	}
	function deletConfirmate(e) {
		axios.delete(`http://localhost:3004/products/${idSelected}`).then((response) => {
			history.push('/shop');
		});
	}
	function declineDelet() {
		setOpenModal(false)
	}

	return (
		<>
			<QuantidadeMenu total={totalItems} limitPerPag={limitProducts} productsPerPage={arr.length} start={startItem + 1} />
			<ContainerCard>
				{arr.map(({ id, url, price, categoryName, name }) => (
					<FlexCard key={id}>
						<Product src={url}></Product>
						<ProductDescriptions>
							<ProductSubDescription>{categoryName}</ProductSubDescription>
							<ProductDescription>{name}</ProductDescription>
							<ProductSubDescription>{price}</ProductSubDescription>
							<SetProduct>
								<ProductSet to={`/forms-set-product/${id}`}>Editar</ProductSet>
								<ProductDelet onClick={(e) => callingModal(id, name, e)}>
									Apagar
							</ProductDelet>
							</SetProduct>
						</ProductDescriptions>
					</FlexCard>
				))}

				<Modal isModal={openModal} onClick={declineDelet}>
					<ModalContainer >
						<ModalText>Deseja excluir o item {messageModal}</ModalText>
						<Confirm>
							<ConfirmBtn onClick={deletConfirmate}>Sim</ConfirmBtn>
							<ConfirmBtn onClick={declineDelet}>Não</ConfirmBtn>
						</Confirm>
					</ModalContainer>
				</Modal>
			</ContainerCard>
			<Pagination
				pagesTotal={totalPages}
				active={activePage}
				setActive={setActivePage} />
		</>
	);
}
