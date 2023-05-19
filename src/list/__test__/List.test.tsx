import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { List, ListItem } from '../List';

describe('ListItem', () => {
  it('should display the text of the listItem', () => {
    render(<ListItem value="10">List item example</ListItem>);
    expect(screen.getByText('List item example')).toBeInTheDocument();
  });

  it('should render with the dcx-list-item className when no className is Provided', () => {
    const { container } = render(
      <ListItem value="10">List item example</ListItem>
    );
    expect(container.querySelector('.dcx-list-item')).toBeInTheDocument();
  });

  it('should be able to render the dcx-list-item and the user specific className', () => {
    const { container } = render(
      <ListItem value="10" className="myStyle">
        List item example
      </ListItem>
    );
    expect(container.querySelector('.dcx-list-item')).toBeInTheDocument();
    expect(container.querySelector('.myStyle')).toBeInTheDocument();
  });

  it('should be able to pass some extra properties', () => {
    const { container } = render(
      <ListItem value="10" listItemProps={{ style: { color: 'red' } }}>
        List item example
      </ListItem>
    );
    const labelElement = container.getElementsByClassName('dcx-list-item');
    const style = window.getComputedStyle(labelElement[0]);
    expect(style.color).toBe('red');
  });

  it('should trigger a callback function when clicked', () => {
    const onClickMock = jest.fn();
    render(
      <ListItem value="10" listItemProps={{ onClick: onClickMock() }}>
        List item example
      </ListItem>
    );
    const listItemElement = screen.getByText('List item example');
    fireEvent.click(listItemElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
// List
describe('List', () => {
  it('should render with the dcx-list className when no className is Provided', () => {
    const { container } = render(
      <List>
        <ListItem value="10">item 1</ListItem>
        <ListItem value="10">item 2</ListItem>
        <ListItem value="10">item 3</ListItem>
      </List>
    );
    expect(container.querySelector('.dcx-list')).toBeInTheDocument();
    expect(container.querySelector('.dcx-list-item')).toBeInTheDocument();
  });

  it('should be able to render the dcx-list and the user specific className', () => {
    const { container } = render(
      <List className="myStyle">
        <ListItem value="10">item 1</ListItem>
        <ListItem value="10">item 2</ListItem>
      </List>
    );
    expect(container.querySelector('.dcx-list')).toBeInTheDocument();
    expect(container.querySelector('.myStyle')).toBeInTheDocument();
  });

  it('should render ul if the type is not given', () => {
    render(
      <List>
        <ListItem value="10">item 1</ListItem>
        <ListItem value="10">item 2</ListItem>
      </List>
    );
    const unorderedList = screen.getByRole('list');
    expect(unorderedList.tagName).toBe('UL');
  });

  it('should render ul if the list type is unordered list', () => {
    render(
      <List type="unordered">
        <ListItem value="10">item 1</ListItem>
        <ListItem value="10">item 2</ListItem>
      </List>
    );
    const unorderedList = screen.getByRole('list');
    expect(unorderedList.tagName).toBe('UL');
  });

  it('should render ol if the list type is ordered list', () => {
    render(
      <List type="ordered">
        <ListItem value="10">item 1</ListItem>
        <ListItem value="10">item 2</ListItem>
      </List>
    );
    const orderedList = screen.getByRole('list');
    expect(orderedList.tagName).toBe('OL');
  });

  it('should be able to pass itemClassName prop', () => {
    const { container } = render(
      <List itemClassName="myStyle">
        <ListItem value="10">abc 1</ListItem>
        <ListItem value="10">abc 2</ListItem>
        <ListItem value="10">abc 3</ListItem>
      </List>
    );
    expect(container.querySelector('.myStyle')).toBeInTheDocument();
  });
  it('should display the text of the listItem on rendering List component', () => {
    const { container } = render(
      <List itemClassName="myStyle">
        <ListItem value="10">abc 1</ListItem>
        <ListItem value="10">abc 2</ListItem>
        <ListItem value="10">abc 3</ListItem>
      </List>
    );
    expect(container.querySelector('.myStyle')).toBeInTheDocument();
    expect(screen.getByText('abc 2')).toBeInTheDocument();
    expect(screen.getByText('abc 3')).toBeInTheDocument();
  });
});
