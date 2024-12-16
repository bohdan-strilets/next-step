import { MotionProps } from 'motion/react'

// Анимация плавно поднимает элементы снизу вверх, начиная с невидимости и заканчивая их полным появлением.

export const fadeInUp = (delay: number = 0): MotionProps => ({
	initial: { opacity: 0, y: 40 },
	animate: { opacity: 1, y: 0 },
	transition: {
		duration: 0.7,
		ease: 'easeOut',
		delay,
	},
})
