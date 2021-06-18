import React from 'react';
import { Roles } from '../../common';
import { useTabGroup } from '../TabGroup';

export type TabProps = {
  /**
   * Tab key / id
   */
  eventKey: string;
  /**
   * Tab label
   */
  label?: JSX.Element | string;
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
};

export const Tab = ({
  eventKey,
  activeTabClassName,
  ariaControls,
  disabled,
  disabledClassName,
  label,
  className,
}: TabProps) => {
  const { activeTab, changeActiveTab } = useTabGroup();

  const selected = activeTab === eventKey;
  const classes: string = [
    className,
    selected ? activeTabClassName : undefined,
    disabled ? disabledClassName : undefined,
  ]
    .filter((cls: string | undefined) => cls !== undefined)
    .join(' ')
    .trim();

  const onClickHandler: (
    event: React.MouseEvent<HTMLLIElement> | React.TouchEvent<HTMLLIElement>
  ) => void = (
    event: React.MouseEvent<HTMLLIElement> | React.TouchEvent<HTMLLIElement>
  ) => changeActiveTab(event.currentTarget.id);

  return (
    <li
      role={Roles.tab}
      id={eventKey}
      className={classes}
      aria-controls={ariaControls}
      aria-selected={selected}
      tabIndex={!selected ? -1 : undefined}
      onClick={!disabled ? onClickHandler : undefined}
    >
      {label}
    </li>
  );
};
