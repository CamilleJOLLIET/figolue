const StyleDictionary = require('style-dictionary')
const baseConfig = require('../../config.json')
// const StyleDictionary = require('style-dictionary').extend('./config.json');;

// StyleDictionary.registerFormat({
//   name: 'css/classFormat',
//   formatter: function (dictionary, config) {
//     console.log('ca trigger ?')
//     return `
// ${dictionary.allProperties
//   .map((prop) => {
//     console.log('je passe là ?')
//     return `
// .${prop.name} {
//     font-family: ${prop.value.fontFamily},
//     font-size: ${prop.value.fontSize},
//     font-weight: ${prop.value.fontWeight},
//     line-height: ${prop.value.lineHeight}
// };`})
//   .join('\n')}
// `
//   },
// });



const StyleDictionaryExtended = StyleDictionary.extend({
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
  StyleDictionaryExtended.registerTransform({
    name: 'typography/shorthand',
    type: 'value',
    transitive: true,
    matcher: token => token.type === 'typography',
    transformer: (token) => {
      console.log('ca trigger ?')
      const {value} = token
      return `${value.fontWeight} ${value.fontSize}/${value.lineHeight} ${value.fontFamily}`
    }
  })

// StyleDictionary.buildAllPlatforms();

StyleDictionaryExtended.buildAllPlatforms()