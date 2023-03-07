/// <reference types="Cypress" />

before(function () {
    cy.setUpLocale();
});

describe('Filter Test', function () {
    it('filters items by country', function () {
        cy.visit(
            'https://us.vestiairecollective.com/women-bags/shoulder-bags/#gender=Women%231'
        );

        cy.get('input[id*="item-Spain"]').check({ force: true });
        cy.wait(1000);
        cy.get('.product-card_productCard__text__location__7mX3y.vc-text-s').as(
            'filtered_items'
        );

        cy.get('@filtered_items').each(($el, index, list) => {
            expect($el.text()).to.equal('Spain');
        });
    });
});
