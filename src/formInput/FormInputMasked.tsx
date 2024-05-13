import React, { useEffect, useRef, useState } from 'react';
import IMask from 'imask';

export type MaskedEvent = {
  value: string;
  unmaskedValue: string;
};

type FormInputMaskedProps = {
  /**
   * define all the option you want to pass to mask your input
   * please refer to https://imask.js.org/ to look for the available options
   */
  options: IMask.AnyMaskedOptions;
  /**
   * function that will trigger all the time there's a change in the input
   **/
  onChange?: (event: MaskedEvent) => void;
  /**
   * input value
   **/
  value: string;
  /**
   * input name
   **/
  name?: string;
  /**
   * input type
   **/
  type?: string;

  /**
   * you can define your own properties
   */
  props?: any;
  /**
   * input aria-label
   **/
  ariaLabel?: string;
};

export const FormInputMasked = ({
  options,
  onChange,
  value,
  name,
  type,
  ariaLabel,
  ...props
}: FormInputMaskedProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [mask, setMask] =
    useState<IMask.InputMask<IMask.AnyMaskedOptions> | null>(null);

  useEffect(() => {
    if (mask && value) {
      mask.value = value as any;
    }
  }, [mask, value]);

  useEffect(() => {
    if (inputRef.current && !mask) {
      setMask(IMask(inputRef.current, { ...options }));
    }
  }, [mask, options]);

  useEffect(() => {
    if (inputRef.current && mask && onChange) {
      const { current } = inputRef;
      mask.on('accept', () => {
        onChange({
          value: current.value,
          unmaskedValue: mask.unmaskedValue,
        });
      });
    }
  }, [mask, onChange]);

  return (
    <input
      ref={inputRef}
      {...props}
      name={name}
      type={type}
      aria-label={ariaLabel}
    />
  );
};
