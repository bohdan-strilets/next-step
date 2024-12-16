import styled from '@emotion/styled'
import { motion } from 'motion/react'

export const StyledBtn = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 3px;

	height: 40px;
	width: 45px;
	margin: 15px;

	:hover .line,
	:focus .line {
		background-color: var(--yellow-color);
	}

	:active {
		transform: scale(0.95);
	}
`

export const Line = styled(motion.div)`
	width: 40px;
	height: 6px;
	margin-bottom: 6px;

	background-color: var(--white-color);
	border-radius: 5px;

	transition: background-color var(--hover-effect);

	:last-child {
		margin-bottom: 0;
	}
`
