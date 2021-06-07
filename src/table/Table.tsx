import React from 'react';
import { omit } from 'lodash';
import { Body } from './Body';
import { Header } from './Header';
import { useSortableData } from './useSortable';
type TableProps = {
  /**
   * the data source used to populate the table
   */
  dataSource: any[];
  /**
   * you can decide to do not display some of the columns
   */
  columnsToOmit?: string[];
  /**
   * handle to select one row
   */
  onSelect?: (value: any) => void;
  /**
   * style the selected row
   */
  selectedRowClassName?: string;
  /**
   * style for the table tag
   */
  tableClassName?: string;
  /**
   * style for the thead tag
   */
  theadClassName?: string;
  /**
   * style for the tr tag
   */
  trClassName?: string;
  /**
   * style for the th tag
   */
  thClassName?: string;
  /**
   * style for the tbody tag
   */
  tbodyClassName?: string;
  /**
   * style for the td tag
   */
  tdClassName?: string;
  /**
   * you can pass a custom icon when is sorted ascendent
   */
  sortAscIcon?: JSX.Element;
  /**
   * you can pass a custom icon when is sorted descendent
   */
  sortDescIcon?: JSX.Element;
  /**
   * you can specify the with of each column
   */
  columnsWidth?: string[];
};

const keys = (dataSource: any[], columnsToOmit?: string[]): string[] =>
  Object.keys(omit(dataSource[0], columnsToOmit || []));

export const Table = ({
  dataSource,
  columnsToOmit,
  onSelect,
  selectedRowClassName,
  tableClassName,
  theadClassName,
  trClassName,
  thClassName,
  tbodyClassName,
  tdClassName,
  sortAscIcon,
  sortDescIcon,
  columnsWidth,
}: TableProps) => {
  const { items, requestSort, sortConfig } = useSortableData(dataSource);
  const [selectedHeader, setSelectedHeader] = React.useState('');
  const handleClick = (value: string) => {
    requestSort(value);
    setSelectedHeader(value);
  };

  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return;
    }
    return (
      sortConfig.key === name && {
        direction: sortConfig.direction,
        key: sortConfig.key,
      }
    );
  };

  return (
    <table className={tableClassName}>
      <Header
        onClick={handleClick}
        theadClassName={theadClassName}
        trClassName={trClassName}
        thClassName={thClassName}
        values={keys(items, columnsToOmit)}
        keySorted={getClassNamesFor(selectedHeader)}
        sortAscIcon={sortAscIcon}
        sortDescIcon={sortDescIcon}
        columnsWidth={columnsWidth}
      />
      <Body
        values={items}
        onSelect={onSelect}
        selectedRowClassName={selectedRowClassName}
        columnsToOmit={columnsToOmit}
        tbodyClassName={tbodyClassName}
        trClassName={trClassName}
        tdClassName={tdClassName}
      />
    </table>
  );
};
