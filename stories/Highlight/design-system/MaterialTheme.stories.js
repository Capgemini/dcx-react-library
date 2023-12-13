import { Highlight } from '../../../src/highlight/Highlight';
import { LiveProvider, LiveEditor } from 'react-live';
// eslint-disable-next-line import/no-webpack-loader-syntax
import style from '!raw-loader!../../themes/material.theme.css';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';

/**
 * This a theme showcases an appearance similar to Material UI can be achieved.  
 * If you copy paste this snippet inside your css file you'll get a material design style
*/
export default {
  title: 'DCXLibrary/Typography/Highlight/Design system/Material',
  component: Highlight,
  decorators: [
    (getStory) => {
      require('../../../dist/design-system/index.css');
      require('../../themes/material.theme.css');
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
  args: {
    children: 'This is the content of the highlighted text.',
  },
};
