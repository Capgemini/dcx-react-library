import { Link } from '../../../src/link/Link';
import style from '!raw-loader!../../themes/accessible.theme.css';
import { LiveProvider, LiveEditor } from 'react-live';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';

/**
 * This a theme aimed at easing the vizualization of the different elements of the component in order to improve the experience for people that have visual impairments.
 */
export default {
  title: 'DCXLibrary/Typography/Link/Design system/Accessible',
  component: Link,
  decorators: [
    getStory => {
      require('../../../dist/design-system/index.css');
      require('../../themes/accessible.theme.css');
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
  render: function() {
    return <Link value="Link" to={link} props={{ target: '_self' }} />;
  },
};

export const Visited = {
  name: 'Visited',
  render: function() {
    return <Link value="Link" to={link} props={{ target: '_self' }} />;
  },
};
