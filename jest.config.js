module.exports = {
  collectCoverageFrom: ['packages/**/*.(ts|tsx)'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 80,
      lines: 70,
    },
  },
  testRegex: 'tests/.*\\.test\\.(ts|tsx)$',
  preset: 'ts-jest',
}
