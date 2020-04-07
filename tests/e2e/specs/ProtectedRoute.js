// Tests for Authentication and Routing

describe('Testing Authentication and Routing', () => {
	it('Visits Dashboard without Signing In and Redirected', () => {
		cy.visit('/dashboard');
		cy.url().should('match', /login/);
		cy.contains('h3', 'Please Login');
	});
});
