import React, { useState } from 'react';
import { classNames } from '../common';

type ButtonGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * allows you to define a class name
   */
  className?: string;
  /**
   * A CSS class for applying the same styling to all the Buttons
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
   * allows you to specify between single toggle or multiple toggle
   */
  type?: 'single' | 'multiple';
  /**
   * handler to get the indices of the selected button
   */
  onClick?: (selectedIndices: number[]) => void;
};

export const ButtonGroup = ({
  className,
  disabled = false,
  buttonVariant = 'primary',
  children,
  layout = 'horizontal',
  buttonClassName,
  type = 'single',
  onClick,
  ...props
}: ButtonGroupProps) => {
  const [activeButtons, setActiveButtons] = useState<number[]>([]);

  const groupClassName = classNames([
    'dcx-button-group',
    className,
    `dcx-button-group-layout--${layout}`,
  ]);

  const handleButtonClick = (index: number) => {
    setActiveButtons((prevActiveButtons) => {
      let newActiveButtons: number[] = [];

      if (type === 'single') {
        newActiveButtons = prevActiveButtons.includes(index) ? [] : [index];
      } else if (type === 'multiple') {
        newActiveButtons = [...prevActiveButtons];
        const indexPosition = newActiveButtons.indexOf(index);

        if (indexPosition !== -1) {
          newActiveButtons.splice(indexPosition, 1);
        } else {
          newActiveButtons.push(index);
        }
      }

      onClick && onClick(newActiveButtons);

      return newActiveButtons;
    });
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
