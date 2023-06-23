module.exports = {
  source: ["tokens/**/*.token.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      prefix: "fig",
      buildPath: "src/foundation/",
      files: [
        {
          destination: "Tokens.scss",
          format: ["scss/varFormat"]
        },
        {
          destination: "Typography.scss",
          format: ["scss/classFormat"]
        },
      ]
    }
  }
}
