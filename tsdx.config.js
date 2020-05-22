const bundleSize = require('rollup-plugin-bundle-size');
const images = require('@rollup/plugin-image');
const svgr = require('@svgr/rollup').default;
const peerDepsExternal = require('rollup-plugin-peer-deps-external');

// const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  rollup(config) {
    config.plugins.push(
      svgr(),
      images({ include: ['**/*.png', '**/*.jpg', '**/*.webp'] }),
      peerDepsExternal(),
      bundleSize()
    );

    return config;
  },
};
