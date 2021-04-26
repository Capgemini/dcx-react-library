import React from 'react';
import { upperFirst } from 'lodash';
import { ErrorMessage } from '../common/components';
import { validateDateString } from '../common/utils';
import { DateComponent } from './Date';
export type DateType = {
  label?: string;
  classNameInput?: string;
  classNameLabel?: string;
  classNameSpan?: string;
  customLabel?: JSX.Element;
};

type ErrorPosition = 'top' | 'bottom';

type FormDateProps = {
  /**
   * Different type format accepted
   */
  dateFormat:
    | 'dd/mm/yyyy'
    | 'DD/MM/YYYY'
    | 'dd/mm/yy'
    | 'DD/MM/YY'
    | 'yyyy/mm/dd'
    | 'YYYY/MM/DD'
    | 'yy/mm/dd'
    | 'YY/MM/DD';

  /**
   * It will return if the date is valid and the actual value
   */
  handleValidity: (isValid: boolean, value: number | null) => void;
  /**
   * optional className for the container
   */
  inputContainerClass?: string;
  /**
   * optional className to style all the input
   */
  inputClass?: string;
  /**
   * all the properties available to customise the year:
   * // input label
   * label?: string;
   * //optional className for the input
   * classNameInput?: string;
   * //optional className for the label
   * classNameLabel?: string;
   * // optional className for the span
   * classNameSpan?: string;
   * // if you want to pass a custom Label (i.e. an h1 etc)
   * customLabel?: JSX.Element;
   */
  yearProps?: DateType;
  /**
   * all the properties available to customise the month:
   * // input label
   * label?: string;
   * //optional className for the input
   * classNameInput?: string;
   * //optional className for the label
   * classNameLabel?: string;
   * // optional className for the span
   * classNameSpan?: string;
   * // if you want to pass a custom Label (i.e. an h1 etc)
   * customLabel?: JSX.Element;
   */
  monthProps?: DateType;
  /**
   * all the properties available to customise the day:
   * // input label
   * label?: string;
   * //optional className for the input
   * classNameInput?: string;
   * //optional className for the label
   * classNameLabel?: string;
   * // optional className for the span
   * classNameSpan?: string;
   * // if you want to pass a custom Label (i.e. an h1 etc)
   * customLabel?: JSX.Element;
   */
  dayProps?: DateType;

  /**
   * show hide error
   */
  displayError?: boolean;
  /**
   * error message
   **/
  errorMessage?: any;
  /**
   * error position - top or bottom
   **/
  errorPosition?: ErrorPosition;
  /**
   * class to style the error
   */
  errorClass?: string;
  /**
   * define a pre-set day
   */
  day?: string;
  /**
   * define a pre-set month
   */
  month?: string;
  /**
   * define a pre-set year
   */
  year?: string;
  /**
   * allow to disable the input
   */
  disabled?: boolean;
};

const initialState = (
  day: string | undefined,
  month: string | undefined,
  year: string | undefined
) => ({
  day,
  month,
  year,
});

type State = {
  day: string | undefined;
  month: string | undefined;
  year: string | undefined;
};
type Action = {
  type: 'setYear' | 'setMonth' | 'setDay';
  value: string;
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'setYear':
      return { ...state, year: action.value };
    case 'setMonth':
      return { ...state, month: action.value };
    case 'setDay':
      return { ...state, day: action.value };
    default:
      return { ...state };
  }
}

export const FormDate = ({
  dateFormat,
  handleValidity,
  inputContainerClass,
  inputClass,
  yearProps,
  monthProps,
  dayProps,
  displayError = false,
  errorPosition = 'bottom',
  errorMessage,
  errorClass,
  day,
  month,
  year,
  disabled = false,
}: FormDateProps) => {
  const dateSplit: string[] = dateFormat.toLowerCase().split('/');
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState(day, month, year)
  );
  const [showError, setShowError] = React.useState<boolean>(displayError);

  const handleChange = (evt: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget;
    if (isNaN(Number(value))) return;
    //@ts-ignore
    dispatch({ type: `set${upperFirst(name)}`, value });
  };

  React.useEffect(() => {
    setShowError(displayError);
  }, [displayError]);

  React.useEffect(() => {
    let isValid = false;
    const { day, month, year } = state;
    const selectedDate: any = new Date(
      Number(year),
      Number(month) - 1,
      Number(day)
    );
    const userDate = `${day}/${month}/${year}`;
    if (day && month && year && userDate.length >= dateFormat.length) {
      isValid = validateDateString(Number(day), Number(month), Number(year));
    }
    if (state.day || state.month || state.year)
      handleValidity(isValid, isValid ? selectedDate.getTime() : null);
  }, [state.day, state.month, state.year]);

  const DateComp = dateSplit.map((value: string) => {
    switch (value.charAt(0)) {
      case 'y':
        return (
          <DateComponent
            key={value}
            htmlFor="year"
            value={state.year || ''}
            name="year"
            maxLength={value.length}
            handleChange={handleChange}
            classNameLabel={yearProps?.classNameLabel}
            customLabel={yearProps?.customLabel}
            classNameSpan={yearProps?.classNameSpan}
            label={yearProps?.label}
            classNameInput={[yearProps?.classNameInput, inputClass].join(' ')}
            disabled={disabled}
          />
        );
      case 'm':
        return (
          <DateComponent
            key={value}
            htmlFor="month"
            value={state.month || ''}
            name="month"
            handleChange={handleChange}
            classNameLabel={monthProps?.classNameLabel}
            customLabel={monthProps?.customLabel}
            classNameSpan={monthProps?.classNameSpan}
            label={monthProps?.label}
            classNameInput={[monthProps?.classNameInput, inputClass].join(' ')}
            disabled={disabled}
          />
        );
      case 'd':
        return (
          <DateComponent
            key={value}
            htmlFor="day"
            value={state.day || ''}
            name="day"
            handleChange={handleChange}
            classNameLabel={dayProps?.classNameLabel}
            customLabel={dayProps?.customLabel}
            classNameSpan={dayProps?.classNameSpan}
            label={dayProps?.label}
            classNameInput={[dayProps?.classNameInput, inputClass].join(' ')}
            disabled={disabled}
          />
        );
      default:
        return <pre key="invalid">invalid format</pre>;
    }
  });
  return (
    <div className={inputContainerClass}>
      {errorPosition === 'top' && showError && (
        <ErrorMessage text={errorMessage} classes={errorClass} />
      )}
      <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
        {DateComp}
      </div>
      {errorPosition === 'bottom' && showError && (
        <ErrorMessage text={errorMessage} classes={errorClass} />
      )}
    </div>
  );
};
