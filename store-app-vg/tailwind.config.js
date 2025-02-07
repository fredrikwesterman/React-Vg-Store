import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	daisyui: {
		themes: ['garden'],
	},
	theme: {
		container: {
			center: true,
		},
		extend: {},
	},
	plugins: [daisyui],
}
