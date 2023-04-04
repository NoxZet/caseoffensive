const path = require('path');
const webpack = require('webpack');

module.exports = (env, options) => {
  const result = [];
  /** Server Config */
  for (let [configFilename, outputDirname, target] of [['main_server', 'server', 'node'], ['main_client', 'public', 'web']]) {
    result.push({
      target: target,
      entry: `./src/${configFilename}.ts`,
      output: {
        path: path.resolve(__dirname, outputDirname),
        filename: `${configFilename}.js`,
      },
      plugins: [
        new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ }),
      ],
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node-modules/,
          }
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: ['node_modules', path.resolve(__dirname, 'src')],
      },
      devtool: options.mode === 'development' ? 'source-map' : false
    });
  }
  return result;
}

