module.exports = {
  preset: "ts-jest",
  testPathIgnorePatterns: ["/node_modules/", "/dist/",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
  },
};
