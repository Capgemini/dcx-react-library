import React from 'react';

enum buttonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

type Props = {
  type?: buttonType;
  disabled?: boolean;
  onClick: Function;
};

export const Button = (props: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { onClick } = props;
    onClick(event);
  };

  const { disabled, type } = props;

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      type={type || buttonType.BUTTON}
    >
      Send
    </button>
  );
};
