import React from 'react';
import { render, screen } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { FormGroup } from '../FormGroup';

describe('FormGroup', () => {
  it('should render a form group of radio buttons', () => {
    const handleChange = jest.fn();

    const { container } = render(
      <FormGroup
        type="radio"
        groupClasses=""
        id=""
        name=""
        legend={{
          text: 'Have you changed your name?',
          heading: {
            priority: 1,
          },
        }}
        items={[
          {
            value: 'yes',
            label: 'Yes',
            onChange: handleChange,
          },
          {
            value: 'no',
            label: 'No',
            onChange: handleChange,
          },
        ]}
      />
    );

    expect(screen.getByRole('group')).toBeInTheDocument();
    expect(container.querySelector('input[type=radio]')).toBeInTheDocument();
  });

  it('should render a form group of checkboxes', () => {
    const handleChange = jest.fn();

    const { container } = render(
      <FormGroup
        type="checkbox"
        groupClasses=""
        id=""
        name=""
        legend={{
          text: 'Select your preferred options?',
          heading: {
            priority: 1,
          },
        }}
        items={[
          {
            value: 'one',
            label: 'One',
            onChange: handleChange,
          },
          {
            value: 'two',
            label: 'Two',
            onChange: handleChange,
          },
        ]}
      />
    );

    expect(screen.getByRole('group')).toBeInTheDocument();
    expect(container.querySelector('input[type=checkbox]')).toBeInTheDocument();
  });

  it('should not render any inputs if no type is set', () => {
    const handleChange = jest.fn();
    const type = '';

    const { container } = render(
      <FormGroup
        type={type}
        groupClasses=""
        id=""
        name=""
        legend={{
          text: 'Select your preferred options?',
          heading: {
            priority: 1,
          },
        }}
        items={[
          {
            value: 'one',
            label: 'One',
            onChange: handleChange,
          },
          {
            value: 'two',
            label: 'Two',
            onChange: handleChange,
          },
        ]}
      />
    );

    expect(
      container.querySelector('input[type=checkbox]')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('input[type=radio]')
    ).not.toBeInTheDocument();
  });

  it('should not render any inputs if incorrect type is set', () => {
    const handleChange = jest.fn();
    const type = 'something';

    const { container } = render(
      <FormGroup
        type={type}
        groupClasses=""
        id=""
        name=""
        legend={{
          text: 'Select your preferred options?',
          heading: {
            priority: 1,
          },
        }}
        items={[
          {
            value: 'one',
            label: 'One',
            onChange: handleChange,
          },
          {
            value: 'two',
            label: 'Two',
            onChange: handleChange,
          },
        ]}
      />
    );

    expect(
      container.querySelector('input[type=checkbox]')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('input[type=radio]')
    ).not.toBeInTheDocument();
  });

  it('should render a form group of radio buttons with a legend', () => {
    const handleChange = jest.fn();

    render(
      <FormGroup
        type="radio"
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
            onChange: handleChange,
          },
          {
            value: 'no',
            label: 'No',
            onChange: handleChange,
          },
        ]}
      />
    );

    const legend: string = '<legend>Have you changed your name?</legend>';

    expect(screen.getByRole('group')).toContainHTML(legend);
  });

  it('should render a form group of radio buttons with title', () => {
    const handleChange = jest.fn();

    render(
      <FormGroup
        type="radio"
        groupClasses=""
        id=""
        name=""
        legend={{
          text: 'Have you changed your name?',
          heading: {
            priority: 1,
          },
        }}
        items={[
          {
            value: 'yes',
            label: 'Yes',
            onChange: handleChange,
          },
          {
            value: 'no',
            label: 'No',
            onChange: handleChange,
          },
        ]}
      />
    );

    expect(screen.getByText('Have you changed your name?')).toBeInTheDocument();
  });

  it('should render a form group of radio buttons with hint text', () => {
    const handleChange = jest.fn();

    render(
      <FormGroup
        type="radio"
        groupClasses=""
        id=""
        name=""
        legend={{
          text: 'Have you changed your name?',
          heading: {
            priority: 1,
          },
        }}
        items={[
          {
            value: 'yes',
            label: 'Yes',
            onChange: handleChange,
          },
          {
            value: 'no',
            label: 'No',
            onChange: handleChange,
          },
        ]}
        hint={{
          text: 'this is a hint for text',
        }}
      />
    );

    expect(screen.getByText('this is a hint for text')).toBeInTheDocument();
  });

  it('should render a form group of radio buttons with an error message', () => {
    const handleChange = jest.fn();

    render(
      <FormGroup
        type="radio"
        groupClasses=""
        id=""
        name=""
        legend={{
          text: 'Have you changed your name?',
          heading: {
            priority: 1,
          },
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
            onChange: handleChange,
          },
          {
            value: 'no',
            label: 'No',
            onChange: handleChange,
          },
        ]}
      />
    );
    expect(screen.getByText('Error:')).toBeInTheDocument();
    expect(screen.getByText('oops!! we have an error')).toBeInTheDocument();
  });

  it('should render a form group of radio button input items', () => {
    const handleChange = jest.fn();

    const { container } = render(
      <FormGroup
        type="radio"
        groupClasses=""
        id=""
        name=""
        legend={{
          text: 'Have you changed your name?',
          heading: {
            priority: 1,
          },
        }}
        items={[
          {
            value: 'yes',
            label: 'Yes',
            onChange: handleChange,
          },
          {
            value: 'no',
            label: 'No',
            onChange: handleChange,
          },
        ]}
      />
    );
    expect(container.querySelectorAll('input').length).toBe(2);
  });

  it('should call on change of an item if an input has changed', () => {
    const handleChange = jest.fn();
    const handleItemChange = jest.fn();

    render(
      <FormGroup
        type="radio"
        groupClasses=""
        id=""
        name="group1"
        legend={{
          text: 'Have you changed your name?',
          heading: {
            priority: 1,
          },
        }}
        items={[
          {
            inputProps: {
              'data-testid': 'custom-item',
            },
            value: 'yes',
            label: 'Yes',
            onChange: handleItemChange,
          },
          {
            value: 'no',
            label: 'No',
            onChange: handleItemChange,
          },
        ]}
        onChange={handleChange}
      />
    );

    fireEvent.click(screen.getByTestId('custom-item'));
    expect(handleItemChange).toHaveBeenCalled();
  });

  it('should call on change of an item if an input has changed', () => {
    const handleChange = jest.fn();
    const handleItemChange = jest.fn();

    render(
      <FormGroup
        type="checkbox"
        groupClasses=""
        id=""
        name="group1"
        legend={{
          text: 'Select all the options',
          heading: {
            priority: 1,
          },
        }}
        items={[
          {
            inputProps: {
              'data-testid': 'custom-item',
            },
            value: 'one',
            label: 'One',
            selected: true,
            onChange: handleItemChange,
          },
          {
            value: 'two',
            label: 'Two',
            selected: false,
            onChange: handleItemChange,
          },
        ]}
        onChange={handleChange}
      />
    );

    fireEvent.click(screen.getByTestId('custom-item'));
    expect(handleItemChange).toHaveBeenCalled();
  });

  it('should not call on change of a radio button item if the on change is not defined', () => {
    const handleChange = jest.fn();
    const handleItemChange = jest.fn();

    render(
      <FormGroup
        type="radio"
        groupClasses=""
        id=""
        name="group1"
        legend={{
          text: 'Have you changed your name?',
          heading: {
            priority: 1,
          },
        }}
        items={[
          {
            inputProps: {
              'data-testid': 'custom-item',
            },
            value: 'yes',
            label: 'Yes',
          },
          {
            value: 'no',
            label: 'No',
          },
        ]}
        onChange={handleChange}
      />
    );

    fireEvent.click(screen.getByTestId('custom-item'));
    expect(handleItemChange).not.toHaveBeenCalled();
  });

  it('should not call on change of a checkbox item if the on change is not defined', () => {
    const handleChange = jest.fn();
    const handleItemChange = jest.fn();

    render(
      <FormGroup
        type="checkbox"
        groupClasses=""
        id=""
        name="group1"
        legend={{
          text: 'Have you changed your name?',
          heading: {
            priority: 1,
          },
        }}
        items={[
          {
            inputProps: {
              'data-testid': 'custom-item',
            },
            value: 'yes',
            label: 'Yes',
          },
          {
            value: 'no',
            label: 'No',
          },
        ]}
        onChange={handleChange}
      />
    );

    fireEvent.click(screen.getByTestId('custom-item'));
    expect(handleItemChange).not.toHaveBeenCalled();
  });

  it('should not call on change if undefined for radio button', () => {
    const handleChange = jest.fn();
    const handleItemChange = jest.fn();

    render(
      <FormGroup
        type="radio"
        groupClasses=""
        id=""
        name=""
        legend={{
          text: 'Have you changed your name?',
          heading: {
            priority: 1,
          },
        }}
        items={[
          {
            inputProps: {
              'data-testid': 'custom-item',
            },
            value: 'yes',
            label: 'Yes',
            onChange: handleItemChange,
          },
          {
            value: 'no',
            label: 'No',
            onChange: handleItemChange,
          },
        ]}
      />
    );

    fireEvent.click(screen.getByTestId('custom-item'));
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should not call on change if undefined for checkbox', () => {
    const handleChange = jest.fn();
    const handleItemChange = jest.fn();

    render(
      <FormGroup
        type="checkbox"
        groupClasses=""
        id=""
        name=""
        legend={{
          text: 'Have you changed your name?',
          heading: {
            priority: 1,
          },
        }}
        items={[
          {
            inputProps: {
              'data-testid': 'custom-item',
            },
            value: 'yes',
            label: 'Yes',
            onChange: handleItemChange,
          },
          {
            value: 'no',
            label: 'No',
            onChange: handleItemChange,
          },
        ]}
      />
    );

    fireEvent.click(screen.getByTestId('custom-item'));
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should render the first item of radio buttons as checked', () => {
    const handleChange = jest.fn();

    render(
      <FormGroup
        type="radio"
        groupClasses=""
        id=""
        name=""
        legend={{
          text: 'Have you changed your name?',
          heading: {
            priority: 1,
          },
        }}
        items={[
          {
            inputProps: {
              'data-testid': 'custom-item',
            },
            value: 'yes',
            label: 'Yes',
            selected: true,
            onChange: handleChange,
          },
          {
            value: 'no',
            label: 'No',
            onChange: handleChange,
          },
        ]}
        onChange={handleChange}
      />
    );

    expect(screen.getByTestId('custom-item')).toBeChecked();
  });

  it('should render the first item of checkboxes as checked', () => {
    const handleChange = jest.fn();

    render(
      <FormGroup
        type="checkbox"
        groupClasses=""
        id=""
        name=""
        legend={{
          text: 'Have you changed your name?',
          heading: {
            priority: 1,
          },
        }}
        items={[
          {
            inputProps: {
              'data-testid': 'custom-item',
            },
            value: 'yes',
            label: 'Yes',
            selected: true,
            onChange: handleChange,
          },
          {
            value: 'no',
            label: 'No',
            onChange: handleChange,
          },
        ]}
        onChange={handleChange}
      />
    );

    expect(screen.getByTestId('custom-item')).toBeChecked();
  });

  it('should render the first item of radio buttons as disabled', () => {
    const handleChange = jest.fn();

    render(
      <FormGroup
        type="radio"
        groupClasses=""
        id=""
        name=""
        legend={{
          text: 'Have you changed your name?',
          heading: {
            priority: 1,
          },
        }}
        items={[
          {
            inputProps: {
              'data-testid': 'custom-item',
            },
            value: 'yes',
            label: 'Yes',
            selected: true,
            onChange: handleChange,
          },
          {
            inputProps: {
              'data-testid': 'custom-item-2',
            },
            value: 'no',
            label: 'No',
            disabled: true,
            onChange: handleChange,
          },
        ]}
        onChange={handleChange}
      />
    );

    expect(screen.getByTestId('custom-item-2')).toBeDisabled();
  });

  it('should render the first item of checkboxes as disabled', () => {
    const handleChange = jest.fn();

    render(
      <FormGroup
        type="checkbox"
        groupClasses=""
        id=""
        name=""
        legend={{
          text: 'Have you changed your name?',
          heading: {
            priority: 1,
          },
        }}
        items={[
          {
            inputProps: {
              'data-testid': 'custom-item',
            },
            value: 'yes',
            label: 'Yes',
            selected: true,
            onChange: handleChange,
          },
          {
            inputProps: {
              'data-testid': 'custom-item-2',
            },
            value: 'no',
            label: 'No',
            disabled: true,
            onChange: handleChange,
          },
        ]}
        onChange={handleChange}
      />
    );

    expect(screen.getByTestId('custom-item-2')).toBeDisabled();
  });

  it('should render a form group with shared values', () => {
    const handleChange = jest.fn();

    render(
      <FormGroup
        type="radio"
        groupClasses=""
        id=""
        name="shared-name"
        inputProps={{
          className: 'shared-input-class',
        }}
        itemProps={{
          className: 'shared-item-class',
        }}
        labelProps={{
          className: 'shared-label-class',
        }}
        legend={{
          text: 'Have you changed your name?',
          heading: {
            priority: 1,
          },
        }}
        items={[
          {
            inputProps: {
              'data-testid': 'custom-item',
            },
            labelProps: {
              id: 'yesId',
            },
            value: 'yes',
            label: 'Yes',
            onChange: handleChange,
          },
          {
            inputProps: {
              'data-testid': 'custom-item-2',
            },
            labelProps: {
              id: 'NoId',
            },
            value: 'no',
            label: 'No',
            onChange: handleChange,
          },
        ]}
        onChange={handleChange}
      />
    );

    expect(screen.getByTestId('custom-item').getAttribute('name')).toBe(
      'shared-name'
    );
    expect(screen.getByTestId('custom-item-2').getAttribute('name')).toBe(
      'shared-name'
    );

    expect(screen.getByTestId('custom-item').getAttribute('class')).toBe(
      'shared-input-class'
    );
    expect(screen.getByTestId('custom-item-2').getAttribute('class')).toBe(
      'shared-input-class'
    );

    expect(screen.getByLabelText('Yes').getAttribute('class')).toBe(
      'shared-input-class'
    );
    expect(screen.getByLabelText('No').getAttribute('class')).toBe(
      'shared-input-class'
    );
  });

  it('should render a divider', () => {
    const handleChange = jest.fn();

    const { container } = render(
      <FormGroup
        type="radio"
        groupClasses=""
        id=""
        name=""
        legend={{
          text: 'Have you changed your name?',
          heading: {
            priority: 1,
          },
        }}
        items={[
          {
            value: 'yes',
            label: 'Yes',
            onChange: handleChange,
          },
          {
            id: 'my-divider-id',
            className: 'class-for-divider',
            text: "I'm a divider",
          },
          {
            value: 'no',
            label: 'No',
            onChange: handleChange,
          },
        ]}
      />
    );

    expect(container.querySelector('#my-divider-id')).toBeTruthy();
  });

  it('should not render a form group with less than 2 items', () => {
    const handleChange = jest.fn();

    const { container } = render(
      <FormGroup
        type="radio"
        groupClasses=""
        id="my-group"
        name=""
        legend={{
          text: 'Have you changed your name?',
          heading: {
            priority: 1,
          },
        }}
        items={[
          {
            value: 'yes',
            label: 'Yes',
            onChange: handleChange,
          },
        ]}
      />
    );

    expect(container.querySelector('#my-group')).not.toBeInTheDocument();
    expect(
      screen.getByText('Can not render a Form Group with less than 2 items')
    ).toBeInTheDocument();
  });
});
