import React, { MouseEventHandler, useState } from 'react';
import { classNames } from '../common';

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
}: DetailsProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);

  const handleOnChange: MouseEventHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <details className={detailsClassName} open={open}>
      <summary className={summaryClassName} onClick={handleOnChange}>
        <span className={summaryTextClassName}>{summary}</span>
      </summary>
      <div
        className={classNames([
          {
            [`${detailsTextClassName}`]: detailsTextClassName !== undefined,
            [`${openClassName || OPEN}`]: isOpen,
          },
        ])}
      >
        {children}
      </div>
    </details>
  );
};
