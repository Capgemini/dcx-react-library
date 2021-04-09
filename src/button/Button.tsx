import { debounce } from 'lodash';
import React from 'react';

export enum BUTTON_TYPE {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

type ButtonProps = {
  /**
   * display the label
   */
  label: string;
  /**
   * handler for the click event
   */
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * define the button type: button/submit/reset - by default button
   */
  type?: BUTTON_TYPE;
  /**
   * allow to enable disable the button
   */
  disabled?: boolean;
  /**
   * define the aria-label for accessibility. If no value is passed it will render {type}-button
   */
  ariaLabel?: string;
  /**
   * Disable the button for a specific amount of time in ms
   */
  disableClickForMs?: number;
  /**
   * allow to add an image before the label
   */
  customPrefixImg?: JSX.Element;
  /**
   * allow to add an image after the label
   */
  customPostfixImg?: JSX.Element;

  /**
   * determine if there's a loading status
   */
  isLoading?: boolean;
  /**
   * a custom loding label
   */
  loadingLabel?: string;
  /**
   * allow to add an image before the label when loading
   */
  customLoadingPreImage?: JSX.Element;
  /**
   * allow to add an image after the label when loading
   */
  customLoadingPostImage?: JSX.Element;
};

export const Button = ({
  label,
  onClick,
  type = BUTTON_TYPE.BUTTON,
  disabled = false,
  ariaLabel = `${type}-button`,
  disableClickForMs = 0,
  customPrefixImg,
  customPostfixImg,
  isLoading,
  loadingLabel,
  customLoadingPreImage,
  customLoadingPostImage,
  ...props
}: ButtonProps) => {
  const [disable, setDisable] = React.useState<boolean>(disabled);
  const delayNextClick = React.useCallback(
    debounce(() => {
      setDisable(false);
    }, disableClickForMs),
    []
  );

  React.useEffect(() => {
    if (isLoading === true) {
      setDisable(true);
    } else if (isLoading === false) {
      setDisable(false);
    }
  }, [isLoading]);

  React.useEffect(() => {
    setDisable(disabled);
  }, [disabled]);

  const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setDisable(true);
    if (disableClickForMs) delayNextClick();
    onClick(evt);
  };

  let prefix: JSX.Element = <></>;
  let postfix: JSX.Element = <></>;
  if (isLoading) {
    prefix = <>{customLoadingPreImage}</>;
    postfix = <>{customLoadingPostImage}</>;
  } else {
    if (customPrefixImg) prefix = <>{customPrefixImg}</>;
    if (customPostfixImg) postfix = <>{customPostfixImg}</>;
  }

  return (
    <button
      onClick={handleClick}
      disabled={disable}
      type={type}
      aria-label={ariaLabel}
      {...props}
    >
      {prefix}
      {isLoading && loadingLabel ? loadingLabel : label}
      {postfix}
    </button>
  );
};
