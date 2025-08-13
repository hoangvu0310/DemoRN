/** @type {{}} */

const colors = require('./src/constants/colors')

module.exports = {
	// NOTE: Update this to include the paths to all files that contain Nativewind classes.
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			fontFamily: {
				black: ['Lato-Black'],
				'black-italic': ['Lato-BlackItalic'],
				bold: ['Lato-Bold'],
				'bold-italic': ['Lato-BoldItalic'],
				italic: ['Lato-Italic'],
				light: ['Lato-Light'],
				'light-Italic': ['Lato-LightItalic'],
				regular: ['Lato-Regular'],
				thin: ['Lato-Thin'],
				'thin-italic': ['Lato-ThinItalic'],
			},
		},
		colors: { ...colors },
	},
	plugins: [],
}
