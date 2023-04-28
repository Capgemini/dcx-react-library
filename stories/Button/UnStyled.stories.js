import { Button } from '../../src/button/Button';

export default {
  title: 'DCXLibrary/Form/Button',
  component: Button,
};

export const UnStyled = {
  render: () => {
    const buttonHandler = (evt) => {
      console.log(evt);
    };

    return (
      <Button
        label="Submit"
        disabled={false}
        onClick={buttonHandler}
        ariaLabel="label"
        disableClickForMs={0}
        customPostfixImg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17.5"
            height="19"
            viewBox="0 0 33 40"
            aria-hidden="true"
            focusable="false"
          >
            <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"></path>
          </svg>
        }
        customPrefixImg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17.5"
            height="19"
            viewBox="0 0 33 40"
            aria-hidden="true"
            focusable="false"
          >
            <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"></path>
          </svg>
        }
        formAction="https://www.capgemini.com/gb-en/"
      />
    );
  },

  name: 'un-styled',
};
