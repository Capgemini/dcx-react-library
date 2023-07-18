import { List, TYPE_LIST } from '../../../src/list/List';
import style from '!raw-loader!../../themes/accessible.theme.css';
import { LiveProvider, LiveEditor } from 'react-live';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';
import { ListItem } from '../../../src/list/ListItem';

/**
 * This a theme aimed at easing the vizualization of the different elements of the component in order to improve the experience for people that have visual impairments.
 */
export default {
  title: 'DCXLibrary/Typography/List/Design system/Accessible',
  component: List,
  decorators: [
    (getStory) => {
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
      code={StorybookUtils.getThemeCode('dcx-list', style)}
      disabled={true}
      language="css"
    >
      <LiveEditor className="liveEditor" aria-label="editor" />
    </LiveProvider>
  ),
};

export const Default = {
  name: 'Default',
  render: function () {
    return (
      <List>
        <ListItem>Coffee</ListItem>
        <ListItem>Tea</ListItem>
      </List>
    );
  },
};

export const Unordered = {
  name: 'Unordered',
  render: function () {
    return (
      <List type={TYPE_LIST.UNORDERED}>
        <ListItem>Coffee</ListItem>
        <ListItem>Tea</ListItem>
      </List>
    );
  },
};

export const Ordered = {
  name: 'Ordered',
  render: function () {
    return (
      <List type={TYPE_LIST.ORDERED}>
        <ListItem>Coffee</ListItem>
        <ListItem>Tea</ListItem>
      </List>
    );
  },
};
