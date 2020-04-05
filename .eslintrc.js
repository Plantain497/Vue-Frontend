module.exports = {
	root: true,

	env: {
		node: true,
	},

	extends: ['plugin:vue/essential', 'prettier'],

	parserOptions: {
		ecmaVersion: 2020,
	},

	rules: {
		// 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-tabs': 'off',
		indent: ['error', 'tab'],
		semi: 'error',
		'no-var-requires': 0,
		'vue/html-indent': ['error', 'tab'], // enforce tabs in template
	},

	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env: {
				jest: true
			}
<<<<<<< HEAD
=======
		},
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env: {
				mocha: true
			}
		},
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env: {
				jest: true
			}
>>>>>>> 29a75b4a8e0889e71ef906aaa25a98efd92346e4
		}
	]
};
