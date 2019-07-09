module.exports = {
  verbose: true,
  modulePathIgnorePatterns: ["<rootDir>/dist-fe/", "<rootDir>/fe/.circleci/", "<rootDir>/fe/cypress/", "<rootDir>/node_modules/"],
  testResultsProcessor: "jest-sonar-reporter"
};
