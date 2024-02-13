import { KeyboardInput } from '../../../src/keyBoard/KeyboardInput';
import { LiveProvider, LiveEditor } from 'react-live';
import style from '../../themes/material.theme.css?raw';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';

/**
 * This a theme showcases an appearance similar to Material UI can be achieved.  
 * If you copy paste this snippet inside your css file you'll get a material design style
*/
export default {
  title: 'DCXLibrary/Typography/KeyboardInput/Design system/Material',
  component: KeyboardInput,
  decorators: [
    (getStory) => {
      '../../../dist/design-system/index.css';
      '../../themes/material.theme.css';
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
    <LiveProvider code={StorybookUtils.getThemeCode('dcx-keyboard-Input', style)} disabled={true} language="css">
      <LiveEditor className="liveEditor" aria-label="editor" />
    </LiveProvider>
  )
};

export const Default = {
  name: 'Default',
  args: {
    children: 'ctrl+p',
  },
};
