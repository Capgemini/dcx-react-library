import { useArgs } from '@storybook/preview-api';
import { FormCheckbox } from '../../../src/formCheckbox/FormCheckbox';

/**
 * Here we display the component in its natural form, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Form/CheckBox/Design system/Default',
  component: FormCheckbox,
  decorators: [
    (getStory) => {
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

export const Default = {
  name: 'Default',
  args: {
    label: 'Lorem ipsum',
    value: 'lorem',
    id: 'lorem',
  },
};

export const Disabled = {
  name: 'Disabled',
  args: {
    label: 'Disabled checkbox',
    value: 'disabled',
    id: 'disabled',
    disabled: true,
  },
};

export const Preselected = {
  name: 'Preselected',
  args: {
    label: 'Checked checkbox',
    value: 'filled',
    id: 'filled',
    selected: true,
  },
};

export const Focus = {
  name: 'Focus',
  args: {
    label: 'Focused checkbox',
    value: 'focus',
    id: 'focus',
    inputClassName: 'focus-checkBox',
  },
};

export const Hint = {
  name: 'with Hint',
  render: function ({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const checkboxHandler = (evt) => {
      onChange(evt);
      setArgs({
        value: evt.currentTarget.value,
        defaultChecked: !args.defaultChecked,
      });
      setChecked(!checked);
    };
    return <FormCheckbox {...args} onChange={checkboxHandler} />;
  },
  args: {
    name: 'lorem-2',
    label: 'Lorem ipsum',
    value: 'lorem ipsum',
    id: 'lorem-2',
    defaultChecked: false,
    hint: {
      text: 'Lorem ipsum hint text',
      id: 'nationality-item-hint',
    },
  },
  argTypes: { onChange: { action: 'changed' } },
};

export const HintAbove = {
  name: 'with Hint avobe',
  render: function ({ onChange, ...args }) {
    const [args_, setArgs] = useArgs();
    const checkboxHandler = (evt) => {
      onChange(evt);
      setArgs({
        value: evt.currentTarget.value,
        defaultChecked: !args.defaultChecked,
      });
      setChecked(!checked);
    };
    return <FormCheckbox {...args} onChange={checkboxHandler} />;
  },
  args: {
    name: 'lorem-2',
    label: 'Lorem ipsum',
    value: 'lorem ipsum',
    id: 'lorem-2',
    defaultChecked: false,
    hint: {
      text: 'Lorem ipsum hint text',
      id: 'nationality-item-hint',
      position: 'above',
    },
  },
  argTypes: { onChange: { action: 'changed' } },
};

export const Error = {
  name: 'Error',
  args: {
    label: 'Lorem ipsum',
    value: 'lorem',
    id: 'lorem',
    isError: true,
  },
};
