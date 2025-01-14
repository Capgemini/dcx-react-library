import React from 'react';

type BadgeProps = {
  /**
   * Standard react children components that render next to the badges' native child component.
   */
  children: React.ReactNode;
  /**
   * Whether the badge should use 'dot' styling
   */
  dot?: boolean;
  /**
   * Contents to pass to the badge itself e.g. a count
   */
  badgeContents?: React.ReactNode;
  /**
   * The class to pass to the wrapping parent div
   */
  containerClassName?: string;
  /**
   * The class to pass to the badge element
   */
  badgeClassName?: string;
  /**
   * The horizontal alignment the element should take (left or right)
   */
  horizontalAlignment?: 'left' | 'right';
  /**
   * The vertical alignment the element should take (left or right)
   */
  verticalAlignment?: 'top' | 'bottom';
};

const containerStyles: React.CSSProperties = {
  position: 'absolute',
  borderRadius: '50%',
  minWidth: '20px',
  minHeight: '20px',
  textAlign: 'center',
  lineHeight: '1',
  zIndex: '100',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignContent: 'center',
};

const dotStyles: React.CSSProperties = {
  width: '8px',
  height: '8px',
  minWidth: '8px',
  minHeight: '8px',
  padding: 0,
  fontSize: 0,
};

export const Badge = ({
  children,
  dot = false,
  horizontalAlignment = 'right',
  verticalAlignment = 'top',
  badgeContents,
  containerClassName: className,
  badgeClassName: contentsClassName,
}: BadgeProps) => {
  const mergedStyles = {
    ...containerStyles,
    ...(dot ? dotStyles : {}),
  };

  if (verticalAlignment == 'top') {
    mergedStyles.top = '-5px';
  } else {
    mergedStyles.bottom = '-5px';
  }

  if (horizontalAlignment == 'right') {
    mergedStyles.right = '-5px';
  } else {
    mergedStyles.left = '-5px';
  }

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
      }}
      className={className}
    >
      {children}
      <div
        style={mergedStyles}
        className={contentsClassName}
        data-testid="badge"
      >
        {!dot && badgeContents}
      </div>
    </div>
  );
};
