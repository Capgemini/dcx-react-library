import { InsertText } from '../../src/insertText/InsertText';
/**
 * In this section we're using the InsertText component passing the relative className.
 * Feel free to use your own css to style the formInput as you prefer.
 */
export default {
  title: 'DCXLibrary/Typography/InsertText/Class based',
  component: InsertText,
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
    value:
      'It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.',
    className: 'govuk-inset-text',
  },
};
