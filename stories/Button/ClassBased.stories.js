import { Button } from '../../src/button/Button';
import { useArgs } from '@storybook/preview-api';

/**
 * In this section we're using the button component providing the **GovUk style** passing the relative `className.
 * Feel free to use your own css to style the formInput as you prefer.
 */
export default {
  title: 'DCXLibrary/Form/Button/Class based',
  component: Button,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'],
};

export const Basic = {
  name: 'Basic',
  args: {
    label: 'Save and continue',
    className: 'govuk-button',
  },
  argTypes: { onClick: { action: 'clicked' } },
};

export const WithImage = {
  name: 'With Image',
  args: {
    label: 'Start now',
    className: 'govuk-button',
    customPostfixImg: (
      <svg
        class="govuk-button__start-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="17.5"
        height="19"
        viewBox="0 0 33 40"
        aria-hidden="true"
        focusable="false"
      >
        <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"></path>
      </svg>
    ),
  },
  argTypes: { onClick: { action: 'clicked' } },
};

export const Disabled = {
  name: 'Disabled',
  args: {
    label: 'Start now',
    className: 'govuk-button',
    disabled: true,
  },
  argTypes: { onClick: { action: 'clicked' } },
};

/**
 * To check how the component change in a loading state please go in the `Controls section` and toggle the boolean property **isLoading**
 */
export const Loading = {
  name: 'Loading',
  render: function ({ onClick, ...args }) {
    const [args_, setArgs] = useArgs();
    const buttonHandler = (evt) => {
      onClick(evt);
      setArgs({ isLoading: true });
      setTimeout(() => setArgs({ isLoading: false }), 2000);
    };
    return <Button {...args} onClick={buttonHandler} />;
  },
  args: {
    isLoading: false,
    label: 'Register',
    className: 'govuk-button',
    loadingLabel: 'Loading...',
  },
  argTypes: { onClick: { action: 'onClick' } },
};

/**
 * Button allows to pass a simple value or if needed a custom one as children property
 */
export const CustomContent = {
  args: {
    className: 'govuk-button',
    children: [<strong>Login</strong>],
  },
};
