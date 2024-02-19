import React, { useContext } from 'react';
import { classNames } from '../common';
import CardContext from './CardContext';

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
  className,
  src,
  alt,
  ...props
}: CardImageProps) => {
  const { layout, variant } = useContext(CardContext);

  return (
    <img
      className={classNames([
        'dcx-card-image',
        `dcx-card-image-${layout}`,
        `dcx-card-image-${variant}`,
        className,
      ])}
      src={src}
      alt={alt}
      {...props}
    />
  );
};
