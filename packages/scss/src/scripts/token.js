const StyleDictionary = require('style-dictionary').extend('./config');

StyleDictionary.registerFormat({
  name: 'scss/classFormat',
  formatter: function (dictionary) {
    const typoProps = dictionary.allProperties.filter(prop => prop.type === 'typography')
    return `
      ${typoProps.map((prop) => {
        return `
.${prop.name} {
  font-family: ${prop.value.fontFamily};
  font-size: ${prop.value.fontSize};
  font-weight: ${prop.value.fontWeight};
  line-height: ${prop.value.lineHeight};
};`
      }).join('\n')}
    `
  },
});

StyleDictionary.registerFormat({
  name: 'scss/varFormat',
  formatter: function (dictionary) {
    const allProps = dictionary.allProperties.filter(prop => prop.type !== 'typography')
    return allProps.map(prop => '$' + prop.name + ": " + prop.value + ";").join('\n')}
  },
);

StyleDictionary.buildAllPlatforms();
