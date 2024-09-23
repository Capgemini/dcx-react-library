import { Avatar } from '../../src/avatar/Avatar';

export default {
  title: 'DCXLibrary/Form/Avatar/Without style',
  component: Avatar,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  argTypes: {
    children: {
      description: 'Allows you to add an element as children',
    },
  },
};

export const Unstyled = {
  args: {
    avatarLink: 'http://localhost/',
    children: [
      'EL',
    ],
  },
};
