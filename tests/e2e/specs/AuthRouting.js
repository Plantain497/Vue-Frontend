// Tests for Authentication and Routing

describe('Testing Authentication and Routing', () => {
	it('Visits Dashboard without Signing In and Redirected', () => {
		cy.visit('/dashboard');
		cy.url().should('match', /login/);
		cy.contains('h3', 'Please Login');
	});

	it('Visits Dashboard Signed in Through Redirect View', () => {
		// TODO: Finish SSO Process
		cy.visit('/dashboard');
		cy.url().should('match', /login/);
		cy.get('button')
			.contains('Login')
			.click();
	});
});
