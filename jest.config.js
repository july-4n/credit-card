/** @type {import('jest').Config} */
const config = {
  bail: 1,
  verbose: true,
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': ['babel-jest', {configFile: './babel-jest.config.js'}],
  },
  transformIgnorePatterns: ['/node_modules/js-datepicker'],
};

module.exports = config;

