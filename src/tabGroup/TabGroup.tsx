import React, { createContext, useContext, useEffect, useRef } from 'react';
import { classNames, Roles, useHydrated } from '../common';

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
};

type TabContextProps = {
  /**
   * Tab Context select tab
   */
  activeTab: string;
  /**
   * Tab previous tab
   */
  previousTab?: string;
  /**
   * Tab next tab
   */
  nextTab?: string;
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
}: TabGroupProps) => {
  const hasUniqueEventKeys: (children: JSX.Element[]) => boolean = (
    children: JSX.Element[]
  ) =>
    children.length ===
    new Set(children.map((child: JSX.Element) => child.props.eventKey)).size;

  if (!hasUniqueEventKeys(children)) {
    throw new Error('Tab event keys must be unique');
  }

  const initialMount = useRef(true);

  const currentActiveKey = activeKey || children[0].props.eventKey;

  const onClickHandler: (id: string) => void = (id: string) => {
    onSelect && onSelect(id);
  };

  useEffect(() => {
    if (!initialMount.current) onSelect && onSelect(currentActiveKey);
    else initialMount.current = false;
  }, [currentActiveKey]);

  const activeTabElement = children.find(
    (child: JSX.Element) => currentActiveKey === child.props.eventKey
  );

  const hydrated = useHydrated();

  const tabPanels = hydrated ? [activeTabElement] : children;

  return (
    <div className={containerClassName}>
      <ol
        role={Roles.tablist}
        id={id}
        className={className}
        aria-label={ariaLabelTabList}
      >
        <TabContext.Provider
          value={{
            activeTab: currentActiveKey,
            changeActiveTab: onClickHandler,
          }}
        >
          {children.map((child: JSX.Element, index: number) => {
            const classes: string = classNames([
              tabClassName,
              child.props.className,
            ]);

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
        </TabContext.Provider>
      </ol>
      {tabPanels.map((tabPanel: JSX.Element | undefined, index: number) => (
        <React.Fragment key={index}>
          {tabPanel && (
            <div
              id={tabPanel.props.eventKey}
              key={index}
              role={Roles.tabpanel}
              className={contentClassName}
              aria-labelledby={tabPanel.props.eventKey}
            >
              {tabPanel.props.children}
            </div>
          )}
        </React.Fragment>
      ))}
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
