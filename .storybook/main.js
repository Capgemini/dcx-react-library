process.env.DESIGN_TOKEN_GLOB = "**/tokens.css";
const config = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    'storybook-css-modules-preset',
    '@storybook/addon-a11y',
    {
        name: "storybook-design-token",
        options: {
          preserveCSSVars: false
        },
      docs: {
        autodocs: "tag",
      },
    },
    '@storybook/addon-mdx-gfm'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
};

export default config;