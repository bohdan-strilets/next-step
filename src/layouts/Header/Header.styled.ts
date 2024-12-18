import styled from '@emotion/styled'

import { screenWidth } from '@/utils/data/screenWidth'

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 10px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		padding: 20px 40px;
	}
	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		padding: 30px 80px;
	}
`

export const AuthBar = styled.div`
	display: flex;
	align-items: center;
`

export const AuthBtn = styled.button`
	font-family: var(--secondary-font);
	font-weight: 700;
	text-transform: uppercase;

	width: 80px;
	height: 32px;

	background-color: var(--yellow-color);
	border-radius: 5px;
	box-shadow: var(--box-shadow);
	text-shadow: var(--text-shadow);

	transition:
		background-color var(--hover-effect),
		color var(--hover-effect);

	:hover,
	:focus {
		background-color: var(--black-color);
		color: var(--yellow-color);
	}

	:active {
		transform: scale(0.95);
	}

	@media screen and (min-width: ${screenWidth.TABLET}) {
		width: 120px;
		height: 35px;
	}
`
