import React from 'react';
import { SortIcon } from './SortIcon';
type HeaderProps = {
  values: string[];
  onClick: (value: string) => void;
  theadClassName?: string;
  trClassName?: string;
  thClassName?: string;
  sortAscIcon?: JSX.Element;
  sortDescIcon?: JSX.Element;
  keySorted: any;
  columnsWidth?: string[];
};

export const Header = ({
  values,
  onClick,
  theadClassName,
  trClassName,
  thClassName,
  keySorted,
  sortAscIcon,
  sortDescIcon,
  columnsWidth,
}: HeaderProps) => (
  <thead className={theadClassName}>
    <tr className={trClassName}>
      {values.map((v: string, key: number) => (
        <th
          className={thClassName}
          key={key}
          role="row"
          onClick={() => onClick(v)}
          style={{ width: columnsWidth && columnsWidth[key] }}
        >
          {v}
          {sortAscIcon && sortDescIcon && (
            <SortIcon
              value={v}
              keySorted={keySorted}
              sortAscIcon={sortAscIcon}
              sortDescIcon={sortDescIcon}
            />
          )}
        </th>
      ))}
    </tr>
  </thead>
);
