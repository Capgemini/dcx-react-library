import React, { useState, useEffect } from 'react';
import { ErrorMessage, useHydrated } from '../common';
import { HintProps, VisuallyHidden } from '../common/components/commonTypes';

type CharacterCountProps = React.HTMLAttributes<HTMLTextAreaElement> & {
  /**
   * textarea label
   */
  label?: string;
  /**
   * textarea hint
   */
  hint?: HintProps;
  /**
   * component container class name
   */
  containerClassName?: string;
  /**
   * form group class name
   */
  formGroupClassName?: string;
  /**
   * label class name
   */
  labelClassName?: string;
  /**
   * textarea class name
   */
  textareaClassName?: string;
  /**
   * character count message class name
   */
  messageClassName?: string;
  /**
   * component id
   */
  id?: string;
  /**
   * textarea name
   */
  name?: string;
  /**
   * textarea rows value
   */
  rows?: number;
  /**
   * textarea columns value
   */
  cols?: number;
  /**
   * maximum character value
   */
  maxLength: number;
  /**
   * textarea aria-describedby
   */
  ariaDescribedBy?: string;
  /**
   * onChange event
   */
  onChange?: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  /**
   * show/hide error
   */
  displayError?: boolean;
  /**
   * error message
   */
  errorMessage?: string;
  /**
   * error message class name
   */
  errorMessageClassName?: string;
  /**
   * error id
   */
  errorId?: string;
  /**
   * visually hidden text of the error
   */
  errorVisuallyHiddenText?: VisuallyHidden;
};

export const CharacterCount = ({
  label,
  hint,
  containerClassName,
  formGroupClassName,
  labelClassName,
  textareaClassName,
  messageClassName,
  id,
  name,
  rows,
  cols,
  maxLength,
  ariaDescribedBy,
  onChange,
  displayError = false,
  errorMessage = '',
  errorMessageClassName,
  errorId,
  errorVisuallyHiddenText,
  ...props
}: CharacterCountProps) => {
  const [remainingChars, setRemainingChars] = useState<number>(maxLength);
  const [showError, setShowError] = useState<boolean>(displayError);

  let hydrated = useHydrated();

  useEffect(() => {
    setShowError(displayError);
  }, [displayError]);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    maxLength && setRemainingChars(maxLength - evt.target.value.length);
    onChange && onChange(evt);
  };

  const maxCharactersMessage = `You can enter up to ${
    !hydrated ? maxLength : remainingChars
  } characters.`;

  return (
    <div className={containerClassName}>
      <div className={formGroupClassName}>
        {label && (
          <label className={labelClassName} htmlFor={id}>
            {label}
          </label>
        )}
        {hint && <div className={hint.className}>{hint.text}</div>}
        {showError && (
          <ErrorMessage
            text={errorMessage}
            className={errorMessageClassName}
            id={errorId}
            visuallyHiddenText={errorVisuallyHiddenText}
          />
        )}
        <textarea
          className={textareaClassName}
          id={id}
          name={name}
          onChange={handleChange}
          rows={rows}
          cols={cols}
          maxLength={maxLength}
          aria-describedby={ariaDescribedBy || ''}
          {...props}
        ></textarea>
      </div>
      <div className={messageClassName}>{maxCharactersMessage}</div>
    </div>
  );
};
