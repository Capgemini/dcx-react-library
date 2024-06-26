import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ErrorPosition, FormInput } from '../FormInput';
import userEvent from '@testing-library/user-event';

const DummyComponent = ({
  pos,
  displayError = false,
  variant = 'normal',
  suffix,
  prefix,
  errProp = {
    'data-testid': 'error-container',
  },
  hiddenErrorText,
}: any) => {
  const [value, setValue] = React.useState('');
  const [isValid, setValid] = React.useState<boolean | string>('');
  const handleInputChange = (evt: any) => setValue(evt.currentTarget.value);
  const handleValidity = (valid: boolean) => {
    setValid(valid);
  };
  return (
    <>
      <FormInput
        name="password"
        type="text"
        value={value}
        ariaLabel="input-label"
        ariaRequired={true}
        errorPosition={pos}
        onChange={handleInputChange}
        isValid={handleValidity}
        displayError={displayError}
        errorProps={errProp}
        variant={variant}
        suffix={suffix}
        prefix={prefix}
        validation={{
          rule: {
            type: 'password',
            minLength: 8,
            uppercase: 1,
            numbers: 1,
            matchesOneOf: ['@', '_', '-', '.', '!'],
          },
          message: 'is invalid',
        }}
        staticErrorMessage={undefined}
        hiddenErrorText={hiddenErrorText}
      />
      <label data-testid="check-validity">{isValid.toString()}</label>
    </>
  );
};

const DummyComponentTriggerError = () => {
  const handleInputChange = jest.fn();
  const [displayError, setDisplayError] = React.useState(false);

  const handleClick = () => {
    setDisplayError(true);
  };

  return (
    <>
      <FormInput
        name="password"
        type="text"
        value=""
        ariaLabel="input-label"
        ariaRequired={true}
        onChange={handleInputChange}
        displayError={displayError}
        errorPosition={ErrorPosition.BOTTOM}
        errorProps={{
          id: 'error-container',
        }}
        validation={{
          rule: {
            type: 'password',
            minLength: 8,
            uppercase: 1,
            numbers: 1,
            matchesOneOf: ['@', '_', '-', '.', '!'],
          },
          message: 'is invalid',
        }}
        containerClassNameError="error-container"
        hiddenErrorText=""
      />
      <button onClick={handleClick}>submit</button>
    </>
  );
};

const DummyStaticComponent = ({ pos, hint }: any) => (
  <>
    <FormInput
      name="password"
      type="text"
      value="myValue"
      ariaLabel="input-label"
      ariaRequired={true}
      errorPosition={pos}
      staticErrorMessage="static error message"
      containerClassName="container-class"
      containerClassNameError="container-error"
      hint={hint}
      hiddenErrorText=""
    />
  </>
);

