module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['components/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
}