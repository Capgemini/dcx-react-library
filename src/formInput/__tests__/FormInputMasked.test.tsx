import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormInputMasked } from '../';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

const DummyComponentMasked = () => {
  const [value, setValue] = React.useState('15');
  const handleChange = (evt: any) => setValue(evt.value);
  return (
    <FormInputMasked
      options={{
        mask: '$num',
        blocks: {
          num: {
            // nested masks are available!
            mask: Number,
            thousandsSeparator: ' ',
          },
        },
      }}
      value={value}
      onChange={handleChange}
      type="text"
      name="currency"
    />
  );
};

describe('FormInput', () => {
  it('should display the formInput content', () => {
    render(<DummyComponentMasked />);

    const input: any = screen.getByRole('textbox');
    expect(input.name).toBe('currency');
    expect(input.type).toBe('text');
    expect(input.value).toBe('$15');
    expect(input).toBeInTheDocument();
  });

  it('should display $1 533', async () => {
    const user = userEvent.setup();
    render(<DummyComponentMasked />);

    const input: any = screen.getByRole('textbox');
    await act(() => user.type(input, '33'));
    expect(input.value).toBe('$1 533');
  });

  it('should display $156', async () => {
    const user = userEvent.setup();
    render(<DummyComponentMasked />);

    const input: any = screen.getByRole('textbox');

    await act(() => user.type(input, '{selectall}{backspace}56'));
    expect(input.value).toBe('$156');
  });
});
