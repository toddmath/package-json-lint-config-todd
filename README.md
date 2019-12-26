<h1 align="center">Welcome to npm-package-json-lint-config-todd 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: GPL--3.0--or--later" src="https://img.shields.io/badge/License-GPL--3.0--or--later-yellow.svg" />
  </a>
  <a href="https://twitter.com/tM0Nk3y" target="_blank">
    <img alt="Twitter: tM0Nk3y" src="https://img.shields.io/twitter/follow/tM0Nk3y.svg?style=social" />
  </a>
</p>

> My custom config that extends [package-json-lint](https://npmpackagejsonlint.org/ "package-json-lint homepage"). Sanity checks my package.json 🧙🏻‍

## Install

With npm:
```sh
npm install --save-dev npm-package-json-lint npm-package-json-lint-config-todd
```

With yarn:
```sh
yarn add -D npm-package-json-lint npm-package-json-lint-config-todd
```

## Usage

Add the following to your `.npmpackagejsonlintrc.json` file. Can place at the root of your project, user dir, and/or global dir.
```json
{
  "extends": "npm-package-json-lint-config-todd"
}
```

Another option is instead of another config file, to put a npmpackagejsonlint property inside `package.json`
```json
{
  "name": "foo",
  "version": "0.1.0",
  "description": "bar",
  "keywords": [
    "baz"
  ],
  "devDependencies": {
    "mocha": "^2.4.5"
  },
  "npmpackagejsonlint": {
    "rules": {
      "require-author": "error"
    }
  }
}
```

You can also put any overrides inside `.npmpackagejsonlintrc.json`
```json
{
  "extends": "npm-package-json-lint-config-todd",
  "overrides": [
    {
      "patterns": ["modules/module1/**/package.json"],
      "rules": {
        "license-type": "warning"
      }
    },
    {
      "patterns": ["modules/module2/**/package.json"],
      "rules": {
        "valid-values-license": ["error", ["Bob"]]
      }
    }
  ]
}
```

## **🧙🏻‍ Todd Matheson**

* Website: <https://toddmath.com>
* Twitter: [@tM0Nk3y](https://twitter.com/tM0Nk3y "twitter profile")
* Github: [@toddmath](https://github.com/toddmath "github profile")

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator "readme-md-generator")_