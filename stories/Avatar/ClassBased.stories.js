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
