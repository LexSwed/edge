exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@fxtrot/edge': require('path').resolve(__dirname, '../dist'),
      },
    },
    plugins: [
      plugins.define({
        __DEV__: true,
      }),
    ],
  });
};
