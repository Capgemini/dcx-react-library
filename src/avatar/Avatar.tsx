import React from 'react';

type AvatarProps = React.HTMLAttributes<HTMLElement> & {
  /**
   * The class to pass to the parent div
   */
  className?: string;
  /**
   * The shape variant we want to display (circle, rounded or square)
   */
  shape?: 'circle' | 'rounded' | 'square';
  /**
   * A target url that the avatar should link to
   */
  avatarLink?: string;
  /**
   * The target behaviour that should be used with the `avatarLink` prop
   */
  avatarLinkTarget?: '_blank' | '_self' | '_parent' | '_top';
  /**
   * The desired width of the avatar component
   */
  width?: string;
  /**
   * The desired height of the avatar component
   */
  height?: string;
  /**
   * The src of an image we would like to display.
   */
  src?: string;
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
  avatarLink,
  avatarLinkTarget,
  width = '40px',
  height = '40px',
  ...props
}: AvatarProps) => {
  let contents = src ? <img src={src} alt={alt} /> : children;

  if (avatarLink) {
    contents = (
      <a href={avatarLink} target={avatarLinkTarget}>
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
