import { useValidation, useValidationOnChange } from '../useValidation';
import { renderHook } from '@testing-library/react-hooks';

interface Validity {
  rule: any;
  message: string;
}

const useValidity = (value: string, validation: Validity) => {
  const { validity } = useValidation(value, validation);
  return { validity };
};

const useValidityOnChange = (validation: Validity, value?: string): any =>
  useValidationOnChange(validation, value);

describe('UseValidity', () => {
  it('should return valid rule', () => {
    const validation = {
      rule: {
        type: 'float',
        min: 100,
      },
      message: 'the value have to be float and more then 100',
    };
    const { result } = renderHook(() => useValidity('200.40', validation));
    expect(result.current.validity.valid).toBeTruthy();
  });

  it('should return invalid rule', () => {
    const validation = {
      rule: {
        type: 'float',
        min: 100,
      },
      message: 'the value have to be float and more then 100',
    };
    const { result } = renderHook(() => useValidity('30', validation));
    expect(result.current.validity.message).toBe(
      'the value have to be float and more then 100'
    );
    expect(result.current.validity.valid).toBeFalsy();
  });

  it('should return a not valid result at the beginning', () => {
    const validation = {
      rule: {
        type: 'password',
        minLength: 8,
        uppercase: 1,
        numbers: 1,
        matchesOneOf: ['@', '_', '-', '.', '!'],
      },
      message: 'is invalid',
    };
    const { result } = renderHook(() => useValidityOnChange(validation));

    expect(result.current.validity.valid).toBeFalsy();
  });
});
