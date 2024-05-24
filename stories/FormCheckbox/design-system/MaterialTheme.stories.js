import { LiveProvider, LiveEditor } from 'react-live';
import style from '!raw-loader!../../themes/material.theme.css';

import { StorybookUtils } from '../../../core/storybook/StorybookUtils';
import { FormCheckbox } from '../../../src/formCheckbox/FormCheckbox';

/**
 * This a theme showcases an appearance similar to Material UI can be achieved.
 * If you copy paste this snippet inside your css file you'll get a material design style
 */
export default {
  title: 'DCXLibrary/Form/CheckBox/Design system/Material',
  component: FormCheckbox,
  decorators: [
    (getStory) => {
      require('../../../dist/design-system/index.css');
      require('../../themes/material.theme.css');
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
    //itemClassName: 'circle',
    // inputClassName: 'circle',
  },
};

// export const Default = {
//   name: 'Default',
//   render: function () {
//     return <FormCheckbox label={'abc'} value="abc" />;
//   },
// };

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
