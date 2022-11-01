// Similar to webpack.config, this will load the path aliases from tsconfig.json
const tsconfig = require('./tsconfig.json');
const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig);

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/**/*.ts',
    '!<rootDir>**/types/**/*.ts',
    '!<rootDir>/**/index.ts',
    '!<rootDir>/**/*.test.ts',
    '!<rootDir>/**/__fixtures__/**/*.ts',
  ],
  coverageThreshold: {
    global: {
      functions: 80,
      statements: 80,
    },
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper,
  rootDir: 'src',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/?(*.)(spec|test).ts'],
};
