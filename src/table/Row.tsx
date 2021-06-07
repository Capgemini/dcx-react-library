import React from 'react';
type RowProps = {
  values: any[];
  onSelect?: (value: any) => void;
  trClassName?: string;
  tdClassName?: string;
};
export const Row = ({
  values,
  onSelect,
  trClassName,
  tdClassName,
}: RowProps) => {
  const handleRowClick = () => {
    if (onSelect) {
      onSelect(values);
    }
  };
  return (
    <tr className={trClassName} onClick={handleRowClick}>
      {values.map((v: any, key: number) => (
        <td className={tdClassName} key={key} role="row">
          {v}
        </td>
      ))}
    </tr>
  );
};
