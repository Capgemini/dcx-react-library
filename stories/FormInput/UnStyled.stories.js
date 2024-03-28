import { FormInput } from '../../src/formInput';
import { useArgs } from '@storybook/preview-api';

export default {
  title: 'DCXLibrary/Form/Input/Without style',
  component: FormInput,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  render: function ({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const handleChange = (event) => {
      onChange(event);
      setArgs({ value: event.currentTarget.value });
      console.log(args);
    };

    const handleValidity = (valid) => {
      console.log(valid);
    };
    return (
      <FormInput {...args} onChange={handleChange} isValid={handleValidity} />
    );
  },
  args: {
    name: 'password',
    type: 'text',
    value: '',
    ariaLabel: 'unstyled-input',
    ariaRequired: 'true',
    inputProps: {
      placeholder: 'enter your password',
    },
    errorProps: {
      style: { fontSize: '10px', color: 'red', fontWeight: 'bold' },
    },
    validation: {
      rule: {
        type: 'password',
        minLength: 8,
        uppercase: 1,
        numbers: 1,
        matchesOneOf: ['@', '_', '-', '.', '!'],
      },
      message:
        'your password need to be min 8 chars 1 Uppercase, 1 Number and one special character',
    },
    errorPosition: 'bottom',
    prefix: {
      properties: {
        style: {
          border: '1px solid #d2d2d2',
          padding: '5px',
        },
      },
      content: 'Pre',
    },
    suffix: {
      properties: {
        style: {
          border: '1px solid #d2d2d2',
          padding: '5px',
        },
      },
      content: 'Post',
    },
  },
  argTypes: { onChange: { action: 'onChange' } },
};
