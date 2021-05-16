import React, { createContext, useContext, useState } from 'react';
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
   * Tab Group default selected tab
   */
  defaultSelectedTab?: string;
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

type TabContextProps = {
  /**
   * Tab Context select tab
   */
  activeTab: string;
  /**
   * Tab Context update selected tab
   */
  changeActiveTab: (label: string) => void;
};

export const TabContext = createContext<TabContextProps | undefined>(undefined);

export const TabGroup = ({
  children,
  id,
  ariaLabelTabList,
  activeTabClassName,
  disabledClassName,
  defaultSelectedTab,
  className,
  containerClassName,
  contentClassName,
  tabClassName,
  onClick,
}: TabGroupProps) => {
  const defaultActiveTab: string = children.find(
    (child: JSX.Element) => defaultSelectedTab === child.props.label
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
        <TabContext.Provider
          value={{ activeTab, changeActiveTab: onClickHandler }}
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
                ariaControls={child.props.tabPaneId}
                disabledClassName={disabledClassName}
                className={classes}
              />
            );
          })}
        </TabContext.Provider>
      </ol>
      {children.map((tab: JSX.Element, index: number) =>
        tab.props.label === activeTab ? (
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
        ) : (
          undefined
        )
      )}
    </div>
  );
};

export const useTabGroup = () => {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error('Tab must be used within a TabGroup');
  }
  return context;
};
