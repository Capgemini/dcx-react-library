import React, { useEffect, useRef, useState } from 'react';
import IMask from 'imask';

export type MaskedEvent = {
  value: string;
  unmaskedValue: string;
};

type Props = {
  options: IMask.AnyMaskedOptions;
  onChange?: (event: MaskedEvent) => void;
  value: string;
  name?: string;
  type?: string;
  props?: any;
  ariaLabel?: string;
};

export const FormInputMasked: React.FC<Props> = ({
  options,
  onChange,
  value,
  name,
  type,
  props,
  ariaLabel,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [mask, setMask] = useState<IMask.InputMask<
    IMask.AnyMaskedOptions
  > | null>(null);

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
      mask.on('accept', () => {
        if (inputRef.current) {
          onChange({
            value: inputRef.current.value,
            unmaskedValue: mask.unmaskedValue,
          });
        }
      });
    }
  }, [mask, onChange]);

  return (
    <input
      ref={inputRef}
      name={name}
      type={type}
      {...props}
      aria-label={ariaLabel || name}
    />
  );
};
