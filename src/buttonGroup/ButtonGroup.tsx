import React, { useEffect, useState } from 'react';
import { classNames } from '../common';

type ButtonGroupProps = {
  /**
   * allows you to define a class name
   */
  className?: string;
  /**
   * A CSS class for applying the same styling to all the Buttons
   */
  buttonsClassName?: string;
  /**
   * allows you to enable disable the button group
   */
  disabled?: boolean;
  /**
   * allows you to specify a variant for the buttons inside the button group
   */
  buttonsVariant?: 'primary' | 'secondary' | 'tertiary';
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
   * handler to get the indices of the selected button. The current method will provide the current event
   * and the selected items.
   * if the button contains the attribute 'value' then will take that one
   * if the button contains the attribute 'id' will take that one
   * otherwise will contain the index of the button
   */
  onClick?: (
    evt: React.MouseEvent<HTMLButtonElement>,
    selected: (string | number)[]
  ) => void;

  /**
   * It will allow to pass the selected button or buttons.
   * if the button contains the attribute 'value' then will take that one
   * if the button contains the attribute 'id' will take that one
   * otherwise will contain the index of the button
   */ selected?: (number | string)[];
};

export const ButtonGroup = ({
  className,
  disabled = false,
  buttonsVariant = 'primary',
  children,
  layout = 'horizontal',
  buttonsClassName,
  type = 'single',
  onClick,
  selected,
  ...props
}: ButtonGroupProps) => {
  const [activeButtons, setActiveButtons] = useState<(number | string)[]>([]);

  const groupClassName = classNames([
    'dcx-button-group',
    className,
    `dcx-button-group-layout--${layout}`,
  ]);

  const handleButtonClick = (
    evt: React.MouseEvent<HTMLButtonElement>,
    selButton: number | string
  ) => {
    setActiveButtons((prevActiveButtons) => {
      let newActiveButtons: (number | string)[] = [];

      if (type === 'single') {
        newActiveButtons = prevActiveButtons.includes(selButton)
          ? []
          : [selButton];
      } else if (type === 'multiple') {
        newActiveButtons = [...prevActiveButtons];
        const indexPosition = newActiveButtons.indexOf(selButton);

        if (indexPosition !== -1) {
          newActiveButtons.splice(indexPosition, 1);
        } else {
          newActiveButtons.push(selButton);
        }
      }

      onClick && onClick(evt, newActiveButtons);

      return newActiveButtons;
    });
  };

  useEffect(() => {
    if (selected != undefined) setActiveButtons(selected);
  }, []);

  return (
    <div role="group" className={groupClassName} {...props}>
      {children &&
        React.Children.map(children, (child: JSX.Element, index: number) => {
          const value = child.props.value;
          const id = child.props.id;
          let selButton: string | number = index;

          if (value) selButton = value;
          else if (id) selButton = id;
          else selButton = index;

          const isActive = activeButtons.includes(selButton);

          const childClassName = classNames([
            buttonsClassName,
            { 'active-class': isActive },
          ]);

          return React.cloneElement(child, {
            key: index,
            disabled,
            variant: buttonsVariant,
            isActive,
            className: childClassName,
            onClick: (evt: React.MouseEvent<HTMLButtonElement>) =>
              handleButtonClick(evt, selButton),
          });
        })}
    </div>
  );
};
