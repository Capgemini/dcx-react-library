import React, { useRef } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CharacterCount } from '../CharacterCount';
import userEvent from '@testing-library/user-event';
import * as hooks from '../../common/utils/clientOnly';

const DummyResetCharacterCountComponent = () => {
  const textRef = useRef<any>(null);
  return (
    <form>
      <CharacterCount
        label="Label for text area"
        hint={{
          text: 'Type more than 15 characters to see the message change',
        }}
        maxLength={15}
        rows={5}
        cols={50}
        ref={textRef}
        messageErrorClassName="error-class-name"
      />
      <button onClick={() => textRef.current.reset()}>Cancel</button>
    </form>
  );
};

describe('CharacterCount with character limit', () => {
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
      screen.getByText('You have 15 characters remaining')
    ).toBeInTheDocument();
  });

  it('should not display message if there is a threshold prop passed in before the threshold has been reached', async () => {
    const user = userEvent.setup();

    const { container } = render(
      <CharacterCount
        label="Label for text area"
        maxLength={30}
        cols={30}
        rows={5}
        messageClassName="message"
        threshold={10}
      />
    );

    const textarea = screen.getByRole('textbox');

    await user.type(textarea, 'ab');
    const message: any = container.querySelector('.message');

    expect(message).not.toBeInTheDocument();
  });

  it('should display message if there is a threshold prop passed in and the threshold has been reached', async () => {
    const user = userEvent.setup();

    const { container } = render(
      <CharacterCount
        label="Label for text area"
        maxLength={30}
        cols={30}
        rows={5}
        messageClassName="message"
        threshold={10}
      />
    );

    const textarea = screen.getByRole('textbox');

    await user.type(textarea, 'abc');
    const message: any = container.querySelector('.message');

    expect(message).toBeInTheDocument();
    expect(
      screen.getByText('You have 27 characters remaining')
    ).toBeInTheDocument();
  });

  it('should display over the limit message when user exceeds the maximum length', async () => {
    const user = userEvent.setup();

    const { container } = render(
      <CharacterCount
        label="Label for text area"
        maxLength={15}
        cols={30}
        rows={5}
        messageClassName="message"
        messageErrorClassName="error"
      />
    );

    const textarea = screen.getByRole('textbox');

    await user.type(textarea, 'this is more than 15 characters');
    const message: any = container.querySelector('.error');

    expect(message).toBeInTheDocument();
    expect(
      screen.getByText('You have 16 characters too many')
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

  it('should assign error class for error message and remove class if user backspaces to correct input', async () => {
    const user = userEvent.setup();
    const { container } = render(<DummyResetCharacterCountComponent />);
    const textarea = screen.getByRole('textbox');

    await user.type(textarea, 'more than 15 chars');
    expect(container.querySelector('.error-class-name')).toBeInTheDocument();

    await user.type(textarea, '{backspace}{backspace}{backspace}');
    expect(
      container.querySelector('.error-class-name')
    ).not.toBeInTheDocument();
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
      screen.getByText('You have 6 characters remaining')
    ).toBeInTheDocument();
  });

  it('should not allow the user type more than maxLength when constrained prop is true', async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();

    render(
      <CharacterCount
        label="Label for text area"
        hint={{ text: 'Optional hint' }}
        maxLength={15}
        onChange={handleChange}
        messageClassName="message"
        constrained={true}
      />
    );

    const textarea = screen.getByRole('textbox');

    await user.type(textarea, 'some text that is more than 15 characters');

    expect(handleChange).toBeCalled();
    expect(screen.getByRole('textbox')).toHaveValue('some text that ');
  });

  it('should render with correct message when limit type is word count', () => {
    render(
      <CharacterCount
        label="Label for text area"
        maxLength={15}
        cols={30}
        rows={5}
        messageClassName="message"
        limitType="words"
      />
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText('You have 15 words remaining')).toBeInTheDocument();
  });

  it('should not display message if there is a threshold prop passed in before the threshold has been reached and the limit type is word count', async () => {
    const user = userEvent.setup();

    const { container } = render(
      <CharacterCount
        label="Label for text area"
        maxLength={30}
        cols={30}
        rows={5}
        messageClassName="message"
        threshold={10}
        limitType="words"
      />
    );

    const textarea = screen.getByRole('textbox');

    await user.type(textarea, 'one two');
    const message: any = container.querySelector('.message');

    expect(message).not.toBeInTheDocument();
  });

  it('should display message if there is a threshold prop passed in and the threshold has been reached and the limit type is word count', async () => {
    const user = userEvent.setup();

    const { container } = render(
      <CharacterCount
        label="Label for text area"
        maxLength={30}
        cols={30}
        rows={5}
        messageClassName="message"
        threshold={10}
        limitType="words"
      />
    );

    const textarea = screen.getByRole('textbox');

    await user.type(textarea, 'one two three');
    const message: any = container.querySelector('.message');

    expect(message).toBeInTheDocument();
    expect(screen.getByText('You have 27 words remaining')).toBeInTheDocument();
  });

  it('should allow to specify a custom max character message', async () => {
    render(
      <CharacterCount
        label="Label for text area"
        maxLength={15}
        cols={30}
        rows={5}
        messageClassName="message"
        customMaxCharMsgFunc={(remainingCount, overLimitBy) =>
          `this is a custom message with ${remainingCount} and ${overLimitBy}`
        }
      />
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(
      screen.getByText('this is a custom message with 15 and 0')
    ).toBeInTheDocument();
  });

  it('should allow to specify a custom max character message when there is a value passed in and it is over the limit', () => {
    render(
      <CharacterCount
        label="Label for text area"
        maxLength={15}
        cols={30}
        rows={5}
        messageClassName="message"
        customMaxCharMsgFunc={(remainingCount, overLimitBy) =>
          `this is a custom message with ${remainingCount} and ${overLimitBy}`
        }
        value="This text is more than 15 characters"
      />
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(
      screen.getByText('this is a custom message with -21 and 21')
    ).toBeInTheDocument();
  });

  it('should reset textfield and message when textarea is reset', async () => {
    const user = userEvent.setup();

    render(<DummyResetCharacterCountComponent />);

    const button = screen.getByRole('button');
    const textarea: any = screen.getByRole('textbox');

    await user.type(textarea, 'ab');

    await user.click(button);

    expect(textarea.value).toBe('');
    expect(
      screen.getByText('You have 15 characters remaining')
    ).toBeInTheDocument();
  });

  it('should show correct message when there is an existing text value', () => {
    render(
      <CharacterCount
        label="Label for text area"
        maxLength={15}
        cols={30}
        rows={5}
        messageClassName="message"
        value="hello"
      />
    );

    const textarea: any = screen.getByRole('textbox');

    expect(textarea.value).toBe('hello');
    expect(
      screen.getByText('You have 10 characters remaining')
    ).toBeInTheDocument();
  });

  it('should show static message when progressive enhancement is true and limit type is characters', async () => {
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

  it('should show static message when progressive enhancement is true and limit type is words', async () => {
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
        limitType="words"
      />
    );

    const textarea = screen.getByRole('textbox');

    await user.type(textarea, 'some text');

    expect(handleChange).toBeCalled();
    expect(
      screen.getByText('You can enter up to 15 words.')
    ).toBeInTheDocument();
  });
});
