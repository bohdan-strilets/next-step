import styled from '@emotion/styled'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

import { screenWidth } from '@/utils/data/screenWidth'

export const StyledLink = styled(Link)`
	display: flex;
	align-items: end;
`

export const Icon = styled.div`
	display: flex;
	align-items: end;

	margin-right: 3px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		margin-right: 10px;
	}
`

export const Column = styled(motion.div)`
	width: 5px;
	margin-right: 3px;

	background-color: var(--yellow-color);
	border-radius: 3px;

	:last-child {
		margin-right: 0;
	}

	@media screen and (min-width: ${screenWidth.TABLET}) {
		width: 8px;
		margin-right: 5px;
	}
`

export const Text = styled(motion.p)`
	font-weight: 700;
	font-size: 20px;
	line-height: 1;

	color: var(--white-color);
	text-shadow: var(--text-shadow);

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 32px;
	}
`
