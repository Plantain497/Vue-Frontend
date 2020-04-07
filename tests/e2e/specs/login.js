// Tests for Authentication and Routing
function delay(time) {
	return new Promise(function(resolve) {
		setTimeout(resolve, time);
	});
}

describe('Testing Authentication and Routing', () => {
	before(async () => {
		return cy.task(
			'doLogin',
			{
				username: 'plantaintest',
				password: 'P@ssw0rd!PT',
			},
			{ taskTimeout: 30000 },
		);
	});

	it('Visits Dashboard Without Problems', () => {
		cy.visit('/dashboard');
		cy.url().should('match', /dashboard/);
	});
});
