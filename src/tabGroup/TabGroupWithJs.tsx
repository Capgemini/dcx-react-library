import React, {
  createContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Roles } from '../common';
import { TabLinks } from './components/TabLinks';

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
  ref: any;
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

export const TabGroupWithJs = ({
  children,
  id,
  ariaLabelTabList,
  activeKey,
  className,
  containerClassName,
  contentClassName,
  onSelect,
  ref,
}: TabGroupProps) => {
  const hasUniqueEventKeys: (children: JSX.Element[]) => boolean = (
    children: JSX.Element[]
  ) =>
    children.length ===
    new Set(children.map((child: JSX.Element) => child.props.eventKey)).size;

  if (!hasUniqueEventKeys(children)) {
    throw new Error('Tab event keys must be unique');
  }

  const defaultActiveTab: string = children.find(
    (child: JSX.Element) => activeKey === child.props.eventKey
  )?.props.eventKey;

  const initialMount = useRef(true);

  const [activeTab, setActiveTab] = useState<string>(
    defaultActiveTab || children[0].props.eventKey
  );

  const onClickHandler: (id: string) => void = (id: string) => setActiveTab(id);

  const updateActiveTab: (id: string) => boolean = (id: string) => {
    if (children.some((child: JSX.Element) => child.props.eventKey === id)) {
      setActiveTab(id);
      return true;
    }

    return false;
  };

  useImperativeHandle(ref, () => ({
    updateActiveTab,
  }));

  useEffect(() => {
    if (!initialMount.current) onSelect && onSelect(activeTab);
    else initialMount.current = false;
  }, [activeTab]);

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
          <TabLinks children={children} />
        </TabContext.Provider>
      </ol>
      {children.map((tab: JSX.Element, index: number) =>
        tab.props.eventKey === activeTab ? (
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
        ) : undefined
      )}
    </div>
  );
};
