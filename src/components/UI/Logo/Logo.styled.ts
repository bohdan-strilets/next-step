import styled from '@emotion/styled'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
	display: flex;
	align-items: end;
`

export const Icon = styled.div`
	display: flex;
	align-items: end;

	margin-right: 10px;
`

export const Column = styled(motion.div)<{ height: string }>`
	width: 8px;
	height: ${({ height }) => `${height}`};
	margin-right: 5px;

	background-color: var(--yellow-color);
	border-radius: 3px;

	:last-child {
		margin-right: 0;
	}
`

export const Text = styled(motion.p)`
	font-weight: 700;
	font-size: 32px;
	line-height: 1;

	color: var(--white-color);
	text-shadow: var(--text-shadow);
`
