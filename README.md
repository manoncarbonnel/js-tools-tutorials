# js-tools-tutorials

Markdown tutorials for JavaScript tools (static analysis, tests, and more)

[![VueJS](https://img.shields.io/badge/VueJS-4FC08D?logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=white)](https://prettier.io/)
[![Pre-commit](https://img.shields.io/badge/Pre--commit-FAB040?logo=pre-commit&logoColor=white)](https://pre-commit.com/)
[![Jest](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white)](https://jestjs.io/)
[![Cypress](https://img.shields.io/badge/Cypress-17202C?logo=cypress&logoColor=white)](https://www.cypress.io/)

A clean code should follow theses rules:

- documented ([JSDOC](https://en.wikipedia.org/wiki/JSDoc))
- simple ([KISS](https://en.wikipedia.org/wiki/KISS_principle))
- well structured ([SOLID](https://en.wikipedia.org/wiki/SOLID))
- only what is necessary ([YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it))
- no duplicated code ([DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself))
- tested ([TU](https://en.wikipedia.org/wiki/Unit_testing))

To help you achieve this goal, you can use several tools. See:

- [StaticAnalysis](docs/StaticAnalysis/README.md)
- [BestPractices](docs/BestPractices/README.md)
- [Templates](docs/Templates/README.md)
- [Tests](docs/Tests/README.md)

__Summary__
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Documentation](#documentation)
- [Prerequisites](#prerequisites)
- [Build](#build)
  - [Localy](#localy)
- [Usage](#usage)
  - [Dependencies install](#dependencies-install)
  - [Update dependencies](#update-dependencies)
  - [Validate installation](#validate-installation)
- [Lint](#lint)
  - [Format](#format)
- [Test](#test)
  - [Unit tests](#unit-tests)
  - [Functional tests](#functional-tests)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Documentation

All reports (tests, coverage, linters, ...) are located in the `reports` directory.

## Prerequisites

**Linux**

- [NodeJS](https://nodejs.org/) using [NVM](https://github.com/nvm-sh/nvm)

**Windows**

- [NodeJS](https://nodejs.org/) using [NVM](https://github.com/coreybutler/nvm-windows) for Windows

**Cypress**

[Installing Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)

## Build

### Localy

```console
npm run build
```

## Usage

### Dependencies install

Download and install dependencies using [npm](https://www.npmjs.com/) :

```console
npm install
```

### Update dependencies

```console
npm update
```

### Validate installation

Start frontend on localhost using:

```console
npm run dev
```

Access the web UI on [http://127.0.0.1:9000/](http://127.0.0.1:9000/)

## Lint

Lint code using [Eslint](https://eslint.org/)

```console
npm run lint
```

### Format

Format code using [Prettier](https://prettier.io/) and [Eslint](https://eslint.org/)

```console
npm run lint:fix
```

## Test

Write and launch tests using [Vitest](https://vitest.dev/)/[Jest](https://jestjs.io/) and [Cypress](https://www.cypress.io/)

### Unit tests

Tests are located in `tests/vitest` directory.

```console
npm run test
```

### Functional tests

Tests are located in `tests/cypress` directory.

To run tests in a shell:

```console
npm run cypress:run
```

To run tests using Cypress studio:

```console
npm run cypress:open
```
