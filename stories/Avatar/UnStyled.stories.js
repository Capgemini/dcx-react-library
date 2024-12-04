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
    children: [
      'EL',
    ],
    style:{
      background: 'lightGrey',
    },
    shape: 'circle',
    width: '3em',
    height: '3em',
    avatarLink: 'http://localhost/',
    avatarLinkTarget: '_blank',
    alt: 'A sample avatar element',
  },
};
