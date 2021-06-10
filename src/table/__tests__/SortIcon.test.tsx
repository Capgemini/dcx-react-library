import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SortIcon } from '../SortIcon';

describe('SortIcon', () => {
  it('should render ascending sorting icon', () => {
    render(
      <SortIcon
        value="test"
        sortAscIcon={<div data-testid="sortAscIcon" />}
        sortDescIcon={<div data-testid="sortDescIcon" />}
        keySorted={{ key: 'test', direction: 'ascending' }}
      />
    );
    expect(screen.getByTestId('sortAscIcon')).toBeInTheDocument();
  });
  it('should render descending sorting icon', () => {
    render(
      <SortIcon
        value="test"
        sortAscIcon={<div data-testid="sortAscIcon" />}
        sortDescIcon={<div data-testid="sortDescIcon" />}
        keySorted={{ key: 'test', direction: 'descending' }}
      />
    );
    expect(screen.getByTestId('sortDescIcon')).toBeInTheDocument();
  });

  it('should not render icon', () => {
    const { container } = render(
      <SortIcon
        value="no-render"
        sortAscIcon={<div data-testid="sortAscIcon" />}
        sortDescIcon={<div data-testid="sortDescIcon" />}
      />
    );
    expect(container).toContainHTML('<div />');
  });
});
