import { Link } from '../../../src/link/Link';
import { LiveProvider, LiveEditor } from 'react-live';
import style from '../../themes/material.theme.css?raw';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';

/**
 * This a theme showcases an appearance similar to Material UI can be achieved.
 * If you copy paste this snippet inside your css file you'll get a material design style
 */
export default {
  title: 'DCXLibrary/Typography/Link/Design system/Material',
  component: Link,
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
      code={StorybookUtils.getThemeCode('dcx-link', style)}
      disabled={true}
      language="css"
    >
      <LiveEditor className="liveEditor" aria-label="editor" />
    </LiveProvider>
  ),
};

const timestamp = new Date().getTime();
const link = `#?time=${timestamp}`;

export const Default = {
  name: 'Default',
  render: function () {
    return <Link value="Link" to={link} props={{ target: '_self' }} />;
  },
};

export const Visited = {
  name: 'Visited',
  render: function () {
    return <Link value="Link" to={link} props={{ target: '_self' }} />;
  },
};
