const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const tailwindcss = require('tailwindcss');
const postcssPurgecss = require('@fullhuman/postcss-purgecss');
const postCSSExtend = require('postcss-extend');

const purgecss = postcssPurgecss({
	content: ['./public/**/*.html', './src/**/*.vue'],
	defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || [],
	whitelistPatterns: [
		/-(leave|enter|appear)(|-(to|from|active))$/,
		/^(?!(|.*?:)cursor-move).+-move$/,
		/^router-link(|-exact)-active$/,
	],
});

module.exports = {
	plugins: [
		tailwindcss,
		postCSSExtend,
		autoprefixer,
		purgecss,
		cssnano,
		// ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
	],
};
