import { useArgs } from '@storybook/addons';
import { FormInput } from '../../../src/formInput';

/**
 * Here we display the component in its natural form, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Form/Input/Design system/Default',
  component: FormInput,
  decorators: [
    getStory => {
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

export const Basic = {
  name: 'Basic',
  render: function({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const handleChange = event => {
      onChange(event);
      setArgs({ value: event.currentTarget.value });
    };
    return <FormInput {...args} onChange={handleChange} />;
  },
  args: {
    name: 'text',
    type: 'text',
    value: '',
    ariaLabel: 'standard-input',
    ariaRequired: 'true',
  },
  argTypes: { onChange: { action: 'onChange' } },
};

export const Label = {
  name: 'Label',
  render: function({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const handleChange = event => {
      onChange(event);
      setArgs({ value: event.currentTarget.value });
    };
    return <FormInput {...args} onChange={handleChange} />;
  },
  args: {
    name: 'text',
    type: 'text',
    label: 'User Reference (Optional)',
    inputProps: {
      id: 'user-reference',
    },
    labelProps: {
      htmlFor: 'user-reference',
    },
    value: '',
    ariaLabel: 'standard-input',
    ariaRequired: 'true',
  },
  argTypes: { onChange: { action: 'onChange' } },
};

export const Suffix = {
  name: 'Suffix',
  render: function({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const handleChange = event => {
      onChange(event);
      setArgs({ value: event.currentTarget.value });
    };
    return <FormInput {...args} onChange={handleChange} />;
  },
  args: {
    name: 'text0',
    type: 'text',
    value: '',
    suffix: {
      properties: {
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
  render: function({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const handleChange = event => {
      onChange(event);
      setArgs({ value: event.currentTarget.value });
    };
    return <FormInput {...args} onChange={handleChange} />;
  },
  args: {
    name: 'text0',
    type: 'text',
    value: '',
    prefix: {
      properties: {
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
  render: function({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const handleChange = event => {
      onChange(event);
      setArgs({ value: event.currentTarget.value });
    };
    return <FormInput {...args} onChange={handleChange} />;
  },
  args: {
    name: 'text0',
    type: 'text',
    value: '',
    suffix: {
      properties: {
        'aria-hidden': 'true',
      },
      content: 'per item',
    },
    prefix: {
      properties: {
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
  render: function({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const handleChange = event => {
      onChange(event);
      setArgs({ value: event.currentTarget.value });
    };
    return <FormInput {...args} onChange={handleChange} />;
  },
  args: {
    name: 'text3',
    type: 'text',
    value: '',
    hint: {
      position: 'above',
      text: 'this is an example hint',
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
    },
    staticErrorMessage: 'some error appened here',
    errorPosition: 'after-hint',
  },
};

export const StaticErrorBottom = {
  name: 'Static error',
  args: {
    label: 'this is a label',
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
    },
    // staticErrorMessage: 'some error appened here',
    errorPosition: 'bottom',
  },
};

export const StaticErrorBottomHint = {
  name: 'Static error',
  args: {
    label: 'this is a label',
    name: 'id',
    inputProps: { id: 'id' },
    type: 'text',
    value: 'value',
    ariaLabel: 'input-with-error',
    ariaRequired: 'true',
    suffix: {
      properties: {
        'aria-hidden': 'true',
      },
      content: 'per item',
    },
    prefix: {
      properties: {
        'aria-hidden': 'true',
      },
      content: '£',
    },
    // hint: {
    //   position: 'bottom',
    //   text: 'My hint',
    //   id: 'id_hint',
    // },
    staticErrorMessage: 'some error appened here',
    errorPosition: 'after-label',
  },
};

/**
 * Note: to display the error message type a letter and remove it
 */
export const Error = {
  name: 'Error',
  render: function({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const handleChange = event => {
      onChange(event);
      setArgs({ value: event.currentTarget.value });
    };
    const handleValidity = valid => console.log(valid);
    return (
      <FormInput {...args} onChange={handleChange} isValid={handleValidity} />
    );
  },
  args: {
    name: 'text3',
    type: 'text',
    value: '',
    validation: {
      rule: {
        type: 'string',
        minLength: 1,
      },
      message: 'Enter an event name',
    },
    errorPosition: 'before-label',
    ariaLabel: 'standard-input-validation',
    ariaRequired: 'true',
  },
  argTypes: { onChange: { action: 'onChange' } },
};
