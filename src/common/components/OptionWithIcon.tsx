import React, { useState } from 'react';
import { iconStyle } from '../../formSelect/FormSelect';
import { OptionProps } from '../../common/components/Option';

export type OptionWithIconProps = OptionProps & {
  /**
   * option icon url
   */
  icon?: string;
  /**
   * option icon style
   */
  iconStyle?: iconStyle;
  /**
   * option disabled item text  color
   */
  itemDisabledTextColor?: string;
  /**
   * option group tile background color
   */
  groupTilteBackgroundColor?: string;
  /**
   * option items text color
   */
  itemTextColor?: string;
  /**
   * option items background color
   */
  itemBackgroundColor?: string;
  /**
   * option items hover background color
   */
  itemHoverBackgroundColor?: string;
};

export const OptionWithIcon = ({
  id,
  icon,
  value,
  disabled,
  className,
  ariaLabel,
  iconStyle,
  isGroupTitle,
  itemTextColor,
  itemBackgroundColor,
  itemDisabledTextColor,
  itemHoverBackgroundColor,
  groupTilteBackgroundColor,
}: Partial<OptionWithIconProps> & { isGroupTitle?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id={id}
      data-testid={id}
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: itemTextColor || 'black',
        cursor: disabled ? 'not-allowed' : isGroupTitle ? 'default' : 'pointer',
        ...(isGroupTitle && { fontWeight: 'bold' }),
        backgroundColor:
          isHovered && !disabled && !isGroupTitle
            ? itemHoverBackgroundColor
            : isGroupTitle
            ? groupTilteBackgroundColor
            : itemBackgroundColor || 'white',
        ...(disabled && { color: itemDisabledTextColor || '#747d8c' }),
      }}
      aria-label={ariaLabel || value}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && (
        <img
          src={icon}
          alt={value}
          data-testid={`${id}-icon`}
          height={iconStyle?.height}
          width={`calc(${iconStyle?.width} + 10px)`}
          data-disable={disabled ? 'true' : 'false'}
          style={{
            paddingLeft: '10px',
            borderRadius: `${iconStyle?.borderRadius}`,
          }}
        />
      )}
      <p
        style={{
          margin: '0px',
          padding: `${
            icon ? '4px 4px' : isGroupTitle ? '4px 10px' : '4px 32px'
          }`,
          width: '100%',
          fontSize: '14px',
        }}
        data-testid={`${id}-value`}
        data-disable={disabled ? 'true' : 'false'}
        data-is-group-title={isGroupTitle ? 'true' : 'false'}
      >
        {value}
      </p>
    </div>
  );
};
