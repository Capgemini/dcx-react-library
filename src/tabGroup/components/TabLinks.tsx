import React from 'react';

export type TabLinksProps = {
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

export const TabLinks = ({
  children,
  tabClassName,
  activeTabClassName,
  disabledClassName,
  tabLinkClassName,
}: TabLinksProps) => (
  <>
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
  </>
);
