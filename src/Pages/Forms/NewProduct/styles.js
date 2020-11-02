import styled from 'styled-components';

export const NewProductForm = styled.div`
	background-color: var(--secund-white);
	padding: 20px;
	display: flex;
	flex-direction: column;

	justify-content: center;

	width: 100%;
	height: 100%;
`;

export const Form = styled.form`
	display: block;
`;

export const FormItem = styled.div`
	display: flex;
	flex-direction: column;

	margin: 40px 0;
`;
export const ItemDescription = styled.label`
	font-size: 0.8rem;
	font-weight: 600;
	color: var(--dark);
	margin: 5px 0;
`;

export const InputForm = styled.input`
	border-radius: 7px;
	border: 0.5px solid var(--dark);
	width: 50%;
	height: 1.8rem;
	margin: 0px 0 7px 0;
	background-color: var(--secund-white);
`;

export const FormBtn = styled.button`
	background-color: var(--dark);
	color: var(--white);
	border: none;
	border-radius: 10px;
	padding: 7px;
	width: 60px;
	height: 2rem;
	margin: 0 20px;
`;
export const Btns = styled.div`
	display: flex;
`;
