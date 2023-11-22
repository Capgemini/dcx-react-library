import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { DescriptionList } from '../DescriptionList';
import { Term } from '../components/Term';
import { Detail } from '../components/Detail';

describe('Description List', () => {
  it('should render with the dcx-description-list className when no className is provided', () => {
    const { container } = render(
      <DescriptionList>
        <Term>React</Term>
        <Detail>A JavaScript library.</Detail>
        <Term>Component</Term>
        <Detail>A reusable building block.</Detail>
      </DescriptionList>
    );
    expect(
      container.querySelector('.dcx-description-list')
    ).toBeInTheDocument();
    expect(
      container.querySelector('.dcx-description-term')
    ).toBeInTheDocument();
    expect(
      container.querySelector('.dcx-description-detail')
    ).toBeInTheDocument();
  });

  it('should be able to render the dcx-description-list and the user specific className', () => {
    const { container } = render(
      <DescriptionList className="myStyle">
        <Term>React</Term>
        <Detail>A JavaScript library.</Detail>
        <Term>Component</Term>
        <Detail>A reusable building block.</Detail>
      </DescriptionList>
    );
    expect(container.querySelector('.myStyle')).toBeInTheDocument();
    expect(
      container.querySelector('.dcx-description-list')
    ).toBeInTheDocument();
    expect(
      container.querySelector('.dcx-description-term')
    ).toBeInTheDocument();
    expect(
      container.querySelector('.dcx-description-detail')
    ).toBeInTheDocument();
  });

  it('should be able to pass some extra properties', () => {
    const { container } = render(
      <DescriptionList descListProps={{ style: { color: 'red' } }}>
        <Term>React</Term>
        <Detail>A JavaScript library.</Detail>
        <Term>Component</Term>
        <Detail>A reusable building block.</Detail>
      </DescriptionList>
    );
    const labelElement = container.getElementsByClassName(
      'dcx-description-list'
    );
    const style = window.getComputedStyle(labelElement[0]);
    expect(style.color).toBe('red');
  });

  it('should display the text of the Term and Detail on rendering DescriptionList component', () => {
    render(
      <DescriptionList>
        <Term>React</Term>
        <Detail>A JavaScript library.</Detail>
        <Term>Component</Term>
        <Detail>A reusable building block.</Detail>
      </DescriptionList>
    );
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('A reusable building block.')).toBeInTheDocument();
  });

  it('should be able to render the same class for all the Terms if termClassName is specified', () => {
    const { container } = render(
      <DescriptionList termClassName="termClass">
        <Term>React</Term>
        <Detail>A JavaScript library.</Detail>
        <Term>Component</Term>
        <Detail>A reusable building block.</Detail>
      </DescriptionList>
    );
    const childComponents = container.querySelectorAll('.termClass');
    expect(childComponents.length).toBe(2);
  });

  it('should be able to render the same class for all the Details if termClassName is specified', () => {
    const { container } = render(
      <DescriptionList detailClassName="detailClass">
        <Term>React</Term>
        <Detail>A JavaScript library.</Detail>
        <Term>Component</Term>
        <Detail>A reusable building block.</Detail>
      </DescriptionList>
    );
    const childComponents = container.querySelectorAll('.detailClass');
    expect(childComponents.length).toBe(2);
  });

  it('should handle empty terms and details gracefully', () => {
    const { container } = render(
      <DescriptionList>{/* No terms and details */}</DescriptionList>
    );

    const termElements = container.querySelectorAll('Term');
    const detailElements = container.querySelectorAll('Detail');

    expect(termElements.length).toBe(0);
    expect(detailElements.length).toBe(0);
  });

  it('should render nested DescriptionList', () => {
    render(
      <DescriptionList>
        <Term>React</Term>
        <Detail>A JavaScript library.</Detail>
        <DescriptionList>
          <Term>Redux</Term>
          <Detail>A state management library.</Detail>
        </DescriptionList>
      </DescriptionList>
    );

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('A JavaScript library.')).toBeInTheDocument();
    expect(screen.getByText('Redux')).toBeInTheDocument();
    expect(screen.getByText('A state management library.')).toBeInTheDocument();
  });

  it('should throw an error if Term is used outside DescriptionList', () => {
    expect(() => render(<Term>abc 3</Term>)).toThrow(
      'Term and Detail components must be used within DescriptionList component'
    );
  });

  it('should throw an error if Detail is used outside DescriptionList', () => {
    expect(() => render(<Detail>abc 3</Detail>)).toThrow(
      'Term and Detail components must be used within DescriptionList component'
    );
  });
});
