import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Term } from '../Term';
import { DescriptionList } from '../../DescriptionList';

describe('Definition Term', () => {
  it('should display the text of the Term', () => {
    render(
      <DescriptionList>
        <Term>Term text</Term>
      </DescriptionList>
    );

    expect(screen.getByText('Term text')).toBeInTheDocument();
  });

  it('should render with the dcx-description-term className when no className is Provided', () => {
    const { container } = render(
      <DescriptionList>
        <Term>Term text</Term>
      </DescriptionList>
    );

    expect(
      container.querySelector('.dcx-description-term')
    ).toBeInTheDocument();
  });

  it('should be able to render the dcx-description-term and the user specific className', () => {
    const { container } = render(
      <DescriptionList>
        <Term className="myStyle">Term text</Term>
      </DescriptionList>
    );

    expect(
      container.querySelector('.dcx-description-term')
    ).toBeInTheDocument();
    expect(container.querySelector('.myStyle')).toBeInTheDocument();
  });

  it('should be able to pass some extra properties', () => {
    const { container } = render(
      <DescriptionList>
        <Term termProps={{ style: { color: 'red' } }}>Term text</Term>
      </DescriptionList>
    );
    const labelElement = container.getElementsByClassName(
      'dcx-description-term'
    );
    const style = window.getComputedStyle(labelElement[0]);
    expect(style.color).toBe('red');
  });

  it('should trigger a callback function when clicked', () => {
    const onClickMock = jest.fn();
    render(
      <DescriptionList>
        <Term termProps={{ onClick: onClickMock() }}>Term text</Term>
      </DescriptionList>
    );
    const listItemElement = screen.getByText('Term text');
    fireEvent.click(listItemElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should allow to use the Term component only in the DescriptionList component', () => {
    expect(() => render(<Term>abc 3</Term>)).toThrow(
      'Term and Detail components must be used within DescriptionList component'
    );
  });
});
