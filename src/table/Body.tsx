import React from 'react';
import { omit } from 'lodash';
import { Row } from './Row';
import { classNames } from '../common';

const rowValues = (dataSource: any, columnsToOmit?: string[]): any[] =>
  Object.values(omit(omit(dataSource, ['trProps']), columnsToOmit || []));

type BodyProps = {
  values: any[];
  columnsToOmit?: string[];
  onSelect?: (value: any) => void;
  handleCellClick?: (evt: React.MouseEvent<HTMLElement>, value: any) => void;
  selectedRowClassName?: string;
  tbodyClassName?: string;
  trClassName?: string;
  tdClassName?: string;
  trProps?: any[];
};
export const Body = ({
  values,
  columnsToOmit,
  onSelect,
  handleCellClick,
  selectedRowClassName,
  tbodyClassName,
  trClassName,
  tdClassName,
  trProps,
}: BodyProps) => {
  const [selected, isSelected] = React.useState(-1);
  const handleSelected = (v: any, key: number) => {
    if (onSelect) {
      onSelect(v);
      isSelected(key);
    }
  };
  const combineValueWithTrProps = values.map((v: any, k: number) => {
    let newValue = { ...v };
    if (trProps && trProps[k]) {
      return (newValue = { ...newValue, trProps: trProps[k] });
    }
    return newValue;
  });

  return (
    <tbody className={tbodyClassName}>
      {combineValueWithTrProps.map((v: any, key: number) => (
        <Row
          onSelect={(v) => handleSelected(v, key)}
          handleCellClick={handleCellClick}
          trClassName={classNames([
            trClassName,
            {
              [`${selectedRowClassName}`]: selected === key,
            },
          ])}
          tdClassName={tdClassName}
          key={key}
          values={rowValues(v, columnsToOmit)}
          rawData={v}
          trProps={v.trProps}
        />
      ))}
    </tbody>
  );
};
