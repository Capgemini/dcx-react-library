import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#2b0a3d',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#2b0a3d',
  appBorderRadius: 4,

  // Text colors
  textColor: '#0070ad',
  fontWeight: 'bold',

  // Toolbar default and active colors
  barTextColor: '#0070ad',
  barSelectedColor: '#0070ad',

  // Form colors
  inputBg: 'white',
  inputBorder: '#2b0a3d',
  inputTextColor: 'black',
  inputBorderRadius: 6,

  brandTitle: 'Capgemini storybook',
  brandUrl: 'https://www.capgemini.com',
  brandImage: 'https://www.capgemini.com/gb-en/wp-content/themes/capgemini-komposite/assets/images/logo.svg',
});