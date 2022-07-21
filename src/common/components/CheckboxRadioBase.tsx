import React, { useState } from 'react';
import { isEmpty } from 'lodash';
import { Hint } from './Hint';
import { Conditional } from './Conditional';
import { FormRadioCheckboxProps } from './commonTypes';
import { useHydrated } from '../utils';

export const CheckboxRadioBase = ({
  label,
  value,
  type,
  role,
  id,
  ariaLabel,
  ariaDataControls,
  ariaDescribedBy,
  ariaLabelledBy,
  disabled,
  conditional,
  hint,
  inputProps,
  itemProps,
  labelProps,
  name,
  nested,
  selected,
  onChange,
  inputClassName,
  labelClassName,
  itemClassName,
}: FormRadioCheckboxProps & {
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    conditionalInput?: string
  ) => void;
}) => {
  let hydrated = useHydrated();
  const conditionalReveal = (): boolean =>
    !isEmpty(conditional) && selected === true;

  const [conditionalValue, setConditionalValue] = useState<string>(
    conditional ? conditional.value : ''
  );

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (onChange) onChange(event);
  };

  const input: JSX.Element = (
    <input
      id={id}
      type={type}
      role={role}
      value={value}
      name={name}
      aria-label={ariaLabel}
      data-aria-controls={ariaDataControls}
      aria-describedby={ariaDescribedBy}
      aria-labelledby={ariaLabelledBy}
      disabled={disabled}
      checked={selected}
      {...inputProps}
      className={inputClassName}
      onChange={onChangeHandler}
    />
  );
  const el: JSX.Element = nested ? (
    <label {...labelProps} className={labelClassName}>
      {input}
      {label}
    </label>
  ) : (
    <>
      {input}
      <label {...labelProps} htmlFor={id} className={labelClassName}>
        {label}
      </label>
    </>
  );

  return (
    <div {...itemProps} className={itemClassName}>
      {hint && hint.position === 'above' && <Hint {...hint} />}
      {el}
      {hint && hint.position !== 'above' && <Hint {...hint} />}
      {!hydrated && conditional !== undefined
        ? Conditional({
            ...conditional,
            value: conditionalValue,
          })
        : conditional !== undefined &&
          conditionalReveal() &&
          Conditional({
            ...conditional,
            value: conditionalValue,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
              setConditionalValue(event.currentTarget.value);
              if (onChange) onChange(event, event.currentTarget.value);
            },
          })}
    </div>
  );
};
