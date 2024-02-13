import { List, ListItem, TYPE_LIST } from '../../src/list';

export default {
  title: 'DCXLibrary/Typography/List/Without style',
  component: List,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  render: function () {
    return (
      <List type={TYPE_LIST.ORDERED} markerType={'A'} start={2} reversed>
        <ListItem value={2}>Coffee</ListItem>
        <ListItem>Tea</ListItem>
      </List>
    );
  },
};
