import React from 'react';
import { Roles } from '../../common';
import { useTabGroup } from '../TabGroup';

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
   * Tab aria-controls, which is the element with the tabpanel role
   */
  ariaControls?: string;
  /**
   * Tab content children
   */
  children?: JSX.Element | string;
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
   * Tab pane id
   */
  tabPaneId?: string;
};

export const Tab = ({
  activeTabClassName,
  ariaControls,
  disabled,
  disabledClassName,
  label,
  className,
  id,
}: TabProps) => {
  const { activeTab, changeActiveTab } = useTabGroup();

  const selected = activeTab === label;
  const classes: string = [
    className,
    selected ? activeTabClassName : undefined,
    disabled ? disabledClassName : undefined,
  ]
    .filter((cls: string | undefined) => cls !== undefined)
    .join(' ')
    .trim();

  const onClickHandler: (event: React.FormEvent<HTMLLIElement>) => void = (
    event: React.FormEvent<HTMLLIElement>
  ) => !disabled && changeActiveTab(event.currentTarget.innerHTML);

  return (
    <li
      role={Roles.tab}
      id={id}
      className={classes}
      aria-controls={ariaControls}
      aria-selected={selected}
      tabIndex={!selected ? -1 : undefined}
      onClick={onClickHandler}
    >
      {label}
    </li>
  );
};
