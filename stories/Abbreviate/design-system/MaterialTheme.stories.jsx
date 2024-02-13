import { Abbreviate } from '../../../src/abbreviate/Abbreviate';
import { LiveProvider, LiveEditor } from 'react-live';
// eslint-disable-next-line import/no-webpack-loader-syntax
import style from '../../themes/material.theme.css?raw';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';
import { Paragraph } from '../../../src/paragraph/Paragraph';

/**
 * This a theme showcases an appearance similar to Material UI can be achieved.
 * If you copy paste this snippet inside your css file you'll get a material design style
 */
export default {
  title: 'DCXLibrary/Typography/Abbreviate/Design system/Material',
  component: Abbreviate,
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
      code={StorybookUtils.getThemeCode('dcx-abbreviate', style)}
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
    title: 'As soon as possible',
    value: 'ASAP',
  },
  render: ({ title, value }) => (
    <Paragraph>
      Sorry, i call you <Abbreviate {...{ title, value }} />
    </Paragraph>
  ),
};