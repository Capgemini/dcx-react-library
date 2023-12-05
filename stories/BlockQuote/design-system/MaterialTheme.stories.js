import { Blockquote } from '../../../src/blockquote/Blockquote';
import { LiveProvider, LiveEditor } from 'react-live';
// eslint-disable-next-line import/no-webpack-loader-syntax
import style from '!raw-loader!../../themes/material.theme.css';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';

/**
 * This is a theme that showcases an appearance similar to Material UI can be achieved.
 * If you copy paste this snippet inside your css file you'll get a material design style
 */
export default {
  title: 'DCXLibrary/Typography/Blockquote/Design system/Material',
  component: Blockquote,
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
      code={StorybookUtils.getThemeCode('dcx-blockquote', style)}
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
    text: 'This is the content of the blockquote.',
    footer: 'This is the footer of the blockquote',
  },
};
