import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import Logo from '@/components/UI/Logo'
import MenuBtn from '@/components/UI/MenuBtn'

import { navigationRoutes } from '@/utils/data/navigationRoutes'

import { AuthBar, AuthBtn, Wrapper } from './Header.styled'

const Header: FC = () => {
	const navigate = useNavigate()

	return (
		<Wrapper>
			<Logo />
			<AuthBar>
				<AuthBtn type="button" onClick={() => navigate(navigationRoutes.AUTH)}>
					Auth
				</AuthBtn>
				<MenuBtn />
			</AuthBar>
		</Wrapper>
	)
}

export default Header
