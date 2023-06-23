const Fs = require('fs');
const Path = require('path');
const Sass = require('node-sass');

const getComponents = () => {
  let allComponents = [];
  const types = ['atoms', 'utilities', 'foundation'];
  types.forEach(type => {
    try {
      Fs.mkdirSync(Path.resolve(`lib/${type}`));
    } catch(e) {}
    const allFiles = Fs.readdirSync(`src/${type}`).map(file => ({
      fileName: file.slice(0, -5),
      input: `src/${type}/${file}`,
      output: `lib/${type}/${file.slice(0, -4) + 'css'}`,
    }));

    allComponents = [
      ...allComponents,
      ...allFiles
    ];
  });
  return allComponents;
};

const compile = (path, fileName) => {
  const result = Sass.renderSync({
    data: Fs.readFileSync(
      Path.resolve(path)
    ).toString(),
    outputStyle: 'expanded',
    includePaths: [Path.resolve('src')]
  });

  Fs.writeFileSync(
    Path.resolve(fileName),
    result.css.toString()
  );
}

try {
  Fs.mkdirSync(Path.resolve('lib'));
} catch(e) {}

compile('src/global.scss', 'lib/global.css');

getComponents().forEach(component => {
  compile(component.input, component.output);
});
