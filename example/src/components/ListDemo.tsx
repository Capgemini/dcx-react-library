import React from 'react';
import { List, ListItem } from '@capgeminiuk/dcx-react-library';

export const ListDemo = () => {
  return (
    <>
      <h1>Demo of List</h1>
      <h2>when Type is ordered</h2>
      <List type="ordered">
        <ListItem value={10}>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
      </List>
      <h2>when Type is unordered</h2>
      <List type="unordered">
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
      </List>
      <h2>when Type is not given</h2>
      <List>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
      </List>
      <ol>
        <li value={'10'}>123a</li>
        <li>123b</li>
        <li>123c</li>
      </ol>
    </>
  );
};
