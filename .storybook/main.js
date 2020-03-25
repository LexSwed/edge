const webpack = require('webpack');

module.exports = {
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]]
      }
    });
    config.plugins.push(
      new webpack.DefinePlugin({
        __DEV__: true
      })
    );
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
  stories: ['../src/**/*.stories.[tj]sx']
};
