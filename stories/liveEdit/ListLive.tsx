import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { List, TYPE_LIST, ListItem } from '../../src/list';

const ListDemo = `
function ListDemo() {
    return (
        <List
            type={TYPE_LIST.ORDERED}
            className="govuk-list govuk-list--number"
            itemClassName="myStyle"
            markerType={'A'}
            start={2}
            reversed
            listProps={{ style: { color: 'red' } }}
            >
            <ListItem
                value={2}
                className="myStyle"
                listItemProps={{ style: { color: 'red' } }}
            >
                Coffee
            </ListItem>
            <ListItem>Tea</ListItem>
        </List>
    )
}
`.trim();

const ListLive = () => {
  const scope = { List, ListItem, TYPE_LIST };
  return (
    <LiveProvider code={ListDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default ListLive;
