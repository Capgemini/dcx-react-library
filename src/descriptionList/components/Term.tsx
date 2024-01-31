import React from 'react';
import { useDescriptionList } from '../UseDescriptionList';
import { classNames } from '../../common';

interface TermProps {
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
  termProps?: React.HTMLProps<HTMLDListElement>;
}

export const Term = ({ className, children, termProps }: TermProps) => {
  const { termClassName } = useDescriptionList();

  return (
    <dt
      className={classNames(['dcx-description-term', className, termClassName])}
      {...termProps}
    >
      {children}
    </dt>
  );
};
