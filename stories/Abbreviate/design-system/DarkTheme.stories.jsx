import { Abbreviate } from '../../../src/abbreviate/Abbreviate';
import { Paragraph } from '../../../src/paragraph/Paragraph';
// eslint-disable-next-line import/no-webpack-loader-syntax
import style from '../../themes/dark.theme.css?raw';
import { LiveProvider, LiveEditor } from 'react-live';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';

/**
 * This a theme showcases how to customize the component so it can be used on dark backgrounds.
 */
export default {
  title: 'DCXLibrary/Typography/Abbreviate/Design system/Dark',
  component: Abbreviate,
  decorators: [
    getStory => {
      import('../../themes/design-system/index.css');
      import('../../themes/dark.theme.css');
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
    title: 'As soon as possible',
    value: 'ASAP',
  },
  render: ({ title, value }) => (
    <Paragraph>
      Sorry, i call you <Abbreviate {...{ title, value }} />
    </Paragraph>
  ),
};
