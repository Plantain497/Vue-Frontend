module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/essential', ':recommended', 'prettier'],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-tabs': 'off',
		indent: ['error', 'tab'],
		semi: 'error',
		'no-var-requires': 0,
	},
};
