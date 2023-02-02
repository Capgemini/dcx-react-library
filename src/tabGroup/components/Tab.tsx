import React from 'react';
import { classNames, Roles } from '../../common';
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
   * Tab Link class name
   */
  linkClassName?: string;
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
  linkClassName,
}: TabProps) => {
  const { activeTab, changeActiveTab } = useTabGroup();

  const selected = activeTab === eventKey;

  const classes: string = classNames([
    className,
    {
      [`${activeTabClassName}`]: selected,
      [`${disabledClassName}`]: disabled,
    },
  ]);

  const onClickHandler: (
    event:
      | React.MouseEvent<HTMLAnchorElement>
      | React.TouchEvent<HTMLAnchorElement>
  ) => void = (
    event:
      | React.MouseEvent<HTMLAnchorElement>
      | React.TouchEvent<HTMLAnchorElement>
  ) => changeActiveTab(event.currentTarget.id);

  return (
    <li role={Roles.presentation} className={classes}>
      <a
        role={Roles.tab}
        id={eventKey}
        className={linkClassName}
        aria-controls={ariaControls}
        aria-selected={selected}
        tabIndex={!selected ? -1 : undefined}
        onClick={!disabled ? onClickHandler : undefined}
        href={`#${eventKey}`}
      >
        {label}
      </a>
    </li>
  );
};
