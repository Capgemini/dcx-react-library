import { Paragraph } from '../../../src/paragraph/Paragraph';
import { LiveProvider, LiveEditor } from 'react-live';
import style from '../../themes/material.theme.css?raw';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';

/**
 * This a theme showcases an appearance similar to Material UI can be achieved.
 * If you copy paste this snippet inside your css file you'll get a material design style
 */
export default {
  title: 'DCXLibrary/Typography/Paragraph/Design system/Material',
  component: Paragraph,
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
      code={StorybookUtils.getThemeCode('dcx-paragraph', style)}
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
    children: 'This is the content of the paragraph.',
  },
};

export const Value = {
  name: 'Value',
  args: {
    value: 'This is the content of the paragraph.',
  },
};

export const CustomContent = {
  name: 'CustomContent',
  args: {
    children: [
      'This is the simple custom-content of the ',
      <strong>paragraph</strong>,
    ],
  },
};
