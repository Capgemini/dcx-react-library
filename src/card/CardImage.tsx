import React, { useContext } from 'react';
import { classNames } from '../common';
import CardContext from './CardContext';

type CardImageProps = {
  /**
   * Relevant classes for shared / reusable styling
   */
  className?: string;
  /**
   * src of the image to add
   */
  src: string;
  /**
   * alternative text of the image
   */
  alt: string;
} & React.HTMLAttributes<HTMLElement>;

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
