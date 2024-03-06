import style from '!raw-loader!../../themes/accessible.theme.css';
import { LiveProvider, LiveEditor } from 'react-live';
import { FormCheckbox } from '../../../src/formCheckbox/FormCheckbox';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';

/**
 * This a theme aimed at easing the vizualization of the different elements of the component in order to improve the experience for people that have visual impairments.
 */
export default {
  title: 'DCXLibrary/Form/CheckBox/Design system/Accessible',
  component: FormCheckbox,
  decorators: [
    (getStory) => {
      require('../../../dist/design-system/index.css');
      require('../../themes/accessible.theme.css');
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
    inputClassName: 'focusCheckBox',
  },
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
