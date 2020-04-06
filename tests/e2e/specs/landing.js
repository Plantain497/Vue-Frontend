// https://docs.cypress.io/api/introduction/api.html

describe('Visiting Landing', () => {
	it('Visits the app root url', () => {
		cy.visit('/');
		cy.contains('button', 'Sign In');
	});

	it('Clicked Features and the Nav Changed', () => {
		cy.visit('/');
		const featureButton = cy.get('span').contains('Features');
		featureButton.click();
		featureButton.should('have.class', 'text-purple-500');
	});
});
