import { Heading } from '../../../src/heading/Heading';
import style from '../../themes/accessible.theme.css?raw';
import { LiveProvider, LiveEditor } from 'react-live';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';

/**
* This is a theme aimed at easing the vizualization of the different elements of the component in order to improve the experience for people that have visual impairments.
*/
export default {
  title: 'DCXLibrary/Typography/Heading/Design system/Accessible',
  component: Heading,
  decorators: [
    (getStory) => {
      '../../../dist/design-system/index.css';
      '../../themes/accessible.theme.css';
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
    <LiveProvider code={StorybookUtils.getThemeCode('dcx-heading', style)} disabled={true} language="css">
      <LiveEditor className="liveEditor" aria-label="editor" />
    </LiveProvider>
  )
};

export const Default = {
  name: 'Default',
  args: {
    label: 'This is the content of the heading',
    level: 'h1',
  }
};

export const level2 = {
  name: 'level_2',
  args: {
    label: 'This is the content of the heading',
    level: 'h2',
    variant: 'level_2',
  }
};

export const level3 = {
  name: 'level_3',
  args: {
    label: 'This is the content of the heading',
    level: 'h3',
    variant: 'level_3',
  }
};

export const level4 = {
  name: 'level_4',
  args: {
    label: 'This is the content of the heading',
    level: 'h4',
    variant: 'level_4',
  }
};

export const level5 = {
  name: 'level_5',
  args: {
    label: 'This is the content of the heading',
    level: 'h5',
    variant: 'level_5',
  }
};

export const level6 = {
  name: 'level_6',
  args: {
    label: 'This is the content of the heading',
    level: 'h6',
    variant: 'level_6',
  }
};
