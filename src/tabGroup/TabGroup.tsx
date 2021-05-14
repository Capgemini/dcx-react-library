import React, { Fragment, useState } from 'react';
import { Roles } from '../common';
import { Tab } from './components/Tab';

export type TabProps = {
  /**
   * Tab conent label
   */
  label: string;
  /**
   * Tab enabled or disabled
   */
  disabled?: boolean;
  /**
   * Tab class name
   */
  className?: string;
  /**
   * Tab id
   */
  id?: string;
};

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
   * Tab Group active tab class
   */
  activeTabClassName?: string;
  /**
   * Tab Group id
   */
  id?: string;
  /**
   * Tab Group active tab label
   */
  defaultActiveTab?: string;
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
  id,
  tabs,
  tabContents,
  activeTabClassName,
  disabledClassName,
  defaultActiveTab,
  className,
  containerClassName,
  tabClassName,
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
      <ol role={Roles.tabpanel} id={id} className={className}>
        {tabs.map((tab: TabProps, index: number) => {
          const classes: string[] = [];

          if (tabClassName !== undefined) classes.push(tabClassName);
          if (tab.className !== undefined) classes.push(tab.className);

          return (
            <Tab
              key={index}
              {...tab}
              activeTab={activeTab}
              activeTabClassName={activeTabClassName}
              ariaControls={id}
              disabledClassName={disabledClassName}
              className={classes.join(' ')}
              onClick={(label: string) => {
                onClickHandler(label);
              }}
            />
          );
        })}
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
