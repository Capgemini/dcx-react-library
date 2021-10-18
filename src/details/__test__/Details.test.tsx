import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Details } from '../Details';

describe('Details', () => {
  it('should render a details component', () => {
    render(<Details summary="my summary" details="my details" />);

    expect(screen.getByText('my summary')).toBeInTheDocument();
    expect(screen.getByText('my details')).toBeInTheDocument();
  });

  it('should render a closed details component', () => {
    render(<Details summary="my summary" details="my details" />);

    expect(screen.getByText('my details').getAttribute('class')).toBe('');
  });

  it('should render a detail component with a details class name', () => {
    const { container } = render(
      <Details
        summary="my summary"
        details="my details"
        detailsClassName="details-class-name"
      />
    );
    expect(container.querySelector('.details-class-name')).not.toBeNull();
  });

  it('should render a details component with a summary class name', () => {
    const { container } = render(
      <Details
        summary="my summary"
        details="my details"
        summaryClassName="summary-class-name"
      />
    );
    expect(container.querySelector('.summary-class-name')).not.toBeNull();
  });

  it('should render a details component with a details text class name', () => {
    const { container } = render(
      <Details
        summary="my summary"
        details="my details"
        detailsTextClassName="details-text-class-name"
      />
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
        details="my details"
        detailsTextClassName="details-text-class-name"
      />
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
        details="my details"
        detailsTextClassName="details-text-class-name"
        openClassName="my-open-class-name"
      />
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
        details="my details"
        detailsTextClassName="details-text-class-name"
      />
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
});
