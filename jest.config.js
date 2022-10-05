// Similar to webpack.config, this will load the path aliases from tsconfig.json
const tsconfig = require('./tsconfig.json');
const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig);

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/**/*.ts',
    '!<rootDir>/types/**/*.ts',
    '!<rootDir>/**/index.ts',
    '!<rootDir>/**/*.spec.ts',
    '!<rootDir>/**/*.test.ts',
    '!<rootDir>/__fixtures__/**/*.ts',
    '!<rootDir>/test/**/*.ts',
    '!<rootDir>/tools/search/**/*.ts',
    '!<rootDir>/utilities/minio-docker.ts',
  ],
  coverageThreshold: {
    global: {
      functions: 90,
      statements: 90,
    },
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper,
  rootDir: 'src',
  setupFilesAfterEnv: ['./test/setup.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/?(*.)(spec|test).ts'],
};
