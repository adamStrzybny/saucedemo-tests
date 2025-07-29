# saucedemo-app-tests

End-to-end tests for the [saucedemo](https://www.saucedemo.com/) app using Cypress and TypeScript.

## Setup

1. Clone the repository:

```bash
git clone https://github.com/adamStrzybny/saucedemo-tests
cd saucedemo-tests
```

2. Install dependencies:

```bash
npm install
```

## Usage

Run Cypress in interactive mode:

```bash
npx cypress open
```
Run all tests in headless mode and generate one merged report:

```bash
npm run test:report
```

Run all tests in headless mode:

```bash
npx cypress run
```

Run ESLint:

```bash
npm run lint
```

Auto-fix linting issues:

```bash
npm run lint:fix
```

## Project Structure

- `cypress/e2e/` – test specs
- `cypress/reports/` – mochawesome reports from testing
- `cypress/support/commands/` – custom commands
- `cypress/support/data/` – optional test data
- `cypress/support/pages/` – page object classes
- `cypress/support/selectors/` – reusable selectors
- `cypress/support/utils/` – test context setup
