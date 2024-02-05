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
   */
  selected?: (number | string)[];
  /**
   * allow to specify a user with Additional props/attributes
   */
  buttonGroupProps?: React.HTMLAttributes<HTMLDivElement>;
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
  buttonGroupProps,
}: ButtonGroupProps) => {
  const [activeButtons, setActiveButtons] = useState<(number | string)[]>([]);

  // This is to get the value || id || index values from each nested button
  // Also throw error if any child is neither a Button comonent nor it has children as a Button component
  const extractButtonData = (
    child: JSX.Element,
    index: number
  ): number | string | [string | number, number] | null => {
    if (typeof child.type === 'function' && child.type.name === 'Button') {
      const value = child.props.value;
      const id = child.props.id;
      return value ? [value, index] : id ? [id, index] : index;
    } else {
      if (child.props.children) {
        const result = extractButtonData(child.props.children, index);
        return result;
      }
      throw new Error('Child dont have Button component');
    }
  };

  const allButtons: (number | string | [string | number, number])[] = React.Children.map(children, (child: JSX.Element, index: number) => {
      return extractButtonData(child, index);
    });

  if (selected) {
    if (type === 'single' && selected.length > 1) {
      throw new Error('Cannot pass multiple parameters if the type is Single');
    }

    // To see if the elements provided in the selected array does not match with any of the buttons
    let missingElements =
      selected && selected.filter((element) => !allButtons.includes(element));

    if (missingElements && missingElements.length > 0) {
      throw new Error(
        'Element in the selected array do not match with any buttons.'
      );
    }
  }

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
    selected && setActiveButtons(selected);
  }, [selected]);

  //check if child is Button component if yes then cloneElement
  //else it will have children so loop them and find the nested Button and then cloneElement

  return (
    <div role="group" className={groupClassName} {...buttonGroupProps}>
      {children &&
        React.Children.map(children, (child: JSX.Element, index: number) => {
          const isButtonComponent = (child: JSX.Element): JSX.Element => {
            const children = (child as { props: { children: JSX.Element } })
              .props.children;

            const value = child.props.value;
            const id = child.props.id;
            let selButton: string | number = index;

            selButton = value || id || index;

            if (selected) {
              selButton = selected.includes(value)
                ? value
                : selected.includes(id)
                ? id
                : index;
            } else {
              selButton = value || id || index;
            }

            if (
              typeof child.type === 'function' &&
              child.type.name === 'Button'
            ) {
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
            } else {
              const updatedChildren = React.Children.map(
                children,
                isButtonComponent
              );
              return React.cloneElement(child, { key: index }, updatedChildren);
            }
          };

          return isButtonComponent(child);
        })}
    </div>
  );
};
