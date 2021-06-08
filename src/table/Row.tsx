import React from 'react';
type RowProps = {
  values: any[];
  onSelect?: (value: any) => void;
  handleCellClick?: (evt: React.MouseEvent<HTMLElement>, value: any) => void;
  trClassName?: string;
  tdClassName?: string;
  rawData: any[];
};
export const Row = ({
  values,
  onSelect,
  handleCellClick,
  trClassName,
  tdClassName,
  rawData,
}: RowProps) => {
  const handleRowClick = () => {
    if (onSelect) {
      onSelect(rawData);
    }
  };

  const handleElClick = (evt: React.MouseEvent<HTMLElement>) => {
    handleCellClick && handleCellClick(evt, rawData);
  };

  const checkInstance = (v: any) => {
    if (v instanceof Object) {
      return v.props.children instanceof Array
        ? v.props.children.map((element: any, k: number) =>
            React.cloneElement(element, {
              key: k,
              onClick: handleElClick,
            })
          )
        : React.cloneElement(v, {
            onClick: handleElClick,
          });
    } else {
      return v;
    }
  };
  return (
    <tr className={trClassName} onClick={handleRowClick}>
      {values.map((v: any, key: number) => (
        <td className={tdClassName} key={key} role="row">
          <span>{checkInstance(v)}</span>
        </td>
      ))}
    </tr>
  );
};
