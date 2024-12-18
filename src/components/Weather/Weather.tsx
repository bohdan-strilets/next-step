import { FC } from 'react'
import { IoRainyOutline } from 'react-icons/io5'

import Header from '@/layouts/Header'

import { fadeInUp } from '@/utils/animations/fadeInUp'

import {
	DateTime,
	IconWrapper,
	Location,
	LocationWrapper,
	Temperature,
	WeatherForecast,
	Wrapper,
} from './Weather.styled'

const Weather: FC = () => {
	return (
		<Wrapper>
			<Header />
			<WeatherForecast>
				<Temperature {...fadeInUp()}>08°</Temperature>
				<LocationWrapper {...fadeInUp(0.3)}>
					<Location>Warsaw</Location>
					<DateTime>13:56 - Monday, 16 Dec 2024</DateTime>
				</LocationWrapper>
				<IconWrapper {...fadeInUp(0.6)}>
					<IoRainyOutline />
				</IconWrapper>
			</WeatherForecast>
		</Wrapper>
	)
}

export default Weather
