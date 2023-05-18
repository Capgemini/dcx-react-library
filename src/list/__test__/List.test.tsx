import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { List, ListItem } from '../List';

describe('ListItem', () => {
  it('should display the text of the listItem', () => {
    render(<ListItem value="listItem_text" />);
    expect(screen.getByText('listItem_text')).toBeInTheDocument();
  });

  it('should render with the dcx-list-item className when no className is Provided', () => {
    const { container } = render(<ListItem />);
    expect(container.querySelector('.dcx-list-item')).toBeInTheDocument();
  });

  it('should be able to render the dcx-list-item and the user specific className', () => {
    const { container } = render(<ListItem className="myStyle" />);
    expect(container.querySelector('.dcx-list-item')).toBeInTheDocument();
    expect(container.querySelector('.myStyle')).toBeInTheDocument();
  });

  it('should be able to pass some extra properties', () => {
    const { container } = render(
      <ListItem value="text" listItemProps={{ style: { color: 'red' } }} />
    );
    const labelElement = container.getElementsByClassName('dcx-list-item');
    const style = window.getComputedStyle(labelElement[0]);
    expect(style.color).toBe('red');
  });

  it('should trigger a callback function when clicked', () => {
    const onClickMock = jest.fn();
    render(
      <ListItem
        value="listItem_text"
        listItemProps={{ onClick: onClickMock() }}
      />
    );
    const listItemElement = screen.getByText('listItem_text');
    fireEvent.click(listItemElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should render with the dcx-list className when no className is Provided', () => {
    const { container } = render(<List type="unordered" />);
    expect(container.querySelector('.dcx-list')).toBeInTheDocument();
  });

  it('should be able to render the dcx-list and the user specific className', () => {
    const { container } = render(<List type="unordered" className="myStyle" />);
    expect(container.querySelector('.dcx-list')).toBeInTheDocument();
    expect(container.querySelector('.myStyle')).toBeInTheDocument();
  });

  it('should render ul if the list type is unordered list', () => {
    render(<List type="unordered" />);
    const unorderedList = screen.getByRole('list');
    expect(unorderedList.tagName).toBe('UL');
  });

  it('should render ol if the list type is ordered list', () => {
    render(<List type="ordered" />);
    const orderedList = screen.getByRole('list');
    expect(orderedList.tagName).toBe('OL');
  });

  it('should be able to pass itemClassName prop', () => {
    const { container } = render(
      <List type="unordered" itemClassName="myStyle" />
    );
    expect(container.querySelector('.myStyle')).toBeInTheDocument();
  });
});
