const path = require('path');
const webpack = require('webpack');

module.exports = (env, options) => {
  const result = [];
  /** Server Config */
  for (let [configFilename, outputDirname] of [['main_server', 'server'], ['main_client', 'public']]) {
    result.push({
      target: 'node',
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

