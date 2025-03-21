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

export const LabelWithValue = {
  name: 'Label rendering value prop',
  args: {
    value: 'text',
    className: 'govuk-label',
  },
};

export const LabelWithChildren = {
  name: 'Label rendering child component',
  render: function(args) {
    return (
      <Label {...args}>
        <p>text</p>
      </Label>
    );
  },
  args: {
    className: 'govuk-label',
  },
};
