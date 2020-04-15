const postcss = require('rollup-plugin-postcss');
const bundleSize = require('rollup-plugin-bundle-size');
const images = require('@rollup/plugin-image');
const svgr = require('@svgr/rollup').default;

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      svgr(),
      images({ include: ['**/*.png', '**/*.jpg', '**/*.webp'] }),
      postcss({
        minimize: !isDev,
        inject: false,
        config: true,
        // only write out CSS for the first bundle (avoids pointless extra files):
        // extract: !!options.writeMeta,
        extract: options.writeMeta ? 'dist/style.css' : false,
      }),
      bundleSize()
    );

    return config;
  },
};
