import React from 'react';

type DateType = {
  label?: string;
  classNameInput?: string;
  classNameLabel?: string;
  classNameSpan?: string;
  customLabel?: JSX.Element;
};

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
};

type DateProps = DateType & { value: string };

const DateComponent = ({
  value,
  classNameLabel,
  customLabel,
  classNameSpan,
  label,
  classNameInput,
}: DateProps) => (
  <label
    style={{ display: 'flex', flexDirection: 'column' }}
    className={classNameLabel}
    htmlFor={value}
  >
    {customLabel
      ? customLabel
      : label && <span className={classNameSpan}>{label}</span>}
    <input className={classNameInput} name={value} type="number" />
  </label>
);

export const FormDate = ({
  dateFormat,
  inputContainerClass,
  inputClass,
  yearProps,
  monthProps,
  dayProps,
}: FormDateProps) => {
  const dateSplit: string[] = dateFormat.toLowerCase().split('/');

  const Date = dateSplit.map((value: string) => {
    switch (value.charAt(0)) {
      case 'y':
        return (
          <DateComponent
            key={value}
            value={value}
            classNameLabel={yearProps?.classNameLabel}
            customLabel={yearProps?.customLabel}
            classNameSpan={yearProps?.classNameSpan}
            label={yearProps?.label}
            classNameInput={[yearProps?.classNameInput, inputClass].join(' ')}
          />
        );
      case 'm':
        return (
          <DateComponent
            key={value}
            value={value}
            classNameLabel={monthProps?.classNameLabel}
            customLabel={monthProps?.customLabel}
            classNameSpan={monthProps?.classNameSpan}
            label={monthProps?.label}
            classNameInput={[monthProps?.classNameInput, inputClass].join(' ')}
          />
        );
      case 'd':
        return (
          <DateComponent
            key={value}
            value={value}
            classNameLabel={dayProps?.classNameLabel}
            customLabel={dayProps?.customLabel}
            classNameSpan={dayProps?.classNameSpan}
            label={dayProps?.label}
            classNameInput={[dayProps?.classNameInput, inputClass].join(' ')}
          />
        );
      default:
        return <pre key="invalid">invalid format</pre>;
    }
  });
  return (
    <div
      style={{ display: 'flex', flexDirection: 'row' }}
      className={inputContainerClass}
    >
      {Date}
    </div>
  );
};
