import { Highlight } from '../../../src/highlight/Highlight';
import style from '../../themes/dark.theme.css?raw';
import { LiveProvider, LiveEditor } from 'react-live';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';

/**
* This a theme showcases how to customize the component so it can be used on dark backgrounds.
*/
export default {
  title: 'DCXLibrary/Typography/Highlight/Design system/Dark',
  component: Highlight,
  decorators: [
    (getStory) => {
      '../../themes/design-system/index.css';
      '../../themes/dark.theme.css';
      return getStory();
    }
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
  tags: ['autodocs']
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
    <LiveProvider code={StorybookUtils.getThemeCode('dcx-highlight', style)} disabled={true} language="css">
      <LiveEditor className="liveEditor" aria-label="editor" />
    </LiveProvider>
  )
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
    children: 'This is the content of the highlighted text.',
  },
};

