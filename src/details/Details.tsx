import React, { MouseEventHandler, useState } from 'react';

type DetailsProps = {
  /**
   * details
   */
  children: JSX.Element | string;
  /**
   * summary text
   */
  summary: string;
  /**
   * details class name
   */
  detailsClassName?: string;
  /**
   * details text class name
   */
  detailsTextClassName?: string;
  /**
   * details open boolean
   */
  open?: boolean;
  /**
   * detail open class
   */
  openClassName?: string;
  /**
   * summary class name
   */
  summaryClassName?: string;
  /**
   * summary text class name
   */
  summaryTextClassName?: string;
  /**
   * summary text id name
   */
  summaryTextId?: any;
  /**
   * details tab index
   */
  tabIndex?: number;
};

const OPEN: string = 'open';

export const Details = ({
  children,
  summary,
  detailsClassName,
  detailsTextClassName,
  open = false,
  openClassName,
  summaryClassName,
  summaryTextClassName,
  summaryTextId,
  tabIndex = 0,
}: DetailsProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);

  const handleOnChange: MouseEventHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <details className={detailsClassName} open={open}>
      <summary
        className={summaryClassName}
        onClick={handleOnChange}
        tabIndex={tabIndex}
      >
        <span id={summaryTextId} className={summaryTextClassName}>{summary}</span>
      </summary>
      <div
        className={`${
          detailsTextClassName !== undefined ? detailsTextClassName : ''
        } ${isOpen === true ? openClassName || OPEN : ''}`.trim()}
      >
        {children}
      </div>
    </details>
  );
};
