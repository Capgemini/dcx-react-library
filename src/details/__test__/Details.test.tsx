import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Details } from '../Details';
import { Table } from '../../table/Table';

describe('Details', () => {
  it('should render a details component', () => {
    const { container } = render(
      <Details summary="my summary">my details</Details>
    );

    expect(screen.getByText('my summary')).toBeInTheDocument();
    expect(screen.getByText('my details')).toBeInTheDocument();
    expect(
      container.getElementsByTagName('details').item(0)?.getAttribute('open')
    ).toBeNull();
  });

  it('should render an opened details component', () => {
    const { container } = render(
      <Details summary="my summary" open>
        my details
      </Details>
    );

    expect(screen.getByText('my details').getAttribute('class')).toBe('open');
    expect(
      container.getElementsByTagName('details').item(0)?.getAttribute('open')
    ).toBeDefined();
    expect(
      container.getElementsByTagName('details').item(0)?.getAttribute('open')
    ).not.toBeNull();
  });

  it('should render a details component with a table', () => {
    const values = [
      {
        id: 1,
        position: 1,
        actions: <button className="btn btn-danger">Action</button>,
      },
    ];

    render(
      <Details summary="my summary">
        <Table dataSource={values} />
      </Details>
    );
    const row: any = screen.getAllByRole('row');
    expect(row[1].innerHTML).toContain('id');
    expect(row[2].innerHTML).toContain('position');
    expect(row[3].innerHTML).toContain('actions');
  });

  it('should render a closed details component', () => {
    render(<Details summary="my summary">my details</Details>);

    expect(screen.getByText('my details').getAttribute('class')).toBe('');
  });

  it('should render a detail component with a details class name', () => {
    const { container } = render(
      <Details summary="my summary" detailsClassName="details-class-name">
        my details
      </Details>
    );
    expect(container.querySelector('.details-class-name')).not.toBeNull();
  });

  it('should render a details component with a summary class name', () => {
    const { container } = render(
      <Details summary="my summary" summaryClassName="summary-class-name">
        my details
      </Details>
    );
    expect(container.querySelector('.summary-class-name')).not.toBeNull();
  });

  it('should render a details component with a details text class name', () => {
    const { container } = render(
      <Details
        summary="my summary"
        detailsTextClassName="details-text-class-name"
      >
        my details
      </Details>
    );
    expect(container.querySelector('.details-text-class-name')).not.toBeNull();
    expect(screen.getByText('my details').getAttribute('class')).toBe(
      'details-text-class-name'
    );
  });

  it('should render an open details component when summary is clicked', () => {
    const { container } = render(
      <Details
        summary="my summary"
        detailsTextClassName="details-text-class-name"
      >
        my details
      </Details>
    );
    fireEvent(
      screen.getByText('my summary'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(
      container.querySelector('.details-text-class-name.open')
    ).not.toBeNull();
    expect(screen.getByText('my details').getAttribute('class')).toBe(
      'details-text-class-name open'
    );
  });

  it('should render an open details component with a customised open class name when summary is clicked', () => {
    const { container } = render(
      <Details
        summary="my summary"
        detailsTextClassName="details-text-class-name"
        openClassName="my-open-class-name"
      >
        my details
      </Details>
    );
    fireEvent(
      screen.getByText('my summary'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(
      container.querySelector('.details-text-class-name.my-open-class-name')
    ).not.toBeNull();
    expect(screen.getByText('my details').getAttribute('class')).toBe(
      'details-text-class-name my-open-class-name'
    );
  });

  it('should not render an open details component when details div is clicked', () => {
    const { container } = render(
      <Details
        summary="my summary"
        detailsTextClassName="details-text-class-name"
      >
        my details
      </Details>
    );
    fireEvent(
      screen.getByText('my details'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(container.querySelector('.details-text-class-name.open')).toBeNull();
  });

  it('should have 0 tabIndex value by default', () => {
    const { container } = render(
      <Details summary="my summary" summaryClassName="summary-class-name">
        my details
      </Details>
    );

    const summary: any = container.querySelector('.summary-class-name');

    expect(summary.getAttribute('tabindex')).toBe('0');
  });

  it('should accept tabIndex attribute', () => {
    const { container } = render(
      <Details
        summary="my summary"
        summaryClassName="summary-class-name"
        tabIndex={1}
      >
        my details
      </Details>
    );

    const summary: any = container.querySelector('.summary-class-name');

    expect(summary.getAttribute('tabindex')).toBe('1');
  });

  it('should render a details component with a summary text class name and id', () => {
    const { container } = render(
      <Details
        summary="my summary"
        summaryTextClassName="summary-text-class-name"
        summaryTextId="summary-text-id"
      >
        my details
      </Details>
    );
    expect(container.querySelector('.summary-text-class-name')).not.toBeNull();
    expect(container.querySelector('#summary-text-id')).not.toBeNull();
    expect(screen.getByText('my summary').getAttribute('class')).toBe(
      'summary-text-class-name'
    );
    expect(screen.getByText('my summary').getAttribute('id')).toBe(
      'summary-text-id'
    );
  });
});
