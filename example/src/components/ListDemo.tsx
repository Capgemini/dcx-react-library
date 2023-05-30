import React from 'react';
import { List, ListItem, TYPE_LIST } from '@capgeminiuk/dcx-react-library';

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
      <List type={TYPE_LIST.UNORDERED}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
      </List>
      <h2>when Type is ordered</h2>
      <List type={TYPE_LIST.ORDERED}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
      </List>
      <h2>when extra props are passed</h2>
      <List type={TYPE_LIST.ORDERED}>
        <ListItem value={10}>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
      </List>
      <h2>when Type is ordered with start value 2</h2>
      <List type={TYPE_LIST.ORDERED} start={2}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
      </List>
      <h2>when Type is ordered with reversed property</h2>
      <List type={TYPE_LIST.ORDERED} reversed>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
      </List>
      <h2>when Type is ordered with Marker type a</h2>
      <List type={TYPE_LIST.ORDERED} markerType="a">
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
      </List>
      <h2>when Type is ordered with Marker type A</h2>
      <List type={TYPE_LIST.ORDERED} markerType="A">
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
      </List>
      <h2>when Type is ordered with Marker type i</h2>
      <List type={TYPE_LIST.ORDERED} markerType="i">
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
      </List>
      <h2>when Type is ordered with Marker type I</h2>
      <List type={TYPE_LIST.ORDERED} markerType="I">
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
      </List>
      <h2>when Type is ordered with Marker type 1</h2>
      <List type={TYPE_LIST.ORDERED} markerType="1">
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
      </List>
    </>
  );
};
