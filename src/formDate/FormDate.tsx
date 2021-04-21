import React from 'react';

type DateType = {
  label?: string;
  classNameInput?: string;
  classNameLabel?: string;
  classNameSpan?: string;
  customLabel?: JSX.Element;
};

type FormDateProps = {
  dateFormat: 'dd/mm/yyyy' | 'dd/mm/yy' | 'yyyy/mm/dd' | 'yy/mm/dd';
  inputContainerClass?: string;
  inputClass?: string;
  yearProps?: DateType;
  monthProps?: DateType;
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
  const dateSplit: string[] = dateFormat.split('/');

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
