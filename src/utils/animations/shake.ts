import { MotionProps } from 'framer-motion'

// Анимация подёргивания элемента по оси X с повторением и задержкой между циклами

export const shake = (
	delay: number = 0,
	distance: number = 0
): MotionProps => ({
	initial: { x: 0 },
	animate: {
		x: [0, -distance, distance, -distance, 0],
		transition: {
			duration: 0.6,
			ease: 'easeInOut',
			repeat: Infinity,
			repeatDelay: 3,
			delay,
		},
	},
})
