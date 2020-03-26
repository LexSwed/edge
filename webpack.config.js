const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');

const pkg = require('./package.json');
const isDev = process.env.NODE_ENV !== 'production';

const config = {
  entry: {
    index: path.resolve(__dirname, 'src/@foxtrot/edge'),
  },
  output: {
    filename: 'index.js',
    library: 'edge',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'linaria/loader',
            options: { sourceMap: isDev },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !isDev,
            },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: isDev },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  stats: 'minimal',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: ['node_modules', 'src'],
  },
  externals: Object.keys(pkg.peerDependencies || {}).reduce((res, key) => ((res[key] = key), res), {}),
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: 'styles.css' }),
    new webpack.DefinePlugin({
      __DEV__: isDev,
    }),
  ],
};

if (isDev) {
  config.mode = 'development';
  config.watch = true;
} else {
  config.mode = 'production';
  config.optimization = {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
  };
}

if (process.env.REPORT) {
  config.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    })
  );
}

module.exports = config;
