import React, { useState } from 'react';
import { Roles } from '../common';
import { Tab } from './components/Tab';

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
   * Tab Group onClick handler
   */
  onClick?: (label: string) => void;
};

export const TabGroup = ({
  children,
  id,
  ariaLabelTabList,
  activeTabClassName,
  disabledClassName,
  className,
  containerClassName,
  contentClassName,
  tabClassName,
  onClick,
}: TabGroupProps) => {
  const defaultActiveTab: string = children.find(
    (child: JSX.Element) => child.props.activeTab === child.props.label
  )?.props.label;

  const [activeTab, setActiveTab] = useState<string>(
    defaultActiveTab || children[0].props.label
  );

  const onClickHandler: (tab: string) => void = (label: string) => {
    setActiveTab(label);

    if (onClick) {
      onClick(label);
    }
  };

  return (
    <div className={containerClassName}>
      <ol
        role={Roles.tablist}
        id={id}
        className={className}
        aria-label={ariaLabelTabList}
      >
        {children.map((tab: JSX.Element, index: number) => {
          const classes: string[] = [];

          if (tabClassName !== undefined) classes.push(tabClassName);
          if (tab.props.className !== undefined)
            classes.push(tab.props.className);

          return (
            <Tab
              key={index}
              {...tab.props}
              activeTab={activeTab}
              activeTabClassName={activeTabClassName}
              ariaControls={tab.props.tabPaneId}
              disabledClassName={disabledClassName}
              className={classes.join(' ')}
              onClick={(label: string) => {
                onClickHandler(label);
              }}
            />
          );
        })}
      </ol>
      {children.map((tab: JSX.Element, index: number) => {
        if (tab.props.label !== activeTab) return undefined;
        return (
          <div
            id={tab.props.tabPaneId}
            key={index}
            role={Roles.tabpanel}
            className={contentClassName}
            tabIndex={0}
            aria-labelledby={tab.props.id}
          >
            {tab.props.children}
          </div>
        );
      })}
    </div>
  );
};
