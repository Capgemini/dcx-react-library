import React, { MouseEventHandler, useState } from 'react';

type DetailsProps = {
  /**
   * details text
   */
  details: string;
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
  details,
  summary,
  detailsClassName,
  detailsTextClassName,
  openClassName,
  summaryClassName,
  summaryTextClassName,
}: DetailsProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnChange: MouseEventHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <details className={detailsClassName}>
      <summary className={summaryClassName} onClick={handleOnChange}>
        <span className={summaryTextClassName}>{summary}</span>
      </summary>
      <div
        className={`${
          detailsTextClassName !== undefined ? detailsTextClassName : ''
        } ${isOpen ? openClassName || OPEN : ''}`.trim()}
      >
        {details}
      </div>
    </details>
  );
};
