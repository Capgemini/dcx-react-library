import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ErrorMessage } from '../ErrorMessage';

describe('ErrorMessage', () => {
  it('will render an error message', () => {
    render(<ErrorMessage text="We have a problem" />);

    expect(screen.getByText('We have a problem')).toBeInTheDocument();
  });

  it('will render an error message with a className and the default dcx-error-message className', () => {
    render(<ErrorMessage text="We have a problem" className="my-class-name" />);

    expect(screen.getByText('We have a problem').getAttribute('class')).toBe(
      'dcx-error-message my-class-name'
    );
  });

  it('will render an error message with only the default dcx-error-message className if no className is passed', () => {
    render(<ErrorMessage text="We have a problem" />);

    expect(screen.getByText('We have a problem').getAttribute('class')).toBe(
      'dcx-error-message'
    );
  });

  it('will render visually hidden text for screen readers', () => {
    render(
      <ErrorMessage
        text="We have a problem"
        visuallyHiddenText={{
          text: 'This text is visually hidden',
        }}
      />
    );

    expect(
      screen.getByText('This text is visually hidden')
    ).toBeInTheDocument();
  });

  it('will not render any element if the text property is blank', () => {
    const { container } = render(<ErrorMessage text="" />);

    expect(container.querySelector('span')).not.toBeInTheDocument();
  });
});
