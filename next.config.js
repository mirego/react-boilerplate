const path = require('path');
const dotenvLoad = require('dotenv-load');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');
const css = require('@zeit/next-css');
const typescript = require('@zeit/next-typescript');
const sourceMaps = require('@zeit/next-source-maps');
const bundleAnalyzer = require('@zeit/next-bundle-analyzer');
const withPlugins = require('next-compose-plugins');
const size = require('next-size');
const fonts = require('next-fonts');
const env = require('next-env');
const optimizedImages = require('next-optimized-images');
const progressBar = require('next-progressbar');

dotenvLoad();

module.exports = withPlugins(
  [
    env,
    css,
    optimizedImages,
    fonts,
    typescript,
    sourceMaps,
    size,
    bundleAnalyzer,
    [progressBar, {progressBar: {profile: true}}]
  ],
  {
    webpack(config, options) {
      if (options.isServer) {
        config.plugins.push(new ForkTsCheckerWebpackPlugin());
      }

      const FAVICON_PATH = path.resolve(__dirname, 'static', 'favicon.png');
      const webappPlugin = new WebappWebpackPlugin({
        logo: FAVICON_PATH,
        publicPath: '/_next',
        prefix: 'static/',
        inject: false,
        icons: {
          coast: false,
          yandex: false
        }
      });

      config.plugins.push(webappPlugin);
      config.module.rules.unshift(webappPlugin.rule());

      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.FAVICON_PATH': JSON.stringify(FAVICON_PATH)
        })
      );

      config.resolve.alias['boilerplate'] = path.resolve(__dirname);

      return config;
    }
  }
);
