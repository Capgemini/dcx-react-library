import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { RadioGroup } from '../RadioGroup';

describe('RadioGroup', () => {
  it('should render a form group with radio buttons', () => {
    const handleChange = jest.fn();

    const { container } = render(
      <RadioGroup
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
});
