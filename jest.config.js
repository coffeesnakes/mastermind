module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "jsx"],
  modulePaths: ["<rootDir>"],
  projects: [
    {
      displayName: "dom",
      testEnvironment: "jsdom",
      testMatch: ["**/specs/**/*.test.js?(x)"],
    },
    {
      displayName: "node",
      testEnvironment: "node",
      testMatch: ["**/specs/**/*.test.node.js?(x)"],
    },
  ]
};
