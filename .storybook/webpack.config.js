const path = require('path');
const pathToInlineSvg = path.resolve(__dirname, '../resources/icons');
module.exports = ({ config, mode }) => {
  // styles
  config.module.rules.push({
    test: /\.(sass|scss|css)$/,
    use: ['resolve-url-loader'],
    include: path.resolve(__dirname, '../'),
  });

  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|ttf)$/,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  });
  // use svgr for svg files
  config.module.rules.push({
    test: /\.svg$/,
    include: pathToInlineSvg,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
        },
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
