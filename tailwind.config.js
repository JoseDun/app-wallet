/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			primary: '#224492',
			primaryDark: '#1D294A',
			secondary: '#45AC35',
			tertiary: '#2E5A27',
			light: '#FFFFFF',
			lightSecondary: '#F1F5FF',
			medium: '#92949C',
			dark: '#000000',
		},
		extend: {},
	},
	plugins: [],
};
