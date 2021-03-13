import React from 'react';
import { render, queryByAttribute, screen } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { FormRadio } from '../FormRadio';

describe('FormRadio', () => {
  it('should display the formRadio content', () => {
    const handleChange = jest.fn();

    render(
      <FormRadio
        id="myId"
        name="group1"
        value="choice 1"
        label="my label"
        onChange={handleChange}
      />
    );
    const getById = queryByAttribute.bind(null, 'id');

    expect(screen.getByRole('form-radio')).toBeInTheDocument();
    expect(screen.getByLabelText('my label').getAttribute('value')).toBe(
      'choice 1'
    );
    expect(screen.getByLabelText('my label')).toBeInTheDocument();
    expect(getById(screen.getByRole('form-radio'), 'myId')).toBeInTheDocument();
  });

  it('should call on change', () => {
    const handleChange = jest.fn();

    render(
      <FormRadio
        id="myId"
        name="group1"
        value="choice 1"
        label="my label"
        onChange={handleChange}
      />
    );

    fireEvent['click'](screen.getByLabelText('my label'));

    expect(handleChange).toHaveBeenCalled();
  });

  it('should not call on change if undefined', () => {
    const handleChange = jest.fn();

    render(
      <FormRadio id="myId" name="group1" value="choice 1" label="my label" />
    );

    fireEvent['click'](screen.getByLabelText('my label'));

    expect(handleChange).not.toHaveBeenCalled();
  });
});
