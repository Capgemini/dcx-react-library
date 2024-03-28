import { FormSelect } from '../../../src/formSelect/FormSelect';

/**
 * Here we display the component in its natural form for the `floating` variant, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Form/Select/Design system/Floating',
  component: FormSelect,
  decorators: [
    (getStory) => {
      require('../../../dist/design-system/index.css');
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
    label: 'My label',
    options: ['Option 1', 'Option 2'],
    nullOption: 'Select an option...',
    variant: 'floating',
  },
};

export const Hint = {
  name: 'Hint',
  args: {
    label: 'My label',
    options: ['Option 1', 'Option 2'],
    nullOption: 'Select an option...',
    hint: {
      text: 'This is and example of hintText/description of what we need from you',
    },
    variant: 'floating',
  },
};

export const Error = {
  name: 'Error',
  args: {
    label: 'My label',
    options: ['Option 1', 'Option 2'],
    nullOption: 'Select an option...',
    errorMessage: 'Some error',
    variant: 'floating',
  },
};

export const HintAndError = {
  name: 'Hint and error',
  args: {
    label: 'My label',
    options: ['Option 1', 'Option 2'],
    nullOption: 'Select an option...',
    hint: {
      text: 'This is and example of hintText/description of what we need from you',
    },
    errorMessage: 'Some error',
    variant: 'floating',
  },
};

export const Value = {
  name: 'With Value',
  args: {
    label: 'My label',
    options: ['Option 1', 'Option 2'],
    nullOption: 'Select an option...',
    value: 'Option 1',
    variant: 'floating',
  },
};
