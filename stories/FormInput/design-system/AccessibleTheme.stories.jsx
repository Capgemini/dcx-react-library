import { FormInput } from '../../../src/formInput';
import style from '../../themes/accessible.theme.css?raw';
import { useArgs } from '@storybook/preview-api';
import { LiveProvider, LiveEditor } from 'react-live';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';

const InputStory = args => {
  const [, setArgs] = useArgs();
  const handleChange = event => {
    setArgs({ value: event.currentTarget.value });
  };
  return <FormInput {...args} onChange={handleChange} />;
};

/**
 * This theme is aimed at easing the visualization of the different elements of the component to improve the experience for people with visual impairments.
 */
export default {
  title: 'DCXLibrary/Form/Input/Design system/Accessible',
  component: FormInput,
  decorators: [
    getStory => {
      import('../../themes/design-system/index.css');
      import('../../themes/accessible.theme.css');
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
  label: 'this is a label',
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
