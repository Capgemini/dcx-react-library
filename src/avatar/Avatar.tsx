import React, { CSSProperties, useState } from 'react';

type AvatarProps = React.HTMLAttributes<HTMLElement> & {
  /**
   * The class to pass to the parent div
   */
  className?: string;
  /**
   * The class to pass to the (default) anchor / img element
   */
  childClassName?: string;
  /**
   * CSS Styles to pass to the (default) anchor / img element with inline style
   */
  childStyle?: CSSProperties;
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
   * The desired borderColor of the avatar component
   */
  borderColor?: string;
  /**
   * The desired borderWidth of the avatar component
   */
  borderWidth?: string;
  /**
   * The desired borderStyle of the avatar component
   */
  borderStyle?: string;
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
  childClassName,
  childStyle,
  shape = 'circle',
  children,
  src,
  alt,
  avatarLink,
  avatarLinkTarget,
  width = '40px',
  height = '40px',
  borderColor,
  borderStyle,
  borderWidth,
  ...props
}: AvatarProps) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  const renderContents = () => {
    if (hasError) {
      if (children) {
        return children;
      }

      if (alt) {
        return <>{alt[0]}</>;
      }

      return (
        <img
          src={`${process.env.BASE_URL}/${process.env.AVATAR_FALLBACK_IMAGE}`}
          alt={alt}
          className={childClassName}
          style={childStyle}
        />
      );
    }

    return src ? (
      <img
        src={src}
        alt={alt}
        className={childClassName}
        style={childStyle}
        onError={handleError}
      />
    ) : (
      children
    );
  };

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
        borderColor,
        borderWidth,
        borderStyle,
        ...shapeStyles[shape],
        ...props.style,
      }}
    >
      {avatarLink ? (
        <a
          href={avatarLink}
          target={avatarLinkTarget}
          className={childClassName}
          style={childStyle}
        >
          {renderContents()}
        </a>
      ) : (
        renderContents()
      )}
    </div>
  );
};
