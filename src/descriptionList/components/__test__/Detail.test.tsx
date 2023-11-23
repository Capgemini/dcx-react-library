import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { DescriptionList } from '../../DescriptionList';
import { Detail } from '../Detail';

describe('Definition Detail', () => {
  it('should display the text of the Detail', () => {
    render(
      <DescriptionList>
        <Detail>Detail text</Detail>
      </DescriptionList>
    );

    expect(screen.getByText('Detail text')).toBeInTheDocument();
  });

  it('should render with the dcx-description-detail className when no className is Provided', () => {
    const { container } = render(
      <DescriptionList>
        <Detail>Detail text</Detail>
      </DescriptionList>
    );

    expect(
      container.querySelector('.dcx-description-detail')
    ).toBeInTheDocument();
  });

  it('should be able to render the dcx-description-detail and the user specific className', () => {
    const { container } = render(
      <DescriptionList>
        <Detail className="myStyle">Detail text</Detail>
      </DescriptionList>
    );

    expect(
      container.querySelector('.dcx-description-detail')
    ).toBeInTheDocument();
    expect(container.querySelector('.myStyle')).toBeInTheDocument();
  });

  it('should be able to pass some extra properties', () => {
    const { container } = render(
      <DescriptionList>
        <Detail detailProps={{ style: { color: 'red' } }}>Detail text</Detail>
      </DescriptionList>
    );
    const labelElement = container.getElementsByClassName(
      'dcx-description-detail'
    );
    const style = window.getComputedStyle(labelElement[0]);
    expect(style.color).toBe('red');
  });

  it('should trigger a callback function when clicked', () => {
    const onClickMock = jest.fn();
    render(
      <DescriptionList>
        <Detail detailProps={{ onClick: onClickMock() }}>Detail text</Detail>
      </DescriptionList>
    );
    const listItemElement = screen.getByText('Detail text');
    fireEvent.click(listItemElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should allow to use the Detail component only in the DescriptionList component', () => {
    expect(() => render(<Detail>abc 3</Detail>)).toThrow(
      'Term and Detail components must be used within DescriptionList component'
    );
  });
});
