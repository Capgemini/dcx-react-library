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
      <List type={TYPE_LIST.ORDERED}>
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

  it('should render with list starting with 100', () => {
    const { getByRole } = render(
      <List type={TYPE_LIST.ORDERED} start={100}>
        <ListItem>List Item a</ListItem>
        <ListItem>List Item b</ListItem>
        <ListItem>List Item c</ListItem>
      </List>
    );

    const list = getByRole('list');
    expect(list.getAttribute('start')).toBe((100).toString());
  });

  it('should render with list starting with 100', () => {
    const { getAllByRole } = render(
      <List type={TYPE_LIST.ORDERED}>
        <ListItem value={100}>List Item a</ListItem>
        <ListItem>List Item b</ListItem>
        <ListItem>List Item c</ListItem>
      </List>
    );
    const listItems = getAllByRole('listitem');

    expect(listItems[0]).toHaveAttribute('value', '100');
  });

  it('should render with list having reverse attribute', () => {
    const { getByRole } = render(
      <List type={TYPE_LIST.ORDERED} reversed>
        <ListItem>List Item a</ListItem>
        <ListItem>List Item b</ListItem>
        <ListItem>List Item c</ListItem>
      </List>
    );

    const list = getByRole('list');
    expect(list.getAttribute('reversed')).toBeDefined();
  });

  it('should allow to pass a specific marker type, a-i-1-A-I to an ordered list and display it properly', () => {
    const arr: string[] = ['a', 'i', '1', 'A', 'I'];
    let num = 0;

    arr.forEach((element) => {
      render(
        <List type={TYPE_LIST.ORDERED} markerType={element as any}>
          <ListItem>List Item a</ListItem>
          <ListItem>List Item b</ListItem>
          <ListItem>List Item c</ListItem>
        </List>
      );

      const lists = screen.getAllByRole('list');
      expect(lists[num++].getAttribute('type')).toBe(element);
    });
  });
});
