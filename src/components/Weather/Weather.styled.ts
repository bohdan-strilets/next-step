import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import rainyBg from '@/assets/images/weather/rainy-bg.jpg'

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
	left: 10%;

	display: flex;
	align-items: center;
	justify-content: center;

	color: var(--white-color);
`

export const Temperature = styled(motion.p)`
	font-size: 124px;
	font-weight: 700;
`

export const LocationWrapper = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	margin: 0 25px;
`

export const Location = styled.p`
	font-size: 62px;
	font-weight: 600;
	line-height: 1.2;
`

export const DateTime = styled.p``

export const IconWrapper = styled(motion.div)`
	font-size: 64px;
`
