import { FC } from 'react'

import { shake } from '@/utils/animations/shake'

import { Line, StyledBtn } from './MenuBtn.styled'

const MenuBtn: FC = () => {
	return (
		<StyledBtn type="button">
			<Line className="line" />
			<Line className="line" />
			<Line className="line" {...shake(0, 3)} />
		</StyledBtn>
	)
}

export default MenuBtn
