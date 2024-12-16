import { MotionProps } from 'motion/react'

// Анимация плавно увеличивает высоту элементов от 0 до заданного размера.

export const grow = (delay: number = 0, height: string): MotionProps => ({
	initial: { height: '0px', opacity: 0 },
	animate: { height, opacity: 1 },
	transition: {
		type: 'spring',
		stiffness: 60,
		damping: 10,
		duration: 0.5,
		delay,
	},
})
