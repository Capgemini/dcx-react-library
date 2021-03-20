import React from 'react';
import { render, screen } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { FormGroup } from '../FormGroup';

describe('FormGroup', () => {
  it('should render a form group', () => {
    render(
      <FormGroup
        groupClasses=""
        id=""
        name=""
        legend={{
          text: 'Have you changed your name?',
          isHeading: true,
        }}
        items={[
          {
            value: 'yes',
            label: 'Yes',
          },
          {
            value: 'no',
            label: 'No',
          },
        ]}
      />
    );

    expect(screen.getByRole('form-group')).toBeInTheDocument();
  });

  it('should render a form group with a legend', () => {
    render(
      <FormGroup
        groupClasses=""
        id=""
        name=""
        legend={{
          text: 'Have you changed your name?',
        }}
        items={[
          {
            value: 'yes',
            label: 'Yes',
          },
          {
            value: 'no',
            label: 'No',
          },
        ]}
      />
    );

    const legend: string = '<legend>Have you changed your name?</legend>';

    expect(screen.getByRole('form-group')).toContainHTML(legend);
  });

  it('should render a form group title', () => {
    render(
      <FormGroup
        groupClasses=""
        id=""
        name=""
        legend={{
          text: 'Have you changed your name?',
          isHeading: true,
        }}
        items={[
          {
            value: 'yes',
            label: 'Yes',
          },
          {
            value: 'no',
            label: 'No',
          },
        ]}
      />
    );

    expect(screen.getByText('Have you changed your name?')).toBeInTheDocument();
  });

  it('should render a form group with hint text', () => {
    render(
      <FormGroup
        groupClasses=""
        id=""
        name=""
        legend={{
          text: 'Have you changed your name?',
          isHeading: true,
        }}
        items={[
          {
            value: 'yes',
            label: 'Yes',
          },
          {
            value: 'no',
            label: 'No',
          },
        ]}
        hint={{
          text: 'this is a hint for text',
        }}
      />
    );

    expect(screen.getByText('this is a hint for text')).toBeInTheDocument();
  });

  it('should render a form group with an error message', () => {
    render(
      <FormGroup
        groupClasses=""
        id=""
        name=""
        legend={{
          text: 'Have you changed your name?',
          isHeading: true,
        }}
        error={{
          text: 'oops!! we have an error',
          visuallyHiddenText: {
            text: 'Error:',
          },
        }}
        items={[
          {
            value: 'yes',
            label: 'Yes',
          },
          {
            value: 'no',
            label: 'No',
          },
        ]}
      />
    );
    expect(screen.getByText('Error:')).toBeInTheDocument();
    expect(screen.getByText('oops!! we have an error')).toBeInTheDocument();
  });

  it('should render a form group of radio inputs', () => {
    render(
      <FormGroup
        groupClasses=""
        id=""
        name=""
        legend={{
          text: 'Have you changed your name?',
          isHeading: true,
        }}
        items={[
          {
            value: 'yes',
            label: 'Yes',
          },
          {
            value: 'no',
            label: 'No',
          },
        ]}
      />
    );
    expect(screen.getAllByRole('form-radio').length).toBe(2);
  });

  it('should call on change of a radio input', () => {
    const handlePositiveChange = jest.fn();
    const handleNegativeChange = jest.fn();

    render(
      <FormGroup
        groupClasses=""
        id=""
        name=""
        legend={{
          text: 'Have you changed your name?',
          isHeading: true,
        }}
        items={[
          {
            inputProps: {
              'data-testid': 'custom-item',
            },
            value: 'yes',
            label: 'Yes',
            onChange: handlePositiveChange,
          },
          {
            value: 'no',
            label: 'No',
            onChange: handleNegativeChange,
          },
        ]}
      />
    );

    fireEvent.click(screen.getByTestId('custom-item'));
    expect(handlePositiveChange).toHaveBeenCalled();
    expect(handleNegativeChange).not.toHaveBeenCalled();
  });

  it('should not call on change if undefined', () => {});

  it('should set radio as checked if specified', () => {});

  it('should set radio as disabled if specified', () => {});
});
