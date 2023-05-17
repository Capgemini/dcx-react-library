import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ListItem } from '../List';

describe('ListItem', () => {
  it('should render', () => {
    render(<ListItem value="listItem_text" />);
    expect(screen.getByText('listItem_text')).toBeInTheDocument();
  });

  //   for nested ListItem component
  xit('should display the text of the listItem', () => {});
  xit('should render ul if the list type is unordered list', () => {});

  //
  xit('should render with the dcx-list-item className when no className is Provided', () => {});
  xit('should be able to render the dcx-list-item and the user specific className', () => {});
  xit('should be able to pass value prop', () => {});
  xit('should be able to pass some extra properties', () => {});

  // for List component7
  xit('should render with the dcx-list className when no className is Provided', () => {});
  xit('should be able to render the dcx-list and the user specific className', () => {});
  xit('should be able to pass itemClassName prop', () => {});
  xit('should be able to pass type prop with either ordered or unordered value', () => {});
  xit('should be able to pass some extra properties', () => {});
});
