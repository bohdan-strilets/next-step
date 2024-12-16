import { css } from '@emotion/react'

export const globalStyles = css`
	:root {
		--yellow-color: #ffe000;
		--green-color: #799f0c;
		--black-color: #0f0f0f;
		--white-color: #f7f7f7;
		--gray-color: #cfcfcf;
		--red-color: #ed213a;

		--yellow-green-gradient: linear-gradient(
			to right,
			var(--yellow-color),
			var(--green-color)
		);

		--cubic-bezier: cubic-bezier(0.25, 1, 0.5, 1);
		--hover-effect: 300ms var(--cubic-bezier);
		--blur-effect: blur(8px);
		--box-shadow: -2px 2px 7px -2px rgba(0, 0, 0, 0.5);
		--text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.4);

		--main-font: 'Montserrat', sans-serif;
		--secondary-font: 'Faculty Glyphic', sans-serif;
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html,
	body {
		font-family: var(--main-font);
		line-height: 1.7;

		height: 100%;
		width: 100%;

		background-color: var(--white-color);
		color: var(--black-color);
	}

	img,
	picture,
	video,
	canvas,
	svg {
		display: block;
		max-width: 100%;
		height: auto;
	}

	button {
		background: none;
		border: none;
		outline: none;
		cursor: pointer;
	}

	a {
		text-decoration: none;
		color: inherit;
		outline: none;
	}

	ul,
	ol {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	table {
		border-collapse: collapse;
		width: 100%;
	}

	input,
	textarea,
	select {
		font: inherit;

		margin: 0;
		padding: 0;

		border: none;
		outline: none;
		appearance: none;
	}
`

export default globalStyles
