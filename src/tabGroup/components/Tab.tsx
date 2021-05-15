import React from 'react';
import { Roles } from '../../common';

export type TabProps = {
  /**
   * Tab label
   */
  label: string;
  /**
   * Tab active class name
   */
  activeTabClassName?: string;
  /**
   * The currently active Tab
   */
  activeTab?: string;
  /**
   * Tab aria-controls, which is the element with the tabpanel role
   */
  ariaControls?: string;
  /**
   * Tab class name
   */
  className?: string;
  /**
   * Tab enabled or disabled
   */
  disabled?: boolean;
  /**
   * Tab disabled class name
   */
  disabledClassName?: string;
  /**
   * Tab id
   */
  id?: string;
  /**
   * Tab onClick handler
   */
  onClick?: (label: string) => void;
};

export const Tab = ({
  activeTab,
  activeTabClassName,
  ariaControls,
  disabled,
  disabledClassName,
  label,
  className,
  id,
  onClick,
}: TabProps) => {
  const selected = activeTab === label;
  const classes: string[] = [];

  if (className !== undefined) {
    classes.push(className);
  }

  if (selected && activeTabClassName !== undefined) {
    classes.push(activeTabClassName);
  }

  if (disabled && disabledClassName !== undefined) {
    classes.push(disabledClassName);
  }

  const onClickHandler: (event: React.FormEvent<HTMLLIElement>) => void = (
    event: React.FormEvent<HTMLLIElement>
  ) => onClick && !disabled && onClick(event.currentTarget.innerHTML);

  return (
    <li
      role={Roles.tab}
      id={id}
      className={classes.join(' ').trim()}
      aria-controls={ariaControls}
      aria-selected={selected}
      onClick={onClickHandler}
    >
      {label}
    </li>
  );
};
