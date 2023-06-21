module.exports = {
  source: ["tokens/**/*.token.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      prefix: "fig",
      buildPath: "src/foundation/",
      files: [
        {
          destination: "_tokens.scss",
          format: ["scss/varFormat"]
        },
        {
          destination: "_classes.scss",
          format: ["scss/classFormat"]
        },
      ]
    }
  }
}

// function getSDConfig(level, format) {
//   return {
//     source: [`tokens/${level}/*.token.json`],
//     platforms: {
//       scss: {
//         transformGroup: "scss",
//         prefix: "fig",
//         buildPath: `src/${level}/`,
//         files: [{
//           destination: "_tokens.scss",
//           format: [`scss/${format}`]
//         }]
//       }
//     }
//   }
// }

// module.exports = getSDConfig;
