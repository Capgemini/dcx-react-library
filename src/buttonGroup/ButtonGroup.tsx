import React, { useState } from 'react';
import { classNames } from '../common';

type ButtonGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * allows you to define a class name
   */
  className?: string;
  /**
   *
   */
  buttonClassName?: string;
  /**
   * allows you to enable disable the button group
   */
  disabled?: boolean;
  /**
   * allows you to specify a variant for the buttons inside the button group
   */
  buttonVariant?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Button Group children
   */
  children: JSX.Element[];
  /**
   * Defines how the button group is rendered, either horizontally or vertically
   */
  layout?: 'vertical' | 'horizontal';
  /**
   *
   */
  type?: 'single' | 'multiple';
};

export const ButtonGroup = ({
  className,
  disabled = false,
  buttonVariant = 'primary',
  children,
  layout = 'horizontal',
  buttonClassName,
  type = 'single',
  ...props
}: ButtonGroupProps) => {
  const [activeButtons, setActiveButtons] = useState<number[]>([]);

  const groupClassName = classNames([
    'dcx-button-group',
    className,
    `dcx-button-group-layout--${layout}`,
  ]);

  const handleButtonClick = (index: number) => {
    if (type === 'single') {
      setActiveButtons((prevActiveButtons) =>
        prevActiveButtons.includes(index) ? [] : [index]
      );
    } else if (type === 'multiple') {
      setActiveButtons((prevActiveButtons) => {
        const newActiveButtons = [...prevActiveButtons];
        const indexPosition = newActiveButtons.indexOf(index);

        if (indexPosition !== -1) {
          newActiveButtons.splice(indexPosition, 1);
        } else {
          newActiveButtons.push(index);
        }

        return newActiveButtons;
      });
    }
  };

  return (
    <div role="group" className={groupClassName} {...props}>
      {children &&
        React.Children.map(children, (child: any, index: number) => {
          const isActive = activeButtons.includes(index);

          const childClassName = classNames([
            buttonClassName,
            { 'active-class': isActive },
          ]);

          return React.cloneElement(child, {
            key: index,
            disabled,
            variant: buttonVariant,
            isActive,
            className: childClassName,
            onClick: () => handleButtonClick(index),
          });
        })}
    </div>
  );
};
