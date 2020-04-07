/* eslint-disable arrow-body-style */
// https://docs.cypress.io/guides/guides/plugins-guide.html

// if you need a custom webpack configuration you can uncomment the following import
// and then use the `file:preprocessor` event
// as explained in the cypress docs
// https://docs.cypress.io/api/plugins/preprocessors-api.html#Examples

// /* eslint-disable import/no-extraneous-dependencies, global-require */
// const webpack = require('@cypress/webpack-preprocessor')

const puppeteer = require('puppeteer');

function delay(time) {
	return new Promise(function(resolve) {
		setTimeout(resolve, time);
	});
}

module.exports = (on, config) => {
	// on('file:preprocessor', webpack({
	//  webpackOptions: require('@vue/cli-service/webpack.config'),
	//  watchOptions: {}
	// }))

	on('task', {
		doLogin: async args => {
			const browser = await puppeteer.launch({ headless: false });
			const page = await browser.newPage();

			await page.goto('http://localhost:8080/login');

			const newPagePromise = new Promise(x => page.once('popup', x));

			await page.click('button[data-test="modalButtonConfirm"]');

			const popup = await newPagePromise;

			// Username

			const emailInput = await popup.waitForSelector('input[type=email]', {
				visible: true,
			});
			await emailInput.type(args.username);

			let nextButton = await popup.waitForSelector('#identifierNext', {
				visible: true,
			});
			await nextButton.click();

			// Password

			const passwordInput = await popup.waitForSelector(
				'input[type=password]',
				{ visible: true },
			);
			await passwordInput.type(args.password);
			nextButton = await popup.waitForSelector('#passwordNext', {
				visible: true,
			});
			const clicked = await nextButton.click();

			let obj = {};

			await delay(10000);

			await page.goto('http://localhost:8080/dashboard');
		},
	});

	return Object.assign({}, config, {
		fixturesFolder: 'tests/e2e/fixtures',
		integrationFolder: 'tests/e2e/specs',
		screenshotsFolder: 'tests/e2e/screenshots',
		videosFolder: 'tests/e2e/videos',
		supportFile: 'tests/e2e/support/index.js',
	});
};
