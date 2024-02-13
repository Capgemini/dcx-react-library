import { Label } from '../../../src/label/Label';
import style from '../../themes/accessible.theme.css?raw';
import { LiveProvider, LiveEditor } from 'react-live';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';

/**
 * This a theme aimed at easing the vizualization of the different elements of the component in order to improve the experience for people that have visual impairments.
 */
export default {
  title: 'DCXLibrary/Typography/Label/Design system/Accessible',
  component: Label,
  decorators: [
    (getStory) => {
      '../../../dist/design-system/index.css';
      '../../themes/accessible.theme.css';
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
  render: () =>
  (
    <LiveProvider code={StorybookUtils.getThemeCode('dcx-label', style)} disabled={true} language="css">
      <LiveEditor className="liveEditor" aria-label="editor" />
    </LiveProvider>
  )
  ,
};

export const Default = {
  name: 'Default',
  args: {
    value: 'Default label',
  },
};

export const Error = {
  name: 'Error',
  args: {
    value: 'Error label',
    className: 'dcx-error-message',
  },
};

export const Filled = {
  name: 'Filled',
  args: {
    value: 'Filled label',
  },
};
