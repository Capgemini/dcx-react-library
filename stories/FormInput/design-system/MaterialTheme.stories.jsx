import { FormInput } from '../../../src/formInput';
import { LiveProvider, LiveEditor } from 'react-live';
import { useArgs } from '@storybook/preview-api';
import style from '../../themes/material.theme.css?raw';

import { StorybookUtils } from '../../../core/storybook/StorybookUtils';
import React from 'react';

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
 * This a theme showcases an appearance similar to Material UI can be achieved.
 * If you copy paste this snippet inside your css file you'll get a material design style
 */
export default {
  title: 'DCXLibrary/Form/Input/Design system/Material',
  component: FormInput,
  decorators: [
    getStory => {
      import('../../themes/design-system/index.css');
      import('../../themes/material.theme.css');
      return getStory();
    },
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
  tags: ['autodocs'],
};

export const ShowCase = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#282c34' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  render: () => (
    <LiveProvider
      code={StorybookUtils.getThemeCode('dcx-form-input', style)}
      disabled={true}
      language="css"
    >
      <LiveEditor className="liveEditor" aria-label="editor" />
    </LiveProvider>
  ),
};

export const Default = {
  name: 'Default',
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
  render: InputStory,
  name: 'Static error with hint',
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
  render: InputStory,
  name: 'Static error bottom',
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
  render: InputStory,
  name: 'Static error after-label',
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
