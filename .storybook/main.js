module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [require.resolve('babel-loader')],
    });

    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.modules.push('src');

    return config;
  },
};
