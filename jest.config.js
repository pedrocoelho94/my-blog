module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/pages/**/*.tsx',
    '!src/templates/**/*.{js,jsx,ts,tsx}',
    '!src/utils/*.{js,jsx,ts,tsx}',
    '!src/context/**/*.{js,jsx,ts,tsx}',
    '!src/components/Comments/*.{js,jsx,ts,tsx}',
    '!src/graphql/*.ts',
    '!src/styles/**/*.ts',
    '!src/shared-typed/**/*.ts',
    '!src/types/**/*.d.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/']
}
