import React from 'react';
import { Roles } from '../common';

export type TabGroupProps = {
  /**
   * Tab Group children
   */
  children: JSX.Element[];
  /**
   * Tab Group tab list araia label
   */
  ariaLabelTabList?: string;
  /**
   * Tab Group active tab class
   */
  activeTabClassName?: string;
  /**
   * Tab Group id
   */
  id?: string;
  /**
   * Tab Group disabled class name
   */
  disabledClassName?: string;
  /**
   * Tab Group selected tab
   */
  activeKey?: string;
  /**
   * Tab Group list class name
   */
  className?: string;
  /**
   * Tab Group container class name
   */
  containerClassName?: string;
  /**
   * Tab Group content class name
   */
  contentClassName?: string;
  /**
   * Tab Group tab class name
   */
  tabClassName?: string;
  /**
   * Tab Group tab link class name
   */
  tabLinkClassName?: string;
};

export const TabGroupNonJs = ({
  children,
  id,
  ariaLabelTabList,
  activeTabClassName,
  disabledClassName,
  className,
  containerClassName,
  contentClassName,
  tabClassName,
  tabLinkClassName,
}: TabGroupProps) => (
  <div className={containerClassName}>
    <ol
      role={Roles.tablist}
      id={id}
      className={className}
      aria-label={ariaLabelTabList}
    >
      {children.map((child: JSX.Element, index: number) => {
        const classes: string = [tabClassName, child.props.className]
          .filter((cls: string) => cls !== undefined)
          .join(' ');

        return (
          <child.type
            key={index}
            {...child.props}
            activeTabClassName={activeTabClassName}
            ariaControls={child.props.eventKey}
            disabledClassName={disabledClassName}
            className={classes}
            linkClassName={tabLinkClassName}
          />
        );
      })}
    </ol>
    {children.map((tab: JSX.Element, index: number) => (
      <div
        id={tab.props.eventKey}
        key={index}
        role={Roles.tabpanel}
        className={contentClassName}
        tabIndex={0}
        aria-labelledby={tab.props.eventKey}
      >
        {tab.props.children}
      </div>
    ))}
  </div>
);
