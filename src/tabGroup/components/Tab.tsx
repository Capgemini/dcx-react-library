import React from 'react';
import { isServer } from '../../common';
import { TabNonJs } from './TabNonJs';
import { TabWithJs } from './TabWithJs';

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
}: TabProps) =>
  isServer() ? (
    <TabNonJs
      eventKey={eventKey}
      activeTabClassName={activeTabClassName}
      ariaControls={ariaControls}
      disabled={disabled}
      disabledClassName={disabledClassName}
      label={label}
      className={className}
      linkClassName={linkClassName}
    />
  ) : (
    <TabWithJs
      eventKey={eventKey}
      activeTabClassName={activeTabClassName}
      ariaControls={ariaControls}
      disabled={disabled}
      disabledClassName={disabledClassName}
      label={label}
      className={className}
      linkClassName={linkClassName}
    />
  );
