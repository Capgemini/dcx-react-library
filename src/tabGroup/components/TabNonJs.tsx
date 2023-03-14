import React from 'react';
import { classNames, Roles } from '../../common';

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

export const TabNonJs = ({
  eventKey,
  ariaControls,
  disabled,
  disabledClassName,
  label,
  className,
  linkClassName,
}: TabProps) => {
  const classes: string = classNames([
    className,
    {
      [`${disabledClassName}`]: disabled,
    },
  ]);

  return (
    <li role={Roles.presentation} className={classes}>
      <a
        role={Roles.tab}
        id={eventKey}
        className={linkClassName}
        aria-controls={ariaControls}
        href={`#${eventKey}`}
      >
        {label}
      </a>
    </li>
  );
};
