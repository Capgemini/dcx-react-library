import React from 'react';

type SharedProps = React.HTMLAttributes<HTMLElement> & {
  /**
   * The class to pass to the parent div
   */
  className?: string;
  /**
   * The shape variant we want to display (circle, rounded or square)
   */
  shape?: 'circle' | 'rounded' | 'square';
  /**
   * A href property to use on an anchor tag that wraps the avatars child components
   */
  wrappingAnchorHref?: string;
  /**
   * A target property to use on an anchor tag that wraps the avatars child components
   */
  wrappingAnchorTarget?: '_blank' | '_self' | '_parent' | '_top';
  /**
   * The desired width of the avatar component
   */
  width?: string;
  /**
   * The desired height of the avatar component
   */
  height?: string;
};

type AvatarProps = SharedProps & {
  /**
   * Src not used on non image avatars
   */
  src?: never;
  /**
   * Alt not used on non image avatars
   */
  alt?: never;
};

type ImageAvatarProps = SharedProps & {
  /**
   * The src of an image we would like to display.
   */
  src: string;
  /**
   * The alt text for the image element.
   */
  alt?: string;
};

const shapeStyles = {
  circle: {
    borderRadius: '50%',
  },
  rounded: {
    borderRadius: '4px',
  },
  square: {
    borderRadius: '0',
  },
};

export const Avatar = ({
  className,
  shape = 'circle',
  children,
  src,
  alt,
  wrappingAnchorHref,
  wrappingAnchorTarget,
  width = '40px',
  height = '40px',
  ...props
}: AvatarProps | ImageAvatarProps) => {
  let contents = src ? <img src={src} alt={alt} /> : children;

  if (wrappingAnchorHref) {
    contents = (
      <a href={wrappingAnchorHref} target={wrappingAnchorTarget}>
        {contents}
      </a>
    );
  }

  return (
    <div
      className={className}
      {...props}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        width,
        height,
        ...shapeStyles[shape],
        ...props.style,
      }}
    >
      {contents}
    </div>
  );
};
