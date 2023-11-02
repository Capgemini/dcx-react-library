/* eslint-disable import/no-webpack-loader-syntax */
import { Link } from '../../../src/link/Link';
import style from '!raw-loader!../../themes/dark.theme.css';
import { LiveProvider, LiveEditor } from 'react-live';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';

/**
 * This a theme showcases how to customize the component so it can be used on dark backgrounds.
 */
export default {
  title: 'DCXLibrary/Typography/Link/Design system/Dark',
  component: Link,
  decorators: [
    getStory => {
      require('../../../dist/design-system/index.css');
      require('../../themes/dark.theme.css');
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
      <LiveEditor className="liveEditor" aria-link="editor" />
    </LiveProvider>
  ),
};
const timestamp = new Date().getTime();
const link = `#?time=${timestamp}`;

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
  render: function () {
    return <Link value="Link" to={link} props={{ target: '_self' }} />;
  },
};

export const Visited = {
  name: 'Visited',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#282c34' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  render: function () {
    return <Link value="Link" to={link} props={{ target: '_self' }} />;
  },
};
