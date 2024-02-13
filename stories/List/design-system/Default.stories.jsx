import { List, TYPE_LIST } from '../../../src/list/List';
import { ListItem } from '../../../src/list/ListItem';

/**
 * Here we display the component in its natural form, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Typography/List/Design system/Default',
  component: List,
  decorators: [
    (getStory) => {
      '../../themes/design-system/index.css';
      return getStory();
    },
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
  tags: ['autodocs'],
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
      <List type={TYPE_LIST.UNORDERED} className="dcx-list-unordered">
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
      <List type={TYPE_LIST.ORDERED} className="dcx-list-ordered">
        <ListItem>Coffee</ListItem>
        <ListItem>Tea</ListItem>
      </List>
    );
  },
};
