# react-boilerplate

| Section                                               | Description                                                     |
| ----------------------------------------------------- | --------------------------------------------------------------- |
| [🎯 Objectives and context](#-objectives-and-context) | Project introduction and context                                |
| [🚧 Dependencies](#-dependencies)                     | Technical dependencies and how to install them                  |
| [🏎 Kickstart](#kickstart)                             | Details on how to kickstart development on the project          |
| [🏗 Code & architecture](#-code--architecture)         | Details on the application modules and technical specifications |
| [🔭 Possible improvements](#-possible-improvements)   | Possible code refactors, improvements and ideas                 |
| [🚑 Troubleshooting](#-troubleshooting)               | Recurring problems and proven solutions                         |
| [🚀 Deploy](#-deploy)                                 | Deployment details for various enviroments                      |

## 🎯 Objectives and context

…

### Browser support

| Browser | OS  | Constraint |
| ------- | --- | ---------- |
| …       | …   | …          |

## 🚧 Dependencies

- Node.js (`~> 11.13`)
- NPM (`~> 6.7`)

## 🏎 Kickstart

### Environment variables

All required environment variables are documented in [`.env.development`](./.env.development).

When running scripts or `npm` commands, it is important that these variables are present in the environment. You can use `source`, [`nv`](https://github.com/jcouture/nv) or any custom script to achieve this.

### Initial setup

1. Create `.env.development.local` from empty values in [`.env.development`](./.env.development)
2. Install NPM dependencies with `make dependencies`

## ⌨️ Commandes

### Run the application in development mode

To start a development server:

```bash
$ npm start
```

### Build the application for production

To create a production-ready build:

```bash
$ make build-app
```

### Tests

Tests can be ran with the following script and do not need any environment variables as they should not create side effects (eg. they should not make any network calls, they should not read cookies, etc.)

```bash
$ make test
```

### Code coverage

Tests can also be ran while calculating test coverage level.

```bash
$ make check-code-coverage
```

### Linting

Several linting and formatting tools can be ran to ensure coding style consistency:

- `make lint-scripts` ensures TypeScript code follows our best practices
- `make lint-styles` ensures CSS code follows our best practices
- `make check-format` ensures all code is properly formatted
- `make check-types` ensures types match
- `make format` formats files using Prettier

### Continuous integration

To ensure the project and its code are in a good state, tests and linting tools can be ran all at once:

```bash
$ ./scripts/ci-check.sh
```

## 🏗 Code & architecture

…

## 🔭 Possible improvements

| Description | Priority | Complexity | Ideas |
| ----------- | -------- | ---------- | ----- |
| …           | …        | …          | …     |

## 🚑 Troubleshooting

…

## 🚀 Deploy

### Versions & branches

Each deployment is made from a Git tag. The codebase version is managed with [`incr`](https://github.com/jcouture/incr).

### Container

A Docker image running a Node.js server can be created with `make build`, tested with `make dev-start` and pushed to a registry with `make push`.
