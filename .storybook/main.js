process.env.DESIGN_TOKEN_GLOB = "**/tokens.css";

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../stories/**/*.stories.@(mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    'storybook-css-modules-preset',
    '@storybook/addon-a11y',
    {
      name: "storybook-design-token", options: {
        preserveCSSVars: false,
      }
    }
  ]
};
