import { CharacterCount } from '../../src/characterCount/CharacterCount';

export default {
  title: 'DCXLibrary/Form/CharacterCount/Without style',
  component: CharacterCount,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

/**
 * For a list of all the possible usage please look the Class based folder
 */
export const Unstyled = {
  args: {
    label: 'Label for text area',
    hint: { text: 'Optional hint' },
    maxLength:10,
    cols:30,
    rows:5
  },
};