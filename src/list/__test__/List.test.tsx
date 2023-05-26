import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ListItem } from '../ListItem';
import { List, TYPE_LIST } from '../List';

describe('List', () => {
  it('should render with the dcx-list className when no className is Provided', () => {
    const { container } = render(
      <List>
        <ListItem>item 1</ListItem>
        <ListItem>item 2</ListItem>
        <ListItem>item 3</ListItem>
      </List>
    );
    expect(container.querySelector('.dcx-list')).toBeInTheDocument();
    expect(container.querySelector('.dcx-list-item')).toBeInTheDocument();
  });

  it('should be able to render the dcx-list and the user specific className', () => {
    const { container } = render(
      <List className="myStyle">
        <ListItem>item 1</ListItem>
        <ListItem>item 2</ListItem>
      </List>
    );
    expect(container.querySelector('.dcx-list')).toBeInTheDocument();
    expect(container.querySelector('.myStyle')).toBeInTheDocument();
  });

  it('should render ul if the type is not given', () => {
    render(
      <List>
        <ListItem>item 1</ListItem>
        <ListItem>item 2</ListItem>
      </List>
    );
    const unorderedList = screen.getByRole('list');
    expect(unorderedList.tagName).toBe('UL');
  });

  it('should render ul if the list type is unordered list', () => {
    render(
      <List type={TYPE_LIST.UNORDERED}>
        <ListItem>item 1</ListItem>
        <ListItem>item 2</ListItem>
      </List>
    );
    const unorderedList = screen.getByRole('list');
    expect(unorderedList.tagName).toBe('UL');
  });

  it('should render ol if the list type is ordered list', () => {
    render(
      <List type={TYPE_LIST.ORDERERED}>
        <ListItem>item 1</ListItem>
        <ListItem>item 2</ListItem>
      </List>
    );
    const orderedList = screen.getByRole('list');
    expect(orderedList.tagName).toBe('OL');
  });

  it('should be able to pass some extra properties', () => {
    const { container } = render(
      <List listProps={{ style: { color: 'red' } }}>
        <ListItem>List item example</ListItem>
      </List>
    );
    const labelElement = container.getElementsByClassName('dcx-list');
    const style = window.getComputedStyle(labelElement[0]);
    expect(style.color).toBe('red');
  });

  it('should display the text of the listItem on rendering List component', () => {
    render(
      <List>
        <ListItem>abc 1</ListItem>
        <ListItem>abc 2</ListItem>
        <ListItem>abc 3</ListItem>
      </List>
    );
    expect(screen.getByText('abc 2')).toBeInTheDocument();
    expect(screen.getByText('abc 3')).toBeInTheDocument();
  });

  it('should be able to render with itemClassName', () => {
    const { container } = render(
      <List itemClassName="myStyle">
        <ListItem>abc 1</ListItem>
        <ListItem>abc 2</ListItem>
        <ListItem>abc 3</ListItem>
      </List>
    );
    const childComponents = container.querySelectorAll('.myStyle');
    expect(childComponents.length).toBe(3);
  });
});
