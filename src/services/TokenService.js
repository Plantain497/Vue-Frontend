const TokenService = {
	getToken(TOKEN_KEY) {
		const result = localStorage.getItem(TOKEN_KEY);
		if (result === null) {
			return '';
		}
		return result;
	},

	saveToken(TOKEN_KEY, accessToken) {
		localStorage.setItem(TOKEN_KEY, accessToken);
	},

	removeToken(TOKEN_KEY) {
		localStorage.removeItem(TOKEN_KEY);
	},

	clearStorage() {
		localStorage.clear();
	},
};

export default TokenService;
