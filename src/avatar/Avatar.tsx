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
   * The predefined background colours that can be set. These can be overwritten with the 'style' prop.
   */
  backgroundColourOption?: 'default' | 'light' | 'dark';
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

const backgroundColourOptions = {
  default: '#bdbdbd',
  dark: '#000',
  light: '#fff',
};

export const Avatar = ({
  className,
  shape = 'circle',
  backgroundColourOption = 'default',
  children,
  src,
  alt,
  ...props
}: AvatarProps | ImageAvatarProps) => (
  <div
    className={className}
    {...props}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      width: '40px',
      height: '40px',
      backgroundColor: backgroundColourOptions[backgroundColourOption],
      ...shapeStyles[shape],
      ...props.style,
    }}
  >
    {src ? <img src={src} alt={alt} /> : children}
  </div>
);
