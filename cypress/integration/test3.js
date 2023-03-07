/// <reference types="Cypress" />

before(function () {
    cy.setUpLocale();
});

describe('Language and Currency Test', function () {
    let currency_list;
    let currency_symbol;
    before(function () {
        cy.request(
            'https://api-static-s3.vestiairecollective.com/6/en-US/I18N.json'
        ).then(resp => {
            currency_list = resp.body.currency.list;
        });
    });

    it('displays correct currency symbol', function () {
        cy.visit('https://us.vestiairecollective.com/favorites/16999609/');

        currency_symbol = currency_list.find(({ isoCode }) => isoCode == 'USD');
        cy.get('.footer__i18n > div').should(
            'contain.text',
            currency_symbol.symbol + ' ' + currency_symbol.isoCode
        );
    });
});
