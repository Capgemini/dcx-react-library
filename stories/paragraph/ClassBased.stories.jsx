import { Paragraph } from '../../src/paragraph/Paragraph';
/**
 * In this section we're using the paragraph component providing the **GovUk style** passing the relative `className.
 * Feel free to use your own css to style the paragraph as you prefer.
 */
export default {
  title: 'DCXLibrary/Typography/Paragraph/Class based',
  component: Paragraph,
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
    className: 'govuk-body',
    children: 'This is the content of the paragraph.',
  },
};

export const BasicValue = {
  name: 'BasicValue',
  args: {
    className: 'govuk-body',
    value: 'This is the content of the paragraph.',
  },
};

export const Complex = {
  name: 'CustomContent',
  args: {
    className: 'govuk-body',
    children: [
      'This is the simple custom-content of the ',
      <strong>paragraph</strong>,
    ],
  },
};
