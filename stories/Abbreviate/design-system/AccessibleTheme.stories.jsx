import { Abbreviate } from '../../../src/abbreviate/Abbreviate';
import { Paragraph } from '../../../src/paragraph/Paragraph';
import style from '../../themes/accessible.theme.css?raw';
import { LiveProvider, LiveEditor } from 'react-live';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';

/**
 * This a theme aimed at easing the vizualization of the different elements of the component in order to improve the experience for people that have visual impairments.
 */
export default {
  title: 'DCXLibrary/Typography/Abbreviate/Design system/Accessible',
  component: Abbreviate,
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
