const postcss = require('rollup-plugin-postcss');
const json =  require('@rollup/plugin-json');
module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        modules: true,
        extensions: ['.scss','.css']
      }),
      json()
    );
    return config;
  },
};