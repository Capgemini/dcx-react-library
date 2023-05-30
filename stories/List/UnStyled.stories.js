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
      <List
        type={TYPE_LIST.ORDERED}
        className="myStyle"
        itemClassName="myStyle"
        markerType={'A'}
        start={2}
        reversed
      >
        <ListItem value={2} className="myStyle">
          List Item 1
        </ListItem>
        <ListItem>List Item 2</ListItem>
      </List>
    );
  },
  args: {
    // type: TYPE_LIST.ORDERED,
  },
};
