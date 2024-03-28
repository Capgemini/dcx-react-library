import { useArgs } from '@storybook/preview-api';
import { FormInputMasked } from '../../src/formInput/FormInputMasked';

/**
 * In this section we're using the button component providing the **GovUk style** passing the relative `className.
 * Feel free to use your own css to style the formInput as you prefer.
 */
export default {
  title: 'DCXLibrary/Form/InputMasked/Class based',
  component: FormInputMasked,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'],
};

/**
 * The following example will accept numeric values and put a £ symbol
 */
export const PoundSymbol = {
  name: 'Pound symbol',
  render: function ({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const handleChange = (event) => {
      onChange(evt);
      setArgs({ value: event.currentTarget.value });
    };
    return <FormInputMasked {...args} onChange={handleChange} />;
  },
  args: {
    options: {
      mask: '£num',
      blocks: {
        num: {
          // nested masks are available!
          mask: Number,
          thousandsSeparator: ' ',
        },
      },
    },
    value: '',
    type: 'text',
    name: 'maskInput',
    className: 'govuk-input',
  },
  argTypes: { onChange: { action: 'onChange' } },
};

/**
 * The following example will create a mask for a date
 * min: 1990, 0, 1,
 * max: 2020, 0, 1,
 */
export const DateMask = {
  name: 'Date',
  render: function ({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const handleChange = (event) => {
      onChange(event);
    };
    return <FormInputMasked {...args} onChange={handleChange} />;
  },
  args: {
    options: {
      mask: Date,
      min: new Date(1990, 0, 1),
      max: new Date(2020, 0, 1),
      lazy: false,
    },
    value: '',
    type: 'text',
    name: 'maskInput',
    className: 'govuk-input',
  },
  argTypes: { onChange: { action: 'onChange' } },
};
