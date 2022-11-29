const StyleDictionary = require('style-dictionary').extend({
    source: ['tokens/**/*.token.json'],
    platforms: {
      scss: {
        transformGroup: 'scss',
        prefix: 'fig',
        buildPath: 'src/foundation/',
        files: [{
          destination: '_tokens.scss',
          format: 'scss/variables'
        }]
      }
    }
  });
  StyleDictionary.buildAllPlatforms();