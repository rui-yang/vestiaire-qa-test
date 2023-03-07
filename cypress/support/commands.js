Cypress.Commands.add('setUpLocale', () => {
    cy.setCookie('vc_country', 'US');
    cy.setCookie('vc_ck', '6.us.USD');
    cy.setCookie(
        'TC_PRIVACY',
        '0%40022%7C2%7C310%402%2C3%2C5%2C6%401%401678019799716%2C1678019799716%2C1693571799716%40_v__Dw%3D%3D'
    );
});

Cypress.Commands.add('login', () => {
    const apiUrl = Cypress.env('apiUrl');
    const email = 'test.qa@vestiairecollective.com';
    const password = '#Password1#';
    const digest = 'v1097d91f46d';

    cy.request({
        method: 'POST',
        url: `${apiUrl}/sessions/`,
        qs: {
            'x-siteid': '6',
            'x-language': 'us',
            'x-currency': 'USD',
        },
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'test-agent',
        },
        body: {
            email,
            password,
            digest,
        },
    }).then(resp => {
        const data = resp.body.data;
        cy.setCookie('EZBO_SESSION_vdclive', data.id);
        cy.setCookie('vc_uid', data.user.id);

        cy.setCookie('vc_country', 'US');
        cy.setCookie('vc_ck', '6.us.USD');
        cy.setCookie(
            'TC_PRIVACY',
            '0%40022%7C2%7C310%402%2C3%2C5%2C6%401%401678019799716%2C1678019799716%2C1693571799716%40_v__Dw%3D%3D'
        );
    });
});
