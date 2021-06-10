import React from 'react';
type SortIconProps = {
  value: string;
  keySorted?: { key: string; direction: 'ascending' | 'descending' };
  sortAscIcon: JSX.Element;
  sortDescIcon: JSX.Element;
};

export const SortIcon = ({
  value,
  keySorted,
  sortAscIcon,
  sortDescIcon,
}: SortIconProps) => {
  let sortIcon = null;
  if (keySorted === undefined) {
    return null;
  } else if (value === keySorted.key && keySorted.direction === 'ascending') {
    sortIcon = sortAscIcon;
  } else if (value === keySorted.key && keySorted.direction === 'descending') {
    sortIcon = sortDescIcon;
  }
  return <>{sortIcon}</>;
};
