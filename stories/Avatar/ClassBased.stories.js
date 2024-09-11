import { Avatar } from '../../src/avatar/Avatar';
import { useArgs } from '@storybook/preview-api';

export default {
  title: 'DCXLibrary/Form/Avatar/Class based',
  component: Avatar,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'],
};

export const Basic = {
  name: 'Basic',
  args: {
    children: 'JB'
  },
};

export const WithImage = {
  name: 'With Image',
  args: {
    src: 'https://www.capgemini.com/gb-en/wp-content/themes/capgemini-komposite/assets/images/logo.svg',
  },
};

/**
 * Avatar can be passed in different child properties such as links to external websites or custom components
 */
export const CustomContent = {
  args: {
    children: <a href="#" target="_blank">EL</a>,
  },
};
