import React from 'react';
import { omit } from 'lodash';
import { Row } from './Row';

const rowValues = (dataSource: any, columnsToOmit?: string[]): any[] =>
  Object.values(omit(dataSource, columnsToOmit || []));

type BodyProps = {
  values: any[];
  columnsToOmit?: string[];
  onSelect?: (value: any) => void;
  handleCellClick?: (evt: React.MouseEvent<HTMLElement>, value: any) => void;
  selectedRowClassName?: string;
  tbodyClassName?: string;
  trClassName?: string;
  tdClassName?: string;
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
}: BodyProps) => {
  const [selected, isSelected] = React.useState(-1);
  const handleSelected = (v: any, key: number) => {
    if (onSelect) {
      onSelect(v);
      isSelected(key);
    }
  };
  return (
    <tbody className={tbodyClassName}>
      {values.map((v: any, key: number) => (
        <Row
          onSelect={v => handleSelected(v, key)}
          handleCellClick={handleCellClick}
          trClassName={[
            trClassName,
            selected === key ? selectedRowClassName : undefined,
          ].join(' ')}
          tdClassName={tdClassName}
          key={key}
          values={rowValues(v, columnsToOmit)}
          rawData={v}
        />
      ))}
    </tbody>
  );
};
