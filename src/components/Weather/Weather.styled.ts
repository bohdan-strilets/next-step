import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import rainyBg from '@/assets/images/weather/rainy-bg.jpg'

import { screenWidth } from '@/utils/data/screenWidth'

export const Wrapper = styled.div`
	position: relative;

	width: 100vw;
	height: 100vh;

	background-color: var(--white-color);
	background-image: url(${rainyBg});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`

export const WeatherForecast = styled.div`
	position: absolute;
	bottom: 10%;
	left: 3%;

	color: var(--white-color);

	@media screen and (min-width: ${screenWidth.TABLET}) {
		display: flex;
		align-items: center;
		justify-content: center;

		left: 5%;
	}

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		left: 8%;
	}

	@media screen and (min-width: ${screenWidth.DESKTOP}) {
		left: 10%;
	}
`

export const Temperature = styled(motion.p)`
	font-size: 64px;
	font-weight: 700;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 84px;
	}

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		font-size: 124px;
	}
`

export const LocationWrapper = styled(motion.div)`
	margin: 0;

	@media screen and (max-width: ${screenWidth.PRE_TABLET}) {
		margin-bottom: 30px;
	}

	@media screen and (min-width: ${screenWidth.TABLET}) {
		margin: 0 25px;
	}
`

export const Location = styled.p`
	font-size: 48px;
	font-weight: 600;
	line-height: 1.2;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 52px;
	}

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		font-size: 62px;
	}
`

export const DateTime = styled.p``

export const IconWrapper = styled(motion.div)`
	font-size: 54px;

	@media screen and (min-width: ${screenWidth.TABLET}) {
		font-size: 58px;
	}

	@media screen and (min-width: ${screenWidth.LAPTOP}) {
		font-size: 64px;
	}
`
