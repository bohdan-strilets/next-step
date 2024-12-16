import { FC } from 'react'

import { fadeInUp } from '@/utils/animations/fadeInUp'
import { grow } from '@/utils/animations/grow'
import { navigationRoutes } from '@/utils/data/navigationRoutes'

import { Column, Icon, StyledLink, Text } from './Logo.styled'

const Logo: FC = () => {
	return (
		<StyledLink to={navigationRoutes.HOME}>
			<Icon>
				<Column height="10px" {...grow(0, '10px')} />
				<Column height="20px" {...grow(0.3, '20px')} />
				<Column height="30px" {...grow(0.6, '30px')} />
			</Icon>
			<Text {...fadeInUp()}>NextStep</Text>
		</StyledLink>
	)
}

export default Logo
