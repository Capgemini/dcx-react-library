import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CharacterCount } from '../CharacterCount';
import userEvent from '@testing-library/user-event';
import * as hooks from '../../common/utils/clientOnly';

describe('CharacterCount', () => {
  it('should render', () => {
    render(
      <CharacterCount
        label="Label for text area"
        maxLength={15}
        cols={30}
        rows={5}
        messageClassName="message"
      />
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(
      screen.getByText('You can enter up to 15 characters.')
    ).toBeInTheDocument();
  });

  it('should not display error message when displayError is not true', () => {
    const { container } = render(
      <CharacterCount
        label="Label for text area"
        maxLength={15}
        cols={30}
        rows={5}
        messageClassName="message"
        errorMessage="error-text"
        errorMessageClassName="error-class-name"
      />
    );

    const error: any = container.querySelector('.error-class-name');
    expect(error).not.toBeInTheDocument();
  });

  it('should display error message when displayError is true', () => {
    render(
      <CharacterCount
        label="Label for text area"
        maxLength={15}
        cols={30}
        rows={5}
        messageClassName="message"
        displayError={true}
        errorMessage="error-text"
      />
    );

    expect(screen.getByText('error-text')).toBeInTheDocument();
  });

  it('should call handleChange and change character count message', async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();

    render(
      <CharacterCount
        label="Label for text area"
        hint={{ text: 'Optional hint' }}
        maxLength={15}
        onChange={handleChange}
        messageClassName="message"
      />
    );

    const textarea = screen.getByRole('textbox');

    await user.type(textarea, 'some text');

    expect(handleChange).toBeCalled();
    expect(
      screen.getByText('You can enter up to 6 characters.')
    ).toBeInTheDocument();
  });

  it('should show static message when progressive enhancement is true', async () => {
    jest.spyOn(hooks, 'useHydrated').mockImplementation(() => false);

    const handleChange = jest.fn();
    const user = userEvent.setup();

    render(
      <CharacterCount
        label="Label for text area"
        hint={{ text: 'Optional hint' }}
        maxLength={15}
        onChange={handleChange}
        messageClassName="message"
      />
    );

    const textarea = screen.getByRole('textbox');

    await user.type(textarea, 'some text');

    expect(handleChange).toBeCalled();
    expect(
      screen.getByText('You can enter up to 15 characters.')
    ).toBeInTheDocument();
  });
});

// it('should not render conditional input field when progressive enhancement is ture but no conditional data', () => {
//   const handleChange = jest.fn();
//   //@ts-ignore
//   jest.spyOn(hooks, 'useHydrated').mockImplementation(() => false);
//   const { container } = render(
//     <FormCheckbox
//       id="myId"
//       name="group1"
//       value="choice 1"
//       label="my label"
//       onChange={handleChange}
//       selected={false}
//     />
//   );

//   expect(container.querySelector('#conditional-id')).not.toBeInTheDocument();
// });
