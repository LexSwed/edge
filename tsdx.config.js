const linaria = require('linaria/rollup');
const css = require('rollup-plugin-css-only');

module.exports = {
  rollup(config, options) {
    console.log(config);
    config.watch.clearScreen = false;
    config.plugins.push(
      linaria({
        sourceMap: process.env.NODE_ENV !== 'production'
      }),
      css({
        output: 'styles.css'
      })
    );

    return config;
  }
};
