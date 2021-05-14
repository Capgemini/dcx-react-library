import React, { Fragment, useState } from 'react';
import { Roles } from '../common';
import { Tab, TabProps } from './components/Tab';

export type TabContentProps = {
  /**
   * Tab conent label
   */
  label: string;
  /**
   * Tab content children
   */
  children: JSX.Element;
};

export type TabGroupProps = {
  /**
   * Tab Group tabs
   */
  tabs: TabProps[];
  /**
   * Tab Group Content
   */
  tabContents: TabContentProps[];
  /**
   * Tab Group active tab label
   */
  defaultActiveTab?: string;
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
   * Tab Group onClick handler
   */
  onClick?: (label: string) => void;
};

export const TabGroup = ({
  tabs,
  tabContents,
  defaultActiveTab,
  className,
  containerClassName,
  onClick,
}: TabGroupProps) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultActiveTab || tabs[0].label
  );

  const onClickHandler: (tab: string) => void = (label: string) => {
    setActiveTab(label);

    if (onClick) {
      onClick(label);
    }
  };

  return (
    <div className={containerClassName}>
      <ol role={Roles.tabpanel} className={className}>
        {tabs.map((tab: TabProps, index: number) => (
          <Tab
            key={index}
            {...tab}
            activeTab={activeTab}
            onClick={(label: string) => {
              tab.onClick && tab.onClick(label);
              onClickHandler(label);
            }}
          />
        ))}
      </ol>
      <div className={containerClassName}>
        {tabContents.map((tabContent: TabContentProps, index: number) => {
          if (tabContent.label !== activeTab) return undefined;
          return <Fragment key={index}>{tabContent.children}</Fragment>;
        })}
      </div>
    </div>
  );
};
