/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'dark-el': 'hsl(209, 23%, 22%)',
				'dark-bg': 'hsl(207, 26%, 17%)',
				'light-mode-text': 'hsl(200, 15%, 8%)',
				'light-input': 'hsl(0, 0%, 52%)',
				'light-bg': 'hsl(0, 0%, 98%)',
				'dark-mode-text': 'hsl(0, 0%, 100%)',
			},
		},
	},
	plugins: [],
};
