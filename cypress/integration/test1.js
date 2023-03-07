/// <reference types='Cypress' />

before(function () {
    cy.login();
});

describe('Favorite Test', function () {
    it('adds and removes favorite', function () {
        cy.visit('https://us.vestiairecollective.com');

        cy.get('[data-cy="search_button"]').type('Hermès').as('search_query');
        cy.get('[data-cy="suggestion_brand"]').as('search_results');
        cy.get('@search_results').should('have.length', '2');
        cy.get('@search_results').first().click();

        cy.get('.product-search_catalog__flexContainer__SMEBK li')
            .last()
            .as('last_item_card');
        cy.get('@last_item_card').within(() => {
            cy.get(
                '.product-card_productCard__topContainer__Nqz4Z > [role="button"] > .vc-like_like__button__PtdD4 > .vc-like_like__icon__quzrc'
            ).as('last_item_favorite_icon');
        });

        cy.get('@last_item_favorite_icon').should('be.visible');
        cy.get('@last_item_favorite_icon').click();

        cy.get('[data-cy="favourites_button"]').click();
        cy.get('.favorites_favorites__flexContainer--item__aB55M').should(
            'be.visible'
        );

        cy.get('.vc-like_like__icon__quzrc').click();
        // this fails as the item still displays though it's already unliked
        cy.get('.favorites_favorites__empty__title__7JuEy').should(
            'be.visible'
        );
    });
});
