import { FormInput } from '../../../src/formInput';
// eslint-disable-next-line import/no-webpack-loader-syntax
import style from '!raw-loader!../../themes/dark.theme.css';
import { useArgs } from '@storybook/preview-api';
import { LiveProvider, LiveEditor } from 'react-live';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';

const InputStory = (args) => {
  const [, setArgs] = useArgs();
  const handleChange = (event) => {
    setArgs({ value: event.currentTarget.value });
  };
  return <FormInput {...args} onChange={handleChange} />;
};

/**
 * This a theme showcases how to customize the component so it can be used on dark backgrounds.
 */
export default {
  title: 'DCXLibrary/Form/Input/Design system/Dark',
  component: FormInput,
  decorators: [
    (getStory) => {
      require('../../../dist/design-system/index.css');
      require('../../themes/dark.theme.css');
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

export const Basic = {
  name: 'Basic',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#282c34' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  render: InputStory,
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
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#282c34' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  render: InputStory,
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

export const Disabled = {
  name: 'Disabled',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#282c34' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  render: InputStory,
  args: {
    name: 'text',
    type: 'text',
    label: 'User Reference (Optional)',
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
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#282c34' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  render: InputStory,
  args: {
    name: 'text0',
    label: 'this is a label',
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
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#282c34' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  render: InputStory,
  args: {
    name: 'text0',
    label: 'this is a label',
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
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#282c34' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  render: InputStory,
  args: {
    name: 'text0',
    label: 'this is a label',
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
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#282c34' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  render: InputStory,
  args: {
    name: 'text3',
    label: 'this is a label',
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
  name: 'Static error after hint',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#282c34' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
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
  argTypes: { onChange: { action: 'onChange' } },
};

export const StaticErrorBottom = {
  name: 'Static error bottom',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#282c34' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
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
    errorPosition: 'bottom',
  },
};

export const StaticErrorBottomHint = {
  name: 'Static error bottom',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#282c34' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  args: {
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
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#282c34' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
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
    hint: {
      position: 'bottom',
      text: 'My hint',
      id: 'id_hint',
    },
    staticErrorMessage: 'some error appened here',
    errorPosition: 'after-label',
  },
};
