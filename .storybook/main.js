const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.@(mdx)'],
  addons: [
      '@storybook/addon-links', 
      '@storybook/addon-essentials', 
      '@storybook/addon-docs', 
      '@storybook/addon-controls', 
      'storybook-css-modules-preset'
    ]
};
