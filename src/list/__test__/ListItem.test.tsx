import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { List, TYPE_LIST } from '../List';
import { ListItem } from '../ListItem';

describe('ListItem', () => {
  it('should display the text of the listItem', () => {
    render(
      <List>
        <ListItem>List item example</ListItem>
      </List>
    );
    expect(screen.getByText('List item example')).toBeInTheDocument();
  });

  it('should render with the dcx-list-item className when no className is Provided', () => {
    const { container } = render(
      <List>
        <ListItem>List item example</ListItem>
      </List>
    );
    expect(container.querySelector('.dcx-list-item')).toBeInTheDocument();
  });

  it('should be able to render the dcx-list-item and the user specific className', () => {
    const { container } = render(
      <List>
        <ListItem className="myStyle">List item example</ListItem>
      </List>
    );
    expect(container.querySelector('.dcx-list-item')).toBeInTheDocument();
    expect(container.querySelector('.myStyle')).toBeInTheDocument();
  });

  it('should be able to pass some extra properties', () => {
    const { container } = render(
      <List>
        <ListItem listItemProps={{ style: { color: 'red' } }}>
          List item example
        </ListItem>
      </List>
    );
    const labelElement = container.getElementsByClassName('dcx-list-item');
    const style = window.getComputedStyle(labelElement[0]);
    expect(style.color).toBe('red');
  });

  it('should trigger a callback function when clicked', () => {
    const onClickMock = jest.fn();
    render(
      <List>
        <ListItem listItemProps={{ onClick: onClickMock() }}>
          List item example
        </ListItem>
      </List>
    );
    const listItemElement = screen.getByText('List item example');
    fireEvent.click(listItemElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should allow to use the ListItem component only in the List component', () => {
    expect(() => render(<ListItem>abc 3</ListItem>)).toThrow(
      'ListItem component must be used within Item component'
    );
  });

  it('should render with list starting with 100', () => {
    const { getByRole } = render(
      <List type={TYPE_LIST.ORDERERED} start={100}>
        <ListItem>List Item a</ListItem>
        <ListItem>List Item b</ListItem>
        <ListItem>List Item c</ListItem>
      </List>
    );

    const list = getByRole('list');
    expect(list.getAttribute('start')).toBe((100).toString());
  });

  it('should render with list having reverse attribute', () => {
    const { getByRole } = render(
      <List type={TYPE_LIST.ORDERERED} reversed>
        <ListItem>List Item a</ListItem>
        <ListItem>List Item b</ListItem>
        <ListItem>List Item c</ListItem>
      </List>
    );

    const list = getByRole('list');
    expect(list.getAttribute('reversed')).toBeDefined();
  });

  it('should render with list having markerType atttribute', () => {
    const { getByRole } = render(
      <List type={TYPE_LIST.ORDERERED} markerType="A">
        <ListItem>List Item a</ListItem>
        <ListItem>List Item b</ListItem>
        <ListItem>List Item c</ListItem>
      </List>
    );

    const list = getByRole('list');
    expect(list.getAttribute('type')).toBe('A');
  });
});
