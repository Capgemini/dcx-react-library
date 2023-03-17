import React, { createContext, useContext } from 'react';
import { isServer } from '../common';
import { TabGroupNonJs } from './TabGroupNonJs';
import { TabGroupWithJs } from './TabGroupWithJs';

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
  /**
   * Tab Group onSelect handler
   */
  onSelect?: (eventKey: string) => void;
  /**
   * ref passed in of DOM element
   */
  ref?: any;
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
  activeKey,
  className,
  containerClassName,
  contentClassName,
  tabClassName,
  tabLinkClassName,
  onSelect,
  ref,
}: TabGroupProps) =>
  !isServer() ? (
    <TabGroupWithJs
      children={children}
      id={id}
      ariaLabelTabList={ariaLabelTabList}
      activeTabClassName={activeTabClassName}
      disabledClassName={disabledClassName}
      activeKey={activeKey}
      className={className}
      containerClassName={containerClassName}
      contentClassName={contentClassName}
      tabClassName={tabClassName}
      tabLinkClassName={tabLinkClassName}
      onSelect={onSelect}
      ref={ref}
    />
  ) : (
    <TabGroupNonJs
      children={children}
      id={id}
      ariaLabelTabList={ariaLabelTabList}
      activeTabClassName={activeTabClassName}
      disabledClassName={disabledClassName}
      activeKey={activeKey}
      className={className}
      containerClassName={containerClassName}
      contentClassName={contentClassName}
      tabClassName={tabClassName}
      tabLinkClassName={tabLinkClassName}
    />
  );

export const useTabGroup = () => {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error('Tab must be used within a TabGroup');
  }
  return context;
};
