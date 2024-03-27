import style from '!raw-loader!../../themes/dark.theme.css';
import { LiveProvider, LiveEditor } from 'react-live';
import { FormCheckbox } from '../../../src/formCheckbox/FormCheckbox';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';

/**
 * This a theme showcases how to customize the component so it can be used on dark backgrounds.
 */
export default {
  title: 'DCXLibrary/Form/CheckBox/Design system/Dark',
  component: FormCheckbox,
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
      code={StorybookUtils.getThemeCode('dcx-checkbox', style)}
      disabled={true}
      language="css"
    >
      <LiveEditor className="liveEditor" aria-label="editor" />
    </LiveProvider>
  ),
};

export const Default = {
  name: 'Default',
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
    label: 'Lorem ipsum',
    value: 'lorem',
    id: 'lorem',
  },
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
  args: {
    label: 'Disabled checkbox',
    value: 'disabled',
    id: 'disabled',
    disabled: true,
  },
};

export const Preselected = {
  name: 'Preselected',
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
    label: 'Checked checkbox',
    value: 'filled',
    id: 'filled',
    selected: true,
  },
};

export const Focus = {
  name: 'Focus',
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
    label: 'Focused checkbox',
    value: 'focus',
    id: 'focus',
    inputClassName: 'focusCheckBox',
  },
};

export const Error = {
  name: 'Error',
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
    label: 'Lorem ipsum',
    value: 'lorem',
    id: 'lorem',
    isError: true,
  },
};
