const webpack = require('webpack');

module.exports = {
  addons: ['@storybook/addon-knobs/register', 'storybook-readme/register'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]]
      }
    });
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: 'markdown-loader'
        }
      ]
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
