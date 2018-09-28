# Boilerplate code for React

## Browser support

| Browser            | OS      | Constraint        |
|--------------------|---------|-------------------|
| …                  | …       | …                 |

## Environment variables

### Adding Development Environment Variables In `.env`

To define permanent environment variables, create a file called `.env` in the root of your project:

```
REACT_APP_SECRET_CODE=abcdef
```

> Note: You must create custom environment variables beginning with `REACT_APP_`. Any other variables except `NODE_ENV` will be ignored to avoid [accidentally exposing a private key on the machine that could have the same name](https://github.com/facebook/create-react-app/issues/865#issuecomment-252199527). Changing any environment variables will require you to restart the development server if it is running.

`.env` files **should be** checked into source control (with the exclusion of `.env*.local`).

#### What other `.env` files can be used?
- `.env`: Default.
- `.env.local`: Local overrides. **This file is loaded for all environments except test.**
- `.env.development`, `.env.test`, `.env.production`: Environment-specific settings.
- `.env.development.local`, `.env.test.local`, `.env.production.local`: Local overrides of environment-specific settings.

Files on the left have more priority than files on the right:

- `npm start`: `.env.development.local`, `.env.development`, `.env.local`, `.env`
- `npm run build`: `.env.production.local`, `.env.production`, `.env.local`, `.env`
- `npm test`: `.env.test.local`, `.env.test`, `.env` (note `.env.local` is missing)

These variables will act as the defaults if the machine does not explicitly set them.<br>
Please refer to the [dotenv documentation](https://github.com/motdotla/dotenv) for more details.

## Heroku buildpack

To successfully deploy applications from this boilerplate code on Heroku, you must use the [create-react-app buildpack](https://github.com/mars/create-react-app-buildpack).

## Linting, testing & type checking

To lint, test and type check your app you can run `./scripts/ci-check.sh`.

## SVGs

### SVG with dynamic styling

If you need to dynamically style an SVG, you can import it as a React component.

```tsx
// Vendor
import React, {SFC} from 'react';
import styled from 'react-emotion';

// Components
import {ReactComponent as Logo} from './logo.svg';

const RedLogo = styled(Logo)`
  fill: red;
`;

const SomeComponent: SFC = () => (
  <div>
    <RedLogo />
  </div>
);
```

### SVG without dynamic styling

If you just wan't to display an SVG with an `<img>` tag, just import it like any other types of images.

```tsx
// Vendor
import React, {SFC} from 'react';

// Assets
import logo from './logo.svg';

const SomeComponent: SFC = () => (
  <div>
    <img src={logo} alt="Logo" />
  </div>
);
```

## Running

Environment variable will be loaded automatically by [dotenv](https://github.com/motdotla/dotenv) like described in the [environment variables](#environment-variables) section.

### Development

To start the development server, simply run:

* `npm start`

## Production

To create a production build, simply run:

* `npm run build`
