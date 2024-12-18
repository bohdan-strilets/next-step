import { FC } from 'react'

import useResponsive from '@/hooks/useResponsive'

import { fadeInUp } from '@/utils/animations/fadeInUp'
import { grow } from '@/utils/animations/grow'
import { navigationRoutes } from '@/utils/data/navigationRoutes'

import { Column, Icon, StyledLink, Text } from './Logo.styled'

const Logo: FC = () => {
	const { isMaxMobile } = useResponsive()

	return (
		<StyledLink to={navigationRoutes.HOME}>
			<Icon>
				<Column {...grow(0, isMaxMobile ? '6px' : '10px')} />
				<Column {...grow(0.3, isMaxMobile ? '12px' : '20px')} />
				<Column {...grow(0.6, isMaxMobile ? '18px' : '30px')} />
			</Icon>
			<Text {...fadeInUp()}>NextStep</Text>
		</StyledLink>
	)
}

export default Logo
