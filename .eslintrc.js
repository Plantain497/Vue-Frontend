module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'eslint:recommended',
		'@vue/typescript/recommended',
		'@vue/prettier',
	],
	plugins: ['vue', 'prettier'],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-tabs': 'off',
		indent: ['error', 'tab'],
		semi: 'error',
		'vue/html-closing-bracket-newline': 'off',
	},
};
