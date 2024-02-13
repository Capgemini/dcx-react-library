import { Label } from '../../src/label/Label';

/**
 * In this section we're using the Label component providing the **GovUk style** passing the relative className.
 * Feel free to use your own css to style the formInput as you prefer.
 */
export default {
  title: 'DCXLibrary/Typography/Label/Class based',
  component: Label,
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
    value: 'text',
    className: 'govuk-label',
  },
};
