import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
            id: 'first',
          },
          {
            value: 'no',
            label: 'No',
            id: 'second',
          },
        ]}
        onChange={handleChange}
      />
    );

    expect(screen.getByRole('group')).toBeInTheDocument();
    expect(container.querySelector('input[type=radio]')).toBeInTheDocument();
  });

  it('should render a form group of radio buttons from string items', () => {
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
        items={['Yes', 'No']}
        onChange={handleChange}
      />
    );

    expect(screen.getByRole('group')).toBeInTheDocument();
    expect(container.querySelector('input[id=Yes]')).toBeInTheDocument();
    expect(container.querySelector('input[id=No]')).toBeInTheDocument();
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
            id: 'first',
          },
          {
            value: 'two',
            label: 'Two',
            id: 'second',
          },
        ]}
        onChange={handleChange}
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
        //@ts-ignore
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
            id: 'first',
          },
          {
            value: 'two',
            label: 'Two',
            id: 'second',
          },
        ]}
        onChange={handleChange}
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
    const type = 'something';

    const { container } = render(
      <FormGroup
        //@ts-ignore
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
            id: 'first',
          },
          {
            value: 'two',
            label: 'Two',
            id: 'second',
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
            id: 'first',
          },
          {
            value: 'no',
            label: 'No',
            id: 'second',
          },
        ]}
        onChange={handleChange}
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
            id: 'first',
          },
          {
            value: 'no',
            label: 'No',
            id: 'second',
          },
        ]}
        onChange={handleChange}
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
            id: 'first',
          },
          {
            value: 'no',
            label: 'No',
            id: 'second',
          },
        ]}
        hint={{
          text: 'this is a hint for text',
          position: 'above',
        }}
        onChange={handleChange}
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
            id: 'first',
          },
          {
            value: 'no',
            label: 'No',
            id: 'second',
          },
        ]}
        onChange={handleChange}
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
            id: 'first',
          },
          {
            value: 'no',
            label: 'No',
            id: 'second',
          },
        ]}
        onChange={handleChange}
      />
    );
    expect(container.querySelectorAll('input').length).toBe(2);
  });

  it('should call on change of an item if an input has changed', () => {
    const handleChange = jest.fn();

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
              id: 'custom-item',
            },
            value: 'yes',
            label: 'Yes',
            id: 'first',
          },
          {
            value: 'no',
            label: 'No',
            id: 'second',
          },
        ]}
        onChange={handleChange}
      />
    );

    fireEvent.click(screen.getAllByRole('radio')[0]);
    expect(handleChange).toHaveBeenCalled();
  });

  it('should call on change of a string item if an input has changed', () => {
    const handleChange = jest.fn();

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
        items={['yes', 'no']}
        onChange={handleChange}
      />
    );

    fireEvent.click(screen.getAllByRole('radio')[0]);
    expect(handleChange).toHaveBeenCalled();
  });

  it('should call on change of an item if an input has changed', () => {
    const handleChange = jest.fn();

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
              id: 'custom-item',
            },
            value: 'one',
            label: 'One',
            id: 'first',
            selected: true,
          },
          {
            value: 'two',
            label: 'Two',
            id: 'second',
            selected: false,
          },
        ]}
        onChange={handleChange}
      />
    );

    fireEvent.click(screen.getAllByRole('checkbox')[0]);
    expect(handleChange).toHaveBeenCalled();
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
              id: 'custom-item',
            },
            value: 'yes',
            label: 'Yes',
            selected: true,
            id: 'first',
          },
          {
            value: 'no',
            label: 'No',
            id: 'second',
          },
        ]}
        onChange={handleChange}
      />
    );

    expect(screen.getAllByRole('radio')[0]).toBeChecked();
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
              id: 'custom-item',
            },
            value: 'yes',
            label: 'Yes',
            selected: true,
            id: 'first',
          },
          {
            value: 'no',
            label: 'No',
            id: 'second',
          },
        ]}
        onChange={handleChange}
      />
    );

    expect(screen.getAllByRole('checkbox')[0]).toBeChecked();
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
              id: 'custom-item',
            },
            value: 'yes',
            label: 'Yes',
            selected: true,
            id: 'first',
          },
          {
            inputProps: {
              id: 'custom-item-2',
            },
            value: 'no',
            label: 'No',
            disabled: true,
            id: 'second',
          },
        ]}
        onChange={handleChange}
      />
    );

    expect(screen.getAllByRole('radio')[1]).toBeDisabled();
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
              id: 'custom-item',
            },
            value: 'yes',
            label: 'Yes',
            selected: true,
            id: 'first',
          },
          {
            inputProps: {
              id: 'custom-item-2',
            },
            value: 'no',
            label: 'No',
            disabled: true,
            id: 'second',
          },
        ]}
        onChange={handleChange}
      />
    );

    expect(screen.getAllByRole('checkbox')[1]).toBeDisabled();
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
            labelProps: {
              id: 'yesId',
            },
            value: 'yes',
            label: 'Yes',
            id: 'first',
          },
          {
            labelProps: {
              id: 'NoId',
            },
            value: 'no',
            label: 'No',
            id: 'second',
          },
        ]}
        onChange={handleChange}
      />
    );

    expect(screen.getAllByRole('radio')[0].getAttribute('name')).toBe(
      'shared-name'
    );
    expect(screen.getAllByRole('radio')[1].getAttribute('name')).toBe(
      'shared-name'
    );

    expect(screen.getAllByRole('radio')[0].getAttribute('class')).toBe(
      'shared-input-class'
    );
    expect(screen.getAllByRole('radio')[1].getAttribute('class')).toBe(
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
            id: 'first',
          },
          {
            id: 'my-divider-id',
            className: 'class-for-divider',
            text: "I'm a divider",
          },
          {
            value: 'no',
            label: 'No',
            id: 'second',
          },
        ]}
        onChange={handleChange}
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
            id: 'first',
          },
        ]}
        onChange={handleChange}
      />
    );

    expect(container.querySelector('#my-group')).not.toBeInTheDocument();
    expect(
      screen.getByText('Can not render a Form Group with less than 2 items')
    ).toBeInTheDocument();
  });

  it('should call on change of an item if an input has changed', () => {
    const handleChange = jest.fn();

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
            value: 'yes',
            label: 'Yes',
            id: 'first',
          },
          {
            value: 'no',
            label: 'No',
            id: 'second',
          },
        ]}
        onChange={handleChange}
      />
    );
    fireEvent.click(screen.getAllByRole('radio')[0]);
    expect(screen.getAllByRole('radio')[0]).toBeChecked();
    expect(screen.getAllByRole('radio')[1]).not.toBeChecked();
  });

  it('should call on change of an item if a conditional input has changed', async () => {
    const handleChange = jest.fn();

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
            value: 'yes',
            label: 'Yes',
            id: 'first',
            selected: true,
            conditional: {
              value: '',
              name: '',
              label: '',
              type: 'text',
              className: '',
              groupClassName: '',
              id: 'conditional-1',
              inputClassName: '',
              inputId: '',
              labelClassName: '',
            },
          },
          {
            value: 'no',
            label: 'No',
            id: 'second',
            conditional: {
              value: '',
              name: '',
              label: '',
              type: 'text',
              className: '',
              groupClassName: '',
              id: 'conditional-2',
              inputClassName: '',
              inputId: '',
              labelClassName: '',
            },
          },
        ]}
        onChange={handleChange}
      />
    );
    const input: Element = screen.getByRole('textbox');
    userEvent.type(input, 'mo');

    expect(handleChange).toHaveBeenCalledTimes(2);
  });
});
