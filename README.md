# E2E test with Cypress

## Setup

1. `git clone https://github.com/rui-yang/vestiaire-qa-test.git`
2. cd to the project folder and run `npm install`


## Run tests

    - use cypress test runner (cypress __open__):
      - `npx cypress open`
    or 
    - use cypress __headless mode__ (cypress run):
      - `npm run test`

## Information 
### Tests
- Tests are located in `cypress/integration` folder

- Custom commands are located in `cypress/support` folder 

### Configuration

- Config files: `cypress.config.js` - Default behavior of Cypress are modified.

### Test Run and Results
View test run results in `Actions` Tab

## :Notes
1. Login were conducted through API request instead of UI as I observed some inconsistency when trying to login via UI and also in general it should be done via API since the purpose of these test cases are not for testing login functionality.
2. Since there's limited timeframe, the tests are not abstracted enough, which should be done for the purpose of maintenance and readability.