describe('FormInput', () => {
  it('should display the formInput content', () => {
    const handleChange = jest.fn();
    render(
      <FormInput
        name="password"
        type="text"
        value="test"
        onChange={handleChange}
        inputProps={{
          placeholder: 'enter your email',
        }}
        hiddenErrorText=""
      />
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should display the formInput properties', () => {
    const handleChange = jest.fn();
    render(
      <FormInput
        name="password"
        type="text"
        value="@_-bddcd6A"
        ariaLabel="input-label"
        ariaRequired={true}
        onChange={handleChange}
        prefix={{
          properties: {
            id: 'prefix',
          },
          content: 'prefix',
        }}
        hiddenErrorText=""
      />
    );
    const input: any = screen.getByRole('textbox');
    expect(input.name).toBe('password');
    expect(input.type).toBe('text');
    expect(input.value).toBe('@_-bddcd6A');
    expect(input).toBeInTheDocument();
  });

  it('should have the required aria attribute', () => {
    render(
      <FormInput
        name="password"
        type="text"
        value="@_-bddcd6A"
        ariaLabel="input-label"
        ariaRequired={true}
        hiddenErrorText=""
      />
    );
    const input: any = screen.getByRole('textbox');
    expect(input.getAttribute('aria-required')).toBeTruthy();
  });

  it('should display the formInput with className', () => {
    const handleChange = jest.fn();
    render(
      <FormInput
        name="password"
        type="text"
        value="@_-bddcd6A"
        ariaLabel="input-label"
        ariaRequired={true}
        inputClassName="myClassName"
        onChange={handleChange}
        prefix={{
          properties: {
            id: 'prefix',
          },
          content: 'prefix',
        }}
        hiddenErrorText=""
      />
    );
    const input: any = screen.getByRole('textbox');
    expect(input.className).toBe('myClassName');
  });

  it('should display the formInput with a container className', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <FormInput
        name="password"
        type="text"
        value="@_-bddcd6A"
        ariaLabel="input-label"
        ariaRequired={true}
        containerClassName="myClassName"
        onChange={handleChange}
        prefix={{
          properties: {
            id: 'prefix',
          },
          content: 'prefix',
        }}
        hiddenErrorText=""
      />
    );
    const inputContainer: Element | null =
      container.querySelector('.myClassName');
    expect(inputContainer).not.toBeNull();
  });

  it('should display the formInput with a label className', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <FormInput
        name="password"
        type="text"
        ariaLabel="input-label"
        ariaRequired={true}
        value="@_-bddcd6A"
        labelClassName="myClassName"
        onChange={handleChange}
        label="password label"
        labelProps={{
          htmlFor: 'password',
        }}
        prefix={{
          properties: {
            id: 'prefix',
          },
          content: 'prefix',
        }}
        inputProps={{
          id: 'password',
        }}
        hiddenErrorText=""
      />
    );

    expect(container.querySelector('.myClassName')).not.toBeNull();
  });

  it('should display the formInput prefix content', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <FormInput
        name="password"
        type="text"
        value="test"
        ariaLabel="input-label"
        ariaRequired={true}
        onChange={handleChange}
        prefix={{
          properties: {
            id: 'prefix',
          },
          content: 'prefix',
        }}
        hiddenErrorText=""
      />
    );
    expect(container.querySelector('#prefix')).toBeInTheDocument();
  });

  it('should display the formInput suffix content', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <FormInput
        name="password"
        type="text"
        value="test"
        ariaLabel="input-label"
        ariaRequired={true}
        onChange={handleChange}
        suffix={{
          properties: {
            id: 'suffix',
            className: 'suffix-classname',
          },
          content: 'suffix',
        }}
        hiddenErrorText=""
      />
    );
    expect(container.querySelector('#suffix')).toBeInTheDocument();
  });

  it('should display the formInput with a label ans placeholder', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <FormInput
        name="password"
        type="text"
        value="test"
        ariaLabel="input-label"
        ariaRequired={true}
        onChange={handleChange}
        inputProps={{
          id: 'input-id',
          placeholder: 'enter your email',
        }}
        label="this is a label"
        labelProps={{
          className: 'label-class-name',
          htmlFor: 'input-id',
        }}
        hiddenErrorText=""
      />
    );
    const placeholder = container.querySelector('.dcx-form-input--placeholder');
    expect(screen.getByLabelText('this is a label')).toBeInTheDocument();
    expect(placeholder).toBeTruthy();
  });

  it('should display the formInput error static message', async () => {
    const { container } = render(
      <FormInput
        containerClassName="container"
        label="label"
        name="name"
        type="text"
        inputClassName="inputClass"
        inputProps={{
          defaultValue: 'default value',
        }}
        hint={{
          position: 'above',
          text: 'hint',
          className: 'hint-class',
        }}
        errorProps={{
          className: '',
        }}
        staticErrorMessage="we have a problem"
        errorPosition={ErrorPosition.AFTER_LABEL}
        containerClassNameError=""
        hiddenErrorText=""
      />
    );

    expect(container.querySelector('[role=alert]')?.innerHTML).toBe(
      'we have a problem'
    );
  });

  it('should display the formInput error static message with a visually hidden', async () => {
    const { container } = render(
      <FormInput
        containerClassName="container"
        label="label"
        name="name"
        type="text"
        inputClassName="inputClass"
        inputProps={{
          defaultValue: 'default value',
        }}
        hint={{
          position: 'above',
          text: 'hint',
          className: 'hint-class',
        }}
        errorProps={{
          className: '',
        }}
        hiddenErrorText="Error:"
        hiddenErrorTextProps={{ className: 'visually-hidden' }}
        staticErrorMessage="we have a problem"
        errorPosition={ErrorPosition.AFTER_LABEL}
        containerClassNameError=""
      />
    );

    expect(container.querySelector('[role=alert]')?.innerHTML).toBe(
      '<span class="visually-hidden">Error: </span>we have a problem'
    );
  });

  it('should display the formInput error static message with a visually hidden with no error props', async () => {
    const { container } = render(
      <FormInput
        containerClassName="container"
        label="label"
        name="name"
        type="text"
        inputClassName="inputClass"
        inputProps={{
          defaultValue: 'default value',
        }}
        hint={{
          position: 'above',
          text: 'hint',
          className: 'hint-class',
        }}
        hiddenErrorText="Error:"
        hiddenErrorTextProps={{ className: 'visually-hidden' }}
        staticErrorMessage="we have a problem"
        errorPosition={ErrorPosition.AFTER_LABEL}
        containerClassNameError=""
      />
    );

    expect(container.querySelector('[role=alert]')?.innerHTML).toBe(
      '<span class="visually-hidden">Error: </span>we have a problem'
    );
  });

  it('should not render the formInput with an alert', () => {
    const { container } = render(
      <FormInput
        containerClassName="container"
        label="label"
        name="name"
        type="text"
        inputClassName="inputClass"
        inputProps={{
          defaultValue: 'default value',
        }}
        hint={{
          position: 'above',
          text: 'hint',
          className: 'hint-class',
        }}
        errorProps={{
          className: '',
        }}
        //@ts-ignore
        staticErrorMessage={}
        errorPosition={ErrorPosition.AFTER_LABEL}
        containerClassNameError=""
        hiddenErrorText=""
      />
    );

    expect(container.querySelector('[role=alert]')).not.toBeInTheDocument();
  });

  it('should not render the formInput with an alert for an empty staticErrorMessage', () => {
    const { container } = render(
      <FormInput
        containerClassName="container"
        label="label"
        name="name"
        type="text"
        inputClassName="inputClass"
        inputProps={{
          defaultValue: 'default value',
        }}
        hint={{
          position: 'above',
          text: 'hint',
          className: 'hint-class',
        }}
        errorProps={{
          className: '',
        }}
        staticErrorMessage=""
        errorPosition={ErrorPosition.AFTER_LABEL}
        containerClassNameError=""
        hiddenErrorText=""
      />
    );

    expect(container.querySelector('[role=alert]')).not.toBeInTheDocument();
  });

  it('should display the formInput error', async () => {
    const user = userEvent.setup();
    render(<DummyComponent pos={ErrorPosition.BOTTOM} />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'TEST VALUE');
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('should display the formInput error message', async () => {
    const user = userEvent.setup();
    render(<DummyComponent pos={ErrorPosition.BOTTOM} />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'TEST VALUE');
    expect(screen.getByRole('alert')).toContainHTML('is invalid');
  });

  it('should display the formInput error message on top', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <DummyComponent
        pos={ErrorPosition.BEFORE_LABEL}
        hiddenErrorText="Error:"
      />
    );
    const input = screen.getByRole('textbox');
    await user.type(input, 'TEST VALUE');
    let error: any;
    if (container.firstChild) error = container.firstChild.childNodes[0];
    expect(error.innerHTML).toBe('<span>Error: </span>is invalid');
  });

  it('should display the formInput error message on the bottom', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <DummyComponent
        pos={ErrorPosition.BOTTOM}
        errProp={null}
        hiddenErrorText="Error:"
      />
    );
    const input = screen.getByRole('textbox');
    await user.type(input, 'TEST VALUE');
    let error: any;
    if (container.firstChild) error = container.firstChild.lastChild;
    expect(error.innerHTML).toBe('<span>Error: </span>is invalid');
  });

  it('should display the formInput error message on the bottom with a span', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <DummyComponent
        pos={ErrorPosition.BOTTOM}
        errProp={null}
        hiddenErrorText={'Error:'}
      />
    );
    const input = screen.getByRole('textbox');
    await user.type(input, 'TEST VALUE');
    let error: any;
    if (container.firstChild) error = container.firstChild.lastChild;
    expect(error.innerHTML).toBe('<span>Error: </span>is invalid');
  });

  it('should return validation false on startup if the validation rules are not met', async () => {
    const user = userEvent.setup();
    render(<DummyComponent pos={ErrorPosition.BOTTOM} />);
    const validLabel = screen.getByTestId('check-validity');
    expect(validLabel.innerHTML).toBe('false');
    const input = screen.getByRole('textbox');
    await user.type(input, '@_-bddcd6A');
    expect(validLabel.innerHTML).toBe('true');
  });

  it('should display the error message on load', () => {
    render(<DummyComponent pos={ErrorPosition.BOTTOM} displayError={true} />);
    expect(screen.getByRole('alert')).toContainHTML('is invalid');
  });

  it('should display wrapper label container in floating variant', () => {
    const { container } = render(<DummyComponent variant="floating" />);
    const wrapper = container.querySelector('.dcx-wrapper-label');
    expect(wrapper).toBeDefined();
  });

  it('should display wrapper label and extra class with prefix and suffix', () => {
    const { container } = render(
      <DummyComponent
        variant="floating"
        prefix={{
          content: '£',
          properties: {
            id: 'prefix',
            className: 'prefix-class',
          },
        }}
        suffix={{
          content: 'per item',
          properties: {
            id: 'suffix',
            className: 'suffix-class',
          },
        }}
      />
    );
    const wrapper = container.querySelector('.dcx-wrapper-label');
    const prefix = container.querySelector('#prefix');
    const suffix = container.querySelector('#suffix');
    expect(wrapper).toBeDefined();
    expect(prefix).toHaveClass('prefix-class');
    expect(suffix).toHaveClass('suffix-class');
  });

  it('should display the error message without interact with the component', async () => {
    const user = userEvent.setup();
    render(<DummyComponentTriggerError />);
    expect(() => screen.getByText('is invalid')).toThrow(
      'Unable to find an element'
    );
    const button = screen.getByRole('button');
    await user.click(button);
    expect(screen.getByRole('alert')).toContainHTML('is invalid');
  });

  it('should display a static error message', () => {
    render(<DummyStaticComponent pos={ErrorPosition.AFTER_LABEL} />);
    const error = screen.getByRole('alert');
    expect(error.textContent).toBe('static error message');
  });

  it('should add an extra class if the static error is displayed and error position afterLabel', () => {
    const { container } = render(
      <DummyStaticComponent pos={ErrorPosition.AFTER_LABEL} />
    );
    const inputContainer: Element | null = container.querySelector('div');
    expect(inputContainer?.getAttribute('class')).toBe(
      'dcx-form-input container-class dcx-form-input--filled dcx-form-input--error container-error'
    );
  });

  it('should add an extra class if the static error is displayed and error position bottom', () => {
    const { container } = render(
      <DummyStaticComponent pos={ErrorPosition.BOTTOM} />
    );
    const inputContainer: Element | null = container.querySelector('div');
    expect(inputContainer?.getAttribute('class')).toBe(
      'dcx-form-input container-class dcx-form-input--filled dcx-error-bottom dcx-form-input--error container-error'
    );
  });

  it('should add an extra class if the dynamic error is displayed', async () => {
    const user = userEvent.setup();
    const { container } = render(<DummyComponentTriggerError />);
    const button = screen.getByRole('button');
    await user.click(button);
    const inputContainer: Element | null =
      container.querySelector('.error-container');
    expect(inputContainer).not.toBeNull();
  });

  it('should display a hint message on top', () => {
    const { container } = render(
      <DummyStaticComponent
        pos={ErrorPosition.AFTER_LABEL}
        hint={{
          id: 'my-hint',
          text: 'my hint',
          position: 'above',
        }}
      />
    );
    const hint: any = container.querySelector('#my-hint');
    expect(hint.innerHTML).toBe('my hint');
  });

  it('should display a hint message on bottom', () => {
    const { container } = render(
      <DummyStaticComponent
        pos={ErrorPosition.AFTER_LABEL}
        hint={{
          id: 'my-hint',
          text: 'my hint',
        }}
      />
    );
    const hint: any = container.querySelector('#my-hint');
    expect(hint.innerHTML).toBe('my hint');
  });

  it('should display a hint message not position hint', () => {
    const { container } = render(
      <DummyStaticComponent
        pos={ErrorPosition.AFTER_LABEL}
        hint={{
          id: 'my-hint',
          text: 'my hint',
          position: 'above',
        }}
      />
    );
    const input: any = container.querySelector('.dcx-form-input');
    expect(input).not.toHaveClass('dcx-hint-bottom');
  });

  it('should display a hint message above', async () => {
    const { container } = render(
      <DummyStaticComponent
        pos={ErrorPosition.AFTER_LABEL}
        hint={{
          id: 'my-hint',
          text: 'my hint',
          position: 'top',
        }}
      />
    );
    const input: any = container.querySelector('.dcx-form-input');
    await waitFor(() => {
      expect(input).toHaveClass('dcx-hint-bottom');
    });
  });

  it('should display the formInput error message after the hint', async () => {
    const { container } = render(
      <DummyStaticComponent
        pos={ErrorPosition.AFTER_HINT}
        hint={{
          id: 'my-hint',
          text: 'my hint',
        }}
      />
    );

    const error: any = container.querySelector('[role=alert]');
    expect(error.innerHTML).toContain('static error message');
  });

  it('should not display the aria-label name if the aria-label attribute is not passed', () => {
    const handleChange = jest.fn();
    render(
      <FormInput
        name="password"
        type="text"
        value="test"
        onChange={handleChange}
        prefix={{
          properties: {
            id: 'prefix',
          },
          content: 'prefix',
        }}
        hiddenErrorText=""
      />
    );
    const input = screen.getByRole('textbox');
    expect(input.getAttribute('aria-label')).toBeNull();
  });

  it('should have a null tabIndex value by default', () => {
    render(
      <FormInput name="password" type="text" value="test" hiddenErrorText="" />
    );

    const input: any = screen.getByRole('textbox');
    expect(input.getAttribute('tabindex')).toBeNull();
  });

  it('should accept tabIndex attribute', () => {
    render(
      <FormInput
        name="password"
        type="text"
        value="test"
        tabIndex={1}
        hiddenErrorText=""
      />
    );

    const input: any = screen.getByRole('textbox');
    expect(input.getAttribute('tabindex')).toBe('1');
  });
});
