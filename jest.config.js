export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/containers/(.*)$': '<rootDir>/src/containers/$1',
    '^@/context/(.*)$': '<rootDir>/src/context/$1',
  },
}
