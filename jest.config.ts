module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'html'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/example',
    '<rootDir>/dist',
    '<rootDir>/coverage',
    '<rootDir>/static',
    '<rootDir>/stories',
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/index.{ts,tsx}',
    '!src/typings.d.ts',
    '!<rootDir>/node_modules/',
    '!<rootDir>/path/to/dir/',
    '!src/generatePresentationalComponent/createPresentationalComponent.ts',
  ],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: {
          outDir: './dist/',
          sourceMap: true,
          noImplicitAny: true,
          module: 'commonjs',
          target: 'es6',
          jsx: 'react',
          allowSyntheticDefaultImports: true,
          esModuleInterop: true,
        },
      },
    ],
  },
};
