import React, { useState, useEffect } from 'react';
import { classNames, ErrorMessage, useHydrated } from '../common';
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
   * textarea error class name
   */
  textareaErrorClassName?: string;
  /**
   * character count message class name
   */
  messageClassName?: string;
  /**
   * character count message error class name
   */
  messageErrorClassName?: string;
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
   * maximum character or word value
   */
  maxLength: number;
  /**
   * type of limit characters or words
   */
  limitType?: 'characters' | 'words';
  /**
   * place constraint on number of words/characters can be typed in the textbox
   */
  constrained?: boolean;
  /**
   * threshold value in percentage to show remaining characters or words message
   */
  threshold?: number;
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
  textareaErrorClassName,
  messageClassName,
  messageErrorClassName,
  id,
  name,
  rows,
  cols,
  maxLength,
  limitType = 'characters',
  constrained = false,
  threshold,
  ariaDescribedBy,
  onChange,
  displayError = false,
  errorMessage = '',
  errorMessageClassName,
  errorId,
  errorVisuallyHiddenText,
  ...props
}: CharacterCountProps) => {
  const [remainingCount, setRemainingCount] = useState<number>(maxLength);
  const [overLimitBy, setOverLimitBy] = useState<number>(0);
  const [showMessage, setShowMessage] = useState<boolean>(!threshold);
  const [showError, setShowError] = useState<boolean>(displayError);

  const isWordsCount = limitType === 'words';

  let hydrated = useHydrated();

  useEffect(() => {
    setShowError(displayError);
  }, [displayError]);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const remaining = isWordsCount
      ? maxLength - evt.target.value.split(' ').length
      : maxLength - evt.target.value.length;

    const overThreshold =
      isWordsCount && threshold
        ? (evt.target.value.split(' ').length / maxLength) * 100 >= threshold
        : threshold && (evt.target.value.length / maxLength) * 100 >= threshold;

    setShowMessage(overThreshold || !threshold);
    setOverLimitBy(-remaining);

    setRemainingCount(remaining);

    onChange && onChange(evt);
  };

  const maxCharactersMessage = !hydrated
    ? `You can enter up to ${maxLength} ${limitType}.`
    : remainingCount >= 0
    ? `You have ${remainingCount} ${limitType} remaining`
    : `You have ${overLimitBy} ${limitType} too many`;

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
          className={classNames([
            textareaClassName,
            { [`${textareaErrorClassName}`]: overLimitBy > 0 },
          ])}
          id={id}
          name={name}
          onChange={handleChange}
          rows={rows}
          cols={cols}
          maxLength={constrained && !isWordsCount ? maxLength : undefined}
          aria-describedby={ariaDescribedBy || ''}
          {...props}
        ></textarea>
        {showMessage && (
          <div
            className={classNames([
              {
                [`${messageErrorClassName}`]: overLimitBy > 0 || showError,
                [`${messageClassName}`]: overLimitBy <= 0 && !showError,
              },
            ])}
          >
            {maxCharactersMessage}
          </div>
        )}
      </div>
    </div>
  );
};
