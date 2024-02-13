/** @type {import('jest').Config} */
const config = {
  bail: 1,
  verbose: true,
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/js-datepicker'],
};

module.exports = config;

