exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [require('path').resolve(__dirname, '../src'), 'node_modules'],
    },
    plugins: [
      plugins.define({
        __DEV__: true,
      }),
    ],
  });
};
