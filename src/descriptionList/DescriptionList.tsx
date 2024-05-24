import React from 'react';
import { DescriptionListContext } from './UseDescriptionList';
import { classNames } from '../common';

interface DescriptionListProps {
  /**
   * allow to specify a user custom content
   */
  children?: JSX.Element[] | JSX.Element;
  /**
   * A CSS class for styling list
   */
  className?: string;
  /**
   * allow to specify a user with Additional props/attributes
   */
  descListProps?: React.HTMLProps<HTMLDListElement>;
  /**
   * A CSS class for applying same styling to all the Definition Term
   */
  termClassName?: string;
  /**
   * A CSS class for applying same styling to all the Definition Detail
   */
  detailClassName?: string;
}

export const DescriptionList = ({
  termClassName,
  detailClassName,
  children,
  className,
  descListProps,
}: DescriptionListProps) => (
  <DescriptionListContext.Provider value={{ termClassName, detailClassName }}>
    <dl
      className={classNames(['dcx-description-list', className])}
      {...descListProps}
    >
      {children}
    </dl>
  </DescriptionListContext.Provider>
);
