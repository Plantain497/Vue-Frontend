// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
			minWidth: {
				'0': '0',
				'1/4': '25%',
				'1/2': '50%',
				'3/4': '75%',
				full: '100%',
			},
		},
	},
	plugins: [require('@tailwindcss/ui')],
	variants: {
		opacity: ['disabled'],
		cursor: ['disabled', 'hover'],
	},
};
