import React from 'react';
import { List, ListItem } from '@capgeminiuk/dcx-react-library';

export const ListDemo = () => {
  return (
    <>
      <h1>Demo of List</h1>

      <h2>when Type is not given</h2>
      <List>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
      </List>
      <h2>when Type is unordered</h2>
      <List type="unordered" markerType={'A'}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
      </List>
      <h2>when Type is ordered with start value 2</h2>
      <List type="ordered" start={2}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
      </List>
      <h2>when Type is ordered with reversed property</h2>
      <List type="ordered" reversed>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
      </List>
      <h2>when Type is ordered with Marker type A</h2>
      <List type="ordered" markerType="A">
        <ListItem value={10}>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
      </List>
    </>
  );
};
