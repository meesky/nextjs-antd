const withAntdLess = require('next-plugin-antd-less');
const path = require('path');

module.exports = withAntdLess({
  // optional
  modifyVars: { '@primary-color': '#04f' },
  // optional
  lessVarsFilePath: './src/styles/variables.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    BASE_URL: 'https://mobitopup.vn',
    PHUONG_QUAN_URL: 'https://phuongquan.vn',
    ENDPOINT_URL: 'https://api.mobitopup.vn/api/v1',
  },
});
