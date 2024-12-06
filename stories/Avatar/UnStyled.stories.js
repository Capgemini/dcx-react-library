import { Avatar } from '../../src/avatar/Avatar';
import { FormSelect } from '../../src/formSelect/FormSelect';

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
      'JB',
    ],
    style:{
      background: 'lightGrey',
      border: '1px solid #326fa9'
    },
    shape: 'circle',
    width: '3em',
    height: '3em',
    avatarLink: 'http://localhost/',
    avatarLinkTarget: '_blank',
    alt: 'A sample avatar element',
  },
};
