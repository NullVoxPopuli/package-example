'use strict';

const { configs } = require('@nullvoxpopuli/eslint-configs');

// accommodates: JS, TS, ESM, and CJS
const config = configs.crossPlatform();

module.exports = {
  ...config,
  overrides: [
    ...config.overrides,
    {
      files: ["**/*.ts"],
      rules: {
        "import/namespace": "off",
        "import/no-cycle": "off",
        "import/named": "off",
      }
    }
  ]
}
