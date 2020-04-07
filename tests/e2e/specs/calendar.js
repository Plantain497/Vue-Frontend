// Tests for Calendar

describe('Visiting Calendar', () => {
	before(async () => {
		return cy.task(
			'doLogin', {
				username: 'plantaintest',
				password: 'P@ssw0rd!PT',
			}, {
				taskTimeout: 30000
			},
		);
	});

	it('Visits the calendar page after login', () => {
		cy.visit('/calendar');
		cy.contains('button', 'Week');
		cy.contains('button', 'Month');
	});
});