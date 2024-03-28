import { FormInput } from '../../src/formInput/FormInput';
import { useArgs } from '@storybook/preview-api';

/**
 * In this section we're using the button component providing the **GovUk style** passing the relative `className.
 * Feel free to use your own css to style the formInput as you prefer.
 */
export default {
  title: 'DCXLibrary/Form/Input/Class based',
  component: FormInput,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'],
};

export const Basic = {
  name: 'Basic',
  render: function ({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const handleChange = (event) => {
      onChange(event);
      setArgs({ value: event.currentTarget.value });
    };
    return <FormInput {...args} onChange={handleChange} />;
  },
  args: {
    name: 'text',
    type: 'text',
    inputProps: { className: 'govuk-input' },
    value: '',
    ariaLabel: 'standard-input',
    ariaRequired: 'true',
  },
  argTypes: { onChange: { action: 'onChange' } },
};

export const Label = {
  name: 'Label',
  render: function ({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const handleChange = (event) => {
      onChange(event);
      setArgs({ value: event.currentTarget.value });
    };
    return <FormInput {...args} onChange={handleChange} />;
  },
  args: {
    name: 'text',
    type: 'text',
    label: 'User Reference (Optional)',
    containerClassName: 'govuk-label',
    inputProps: {
      id: 'user-reference',
      className: 'govuk-input',
    },
    labelProps: {
      htmlFor: 'user-reference',
      className: 'govuk-label',
    },
    value: '',
    ariaLabel: 'standard-input',
    ariaRequired: 'true',
  },
  argTypes: { onChange: { action: 'onChange' } },
};

export const Suffix = {
  name: 'Suffix',
  render: function ({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const handleChange = (event) => {
      onChange(event);
      setArgs({ value: event.currentTarget.value });
    };
    return <FormInput {...args} onChange={handleChange} />;
  },
  args: {
    name: 'text0',
    type: 'text',
    inputClassName: 'govuk-input',
    value: '',
    suffix: {
      properties: {
        className: 'govuk-input__suffix',
        'aria-hidden': 'true',
      },
      content: 'kg',
    },
    ariaLabel: 'standard-input-suffix',
    ariaRequired: 'true',
  },
  argTypes: { onChange: { action: 'onChange' } },
};

export const Prefix = {
  name: 'Prefix',
  render: function ({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const handleChange = (event) => {
      onChange(event);
      setArgs({ value: event.currentTarget.value });
    };
    return <FormInput {...args} onChange={handleChange} />;
  },
  args: {
    name: 'text0',
    type: 'text',
    inputClassName: 'govuk-input',
    value: '',
    prefix: {
      properties: {
        className: 'govuk-input__prefix',
        'aria-hidden': 'true',
      },
      content: '£',
    },
    ariaLabel: 'standard-input-suffix',
    ariaRequired: 'true',
  },
  argTypes: { onChange: { action: 'onChange' } },
};

export const PrefixAndSuffix = {
  name: 'Prefix and suffix',
  render: function ({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const handleChange = (event) => {
      onChange(event);
      setArgs({ value: event.currentTarget.value });
    };
    return <FormInput {...args} onChange={handleChange} />;
  },
  args: {
    name: 'text0',
    type: 'text',
    inputClassName: 'govuk-input',
    value: '',
    suffix: {
      properties: {
        className: 'govuk-input__suffix',
        'aria-hidden': 'true',
      },
      content: 'per item',
    },
    prefix: {
      properties: {
        className: 'govuk-input__prefix',
        'aria-hidden': 'true',
      },
      content: '£',
    },
    ariaLabel: 'standard-input-suffix',
    ariaRequired: 'true',
  },
  argTypes: { onChange: { action: 'onChange' } },
};

export const Hint = {
  name: 'Hint',
  render: function ({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const handleChange = (event) => {
      onChange(event);
      setArgs({ value: event.currentTarget.value });
    };
    return <FormInput {...args} onChange={handleChange} />;
  },
  args: {
    name: 'text3',
    type: 'text',
    value: '',
    inputClassName: 'govuk-input',
    hint: {
      position: 'above',
      text: 'this is an example hint',
      className: 'govuk-hint',
    },
    ariaLabel: 'standard-input-validation',
    ariaRequired: 'true',
  },
  argTypes: { onChange: { action: 'onChange' } },
};

export const StaticError = {
  name: 'Static error',
  args: {
    label: 'this is a label',
    containerClassName: 'govuk-form-group',
    inputClassName: 'govuk-input',
    labelClassName: 'govuk-label',
    name: 'id',
    inputProps: { id: 'id' },
    type: 'text',
    value: 'value',
    ariaLabel: 'input-with-error',
    ariaRequired: 'true',
    hint: {
      position: 'above',
      text: 'My hint',
      id: 'id_hint',
      className: 'govuk-hint',
    },
    errorProps: {
      className: 'govuk-error-message',
    },
    staticErrorMessage: 'some error appened here',
    errorPosition: 'after-hint',
    containerClassNameError: 'govuk-form-group--error',
  },
};

/**
 * Note: to display the error message type a letter and remove it
 */
export const Error = {
  name: 'Error',
  render: function ({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const handleChange = (event) => {
      onChange(event);
      setArgs({ value: event.currentTarget.value });
    };
    const handleValidity = (valid) => console.log(valid);
    return (
      <FormInput {...args} onChange={handleChange} isValid={handleValidity} />
    );
  },
  args: {
    name: 'text3',
    type: 'text',
    value: '',
    inputClassName: 'govuk-input',
    errorProps: {
      className: 'govuk-error-message',
    },
    validation: {
      rule: {
        type: 'string',
        minLength: 1,
      },
      message: 'Enter an event name',
    },
    errorMessage: {
      className: 'govuk-error-message',
    },
    errorPosition: 'before-label',
    ariaLabel: 'standard-input-validation',
    ariaRequired: 'true',
  },
  argTypes: { onChange: { action: 'onChange' } },
};
