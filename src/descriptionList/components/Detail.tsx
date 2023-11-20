import React from 'react';
import { useDescriptionList } from '../UseDescriptionList';
import { classNames } from '../../common';

interface DetailProps {
  /**
   * allow to specify a custom content
   */
  children: JSX.Element | string;
  /**
   * A CSS class for styling Definition Term
   */
  className?: string;
  /**
   * allow to specify Additional props/attributes
   */
  detailProps?: React.HTMLProps<HTMLDListElement>;
}

export const Detail = ({ className, children, detailProps }: DetailProps) => {
  const { detailClassName } = useDescriptionList();

  return (
    <dd
      className={classNames([
        'dcx-description-detail',
        className,
        detailClassName,
      ])}
      {...detailProps}
    >
      {children}
    </dd>
  );
};
