import React from 'react';
import { FormInput } from '../../../src/formInput';
import { useArgs } from '@storybook/preview-api';

const stylesButton = {
  all: 'unset',
  cursor: 'pointer',
  padding: '4px',
  marginLeft: '4px',
};

const stylesButtonActive = {
  backgroundColor: '#f5f5f5',
  borderBottom: '2px solid #3f51b5',
};

const InputStory = args => {
  const [, setArgs] = useArgs();
  const [variant, setVariant] = React.useState('floating');
  const handleChange = event => {
    setArgs({ value: event.currentTarget.value });
  };
  return (
    <div>
      <button
        style={{
          ...stylesButton,
          ...(variant === 'floating' && stylesButtonActive),
        }}
        onClick={() => setVariant('floating')}
      >
        OUTLINE
      </button>
      <button
        style={{
          ...stylesButton,
          ...(variant === 'floating-filled' && stylesButtonActive),
        }}
        onClick={() => setVariant('floating-filled')}
      >
        FILLED
      </button>
      <FormInput {...{ ...args, variant }} onChange={handleChange} />
    </div>
  );
};

/**
 * Here we display the component in its natural form for the `floating` variant, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Form/Input/Design system/Floating',
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

export const Label = {
  name: 'Label',
  render: InputStory,
  args: {
    variant: 'floating',
    name: 'text',
    type: 'text',
    label: 'this is a label',
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

export const Disabled = {
  name: 'Disabled',
  render: InputStory,
  args: {
    variant: 'floating',
    name: 'text',
    type: 'text',
    label: 'this is a label',
    inputProps: {
      id: 'user-reference',
      disabled: true,
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
  render: InputStory,
  args: {
    variant: 'floating',
    label: 'this is a label',
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
  render: InputStory,
  args: {
    variant: 'floating',
    label: 'this is a label',
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
  render: InputStory,
  args: {
    variant: 'floating',
    label: 'this is a label',
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
  render: InputStory,
  args: {
    variant: 'floating',
    label: 'this is a label',
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
  label: 'this is a label',
  render: InputStory,
  args: {
    variant: 'floating',
    label: 'this is a label',
    name: 'id',
    inputProps: { id: 'id' },
    type: 'text',
    value: 'value',
    ariaLabel: 'input-with-error',
    ariaRequired: 'true',
    staticErrorMessage: 'some error appened here',
    errorPosition: 'bottom',
  },
  argTypes: { onChange: { action: 'onChange' } },
};

export const StaticErrorHint = {
  name: 'Static error with hint',
  render: InputStory,
  args: {
    variant: 'floating',
    label: 'this is a label',
    name: 'id',
    inputProps: { id: 'id' },
    type: 'text',
    value: 'value',
    ariaLabel: 'input-with-error',
    ariaRequired: 'true',
    hint: {
      position: 'bottom',
      text: 'My hint',
      id: 'id_hint',
    },
    staticErrorMessage: 'some error appened here',
    errorPosition: 'bottom',
  },
};

export const StaticErrorBottomHint = {
  name: 'Static error bottom',
  render: InputStory,
  args: {
    variant: 'floating',
    label: 'this is a label',
    name: 'id',
    inputProps: { id: 'id' },
    type: 'text',
    value: 'value',
    ariaLabel: 'input-with-error',
    ariaRequired: 'true',
    hint: {
      position: 'bottom',
      text: 'My hint',
      id: 'id_hint',
    },
    staticErrorMessage: 'some error appened here',
    errorPosition: 'bottom',
  },
};

export const StaticErrorBottomHintAbove = {
  name: 'Static error after-label',
  render: InputStory,
  args: {
    variant: 'floating',
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
    hint: {
      position: 'bottom',
      text: 'My hint',
      id: 'id_hint',
    },
    staticErrorMessage: 'some error appened here',
    errorPosition: 'after-label',
  },
};

/**
 * Note: to display the error message type a letter and remove it
 */
export const Error = {
  name: 'Error',
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [, setArgs] = useArgs();
    const handleChange = event => {
      setArgs({ value: event.currentTarget.value });
    };
    // eslint-disable-next-line no-console
    const handleValidity = valid => console.log(valid);
    return (
      <FormInput {...args} onChange={handleChange} isValid={handleValidity} />
    );
  },
  args: {
    variant: 'floating',
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
