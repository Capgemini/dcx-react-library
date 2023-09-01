import { List } from '../../../src/list/List';
import { ListItem } from '../../../src/list/ListItem';

export default {
  title: 'DCXLibrary/Typography/List/Design system',
  component: List,
  decorators: [
    (getStory) => {
      require('../../../dist/design-system/index.css');
      return getStory();
    },
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
};

export const Playground = {
  name: 'Playground',
  render: function () {
    return (
      <List>
        <ListItem>Coffee</ListItem>
        <ListItem>Tea</ListItem>
      </List>
    );
  },
};
