import { useMediaQuery } from 'react-responsive'

import { screenWidth } from '@/utils/data/screenWidth'

const useResponsive = () => {
	const isTablet = useMediaQuery({
		query: `(min-width: ${screenWidth.TABLET})`,
	})

	const isLaptop = useMediaQuery({
		query: `(min-width: ${screenWidth.LAPTOP})`,
	})

	const isDesktop = useMediaQuery({
		query: `(min-width: ${screenWidth.DESKTOP})`,
	})

	const isMaxMobile = useMediaQuery({
		query: `(max-width: ${screenWidth.PRE_TABLET})`,
	})

	const isMaxTablet = useMediaQuery({
		query: `(max-width: ${screenWidth.PRE_LAPTOP})`,
	})

	const isMaxLaptop = useMediaQuery({
		query: `(max-width: ${screenWidth.PRE_DESKTOP})`,
	})

	return {
		isTablet,
		isLaptop,
		isDesktop,
		isMaxMobile,
		isMaxTablet,
		isMaxLaptop,
	}
}

export default useResponsive
