import React from 'react';
import { classNames } from '../common';

type CardImageProps = {
  /**
   * Relevant classes for shared / reusable styling
   */
  className?: string;
  /**
   * additional properties to support something else that we didn't plan
   */
  props?: React.HTMLAttributes<HTMLElement>;
  /**
   * src of the image to add
   */
  src: string;
  /**
   * alternative text of the image
   */
  alt: string;
};

export const CardImage: React.FC<CardImageProps> = ({
  className = '',
  src,
  alt,
  ...props
}: CardImageProps) => (
  <img
    className={classNames(['dcx-card-image', className])}
    src={src}
    alt={alt}
    {...props}
  />
);
