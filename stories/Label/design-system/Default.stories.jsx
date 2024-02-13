import { Label } from '../../../src/label/Label';

/**
 * Here we display the component in its natural form, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Typography/Label/Design system/Default',
  component: Label,
  decorators: [
    (getStory) => {
      '../../themes/design-system/index.css';
      return getStory();
    },
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
  tags: ['autodocs'],
};

export const Default = {
  name: 'Default',
  args: {
    value: 'Default label',
  },
};

export const Error = {
  name: 'Error',
  args: {
    value: 'Error label',
    className: 'dcx-error-message',
  },
};

export const Filled = {
  name: 'Filled',
  args: {
    value: 'Filled label',
  },
};
