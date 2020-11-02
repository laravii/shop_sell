import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
	ContainerSlides,
	Slides,
	BeforeTitle,
	Title,
	Text,
	Btn,
	GoToBtn,
	Next,
	Previous,
} from './styles';

export default function Carrossel() {
	const [carrousel, setCarrousel] = useState([]);
	const [x, setX] = useState(0);

	useEffect(() => {
		axios.get(`http://localhost:3004/photos`).then((response) => {
			setCarrousel(response.data);
		});
	}, []);

	return (
		<div>
			<div>
				<ContainerSlides>
					{carrousel.map((slide) => (
						<Slides
							key={slide.id}
							slideImg={slide.url}
							style={{ transform: `translateX(${x}%)` }}
						>
							<BeforeTitle>{slide.subTitle}</BeforeTitle>
							<Title>{slide.title}</Title>
							<Text>{slide.description}</Text>
							<Btn>{slide.btnTitle}</Btn>
						</Slides>
					))}
					<GoToBtn
						onClick={() => {
							x === 0 ? setX(-100 * (carrousel.length - 1)) : setX(x + 100);
						}}
						left
					>
						<Previous />
					</GoToBtn>
					<GoToBtn
						onClick={() => {
							x === -100 * (carrousel.length - 1) ? setX(0) : setX(x - 100);
							console.log(x);
						}}
					>
						<Next />
					</GoToBtn>
				</ContainerSlides>
			</div>
			
		</div>
	);
}
