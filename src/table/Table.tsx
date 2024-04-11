import React from 'react';
import { omit } from '../common';
import { Body } from './Body';
import { Header } from './Header';
import { useSortableData } from './useSortable';
import { useTableSearch } from './useTableSearch';
type CustomHeaderLabel = {
  label: string;
  data: string;
  omit?: boolean;
};
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
   * handle the click on a specific cell of a row
   */
  handleCellClick?: (evt: React.MouseEvent<HTMLElement>, value: any) => void;
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
  /**
   * allow to enable sorting on the table (false by default)
   */
  withOrderBy?: boolean;
  /**
   * allow to enable the filter search on the table (false by default)
   */
  withSearch?: boolean;
  /**
   * allow to specify extra props for the search input
   */
  searchProps?: any;
  /**
   * allow to specify a custom header labels
   */
  customHeaderLabels?: CustomHeaderLabel[] | string[];
  /**
   * allow to pass extra properties to each row
   */
  trProps?: any[];
  /**
   * tab index value
   */
  tabIndex?: number;
};

const keys = (dataSource: any[], columnsToOmit?: string[]): string[] =>
  Object.keys(omit(dataSource[0], columnsToOmit || []));

export const Table = ({
  dataSource,
  columnsToOmit,
  onSelect,
  handleCellClick,
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
  withOrderBy = false,
  withSearch = false,
  searchProps,
  customHeaderLabels,
  trProps,
  tabIndex = 0,
}: TableProps) => {
  const { items, requestSort, sortConfig } = useSortableData(dataSource);
  const [selectedHeader, setSelectedHeader] = React.useState('');

  const [searchVal, setSearchVal] = React.useState('');

  const { filteredData } = useTableSearch({
    searchVal,
    data: withOrderBy ? items : dataSource,
  });

  const isListOfStrings = (
    headers: CustomHeaderLabel[] | string[]
  ): headers is string[] =>
    headers.some(
      (header: CustomHeaderLabel | string) => typeof header === 'string'
    );

  const handleClick = (value: string) => {
    if (customHeaderLabels) {
      const customHeaderEl = isListOfStrings(customHeaderLabels)
        ? customHeaderLabels.findIndex((c: string) => c === value)
        : customHeaderLabels.find((c: CustomHeaderLabel) => c.label === value);

      const key =
        typeof customHeaderEl === 'number'
          ? Object.keys(dataSource[0])[customHeaderEl]
          : (customHeaderEl as CustomHeaderLabel).data;

      // @ts-expect-error
      requestSort(key);
      // @ts-expect-error
      setSelectedHeader(key);
    } else {
      requestSort(value);
      setSelectedHeader(value);
    }
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

  const getHeaderValues = () => {
    if (customHeaderLabels && isListOfStrings(customHeaderLabels)) {
      return customHeaderLabels.filter(
        (label: string) => !columnsToOmit?.includes(label)
      );
    }

    if (customHeaderLabels) {
      return Array.from(
        customHeaderLabels.filter(
          (c: CustomHeaderLabel) =>
            !columnsToOmit?.includes(c.data) && c.omit !== true
        ),
        (c: CustomHeaderLabel) => c.label
      );
    }

    return keys(items, columnsToOmit);
  };

  return (
    <div tabIndex={tabIndex} data-testid="table-container">
      {withSearch && (
        <input
          onChange={(e: any) => setSearchVal(e.target.value)}
          {...searchProps}
        />
      )}
      <table className={tableClassName}>
        <Header
          onClick={handleClick}
          theadClassName={theadClassName}
          trClassName={trClassName}
          thClassName={thClassName}
          values={getHeaderValues()}
          keySorted={getClassNamesFor(selectedHeader)}
          sortAscIcon={sortAscIcon}
          sortDescIcon={sortDescIcon}
          columnsWidth={columnsWidth}
        />
        <Body
          values={filteredData}
          onSelect={onSelect}
          handleCellClick={handleCellClick}
          selectedRowClassName={selectedRowClassName}
          columnsToOmit={columnsToOmit}
          tbodyClassName={tbodyClassName}
          trClassName={trClassName}
          tdClassName={tdClassName}
          trProps={trProps}
        />
      </table>
    </div>
  );
};
